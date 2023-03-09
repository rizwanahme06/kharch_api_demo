import express, { NextFunction, Request, Response } from "express"
import { Customers } from "../model/customer.model";
import { CustomerResponse,FailResponse } from "../model/Response/customer.response";
import { generateOTP, sendOTPEmail, otpCache, saveOTP } from '../security/OTPHandler'
import jwt from 'jsonwebtoken'



class customerController {
    async create(req: Request, res: Response) {
        const customer = {
            id: req.body.id,
            roleId: req.body.roleId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            mobile: req.body.mobile,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive || 0,
            isDeleted: req.body.isDeleted || 0,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            modifiedBy: req.body.modifiedBy,
            modifiedAt: new Date(),
            otp: req.body.otp
        };

        try {
            const name = await Customers.findOne({ where: { email: req?.body.email, mobile: req.body.mobile } });

            if (name) {
                return res.json({ msg: "email or mobile number already exist" })
            }

            const record = await Customers.create(customer)

            return res.json({ status: "success", error: null, msg: 'data has been uploaded successfully', data: CustomerResponse.CREATE?.(record) });
            
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: "Error" })
        }
    }

    async SendEmail(req: Request, res: Response) {

        try {

            if (await Customers.findOne({ where: { email: req?.body.email } })) {
                const { email } = req.body;
                const otp = generateOTP(email);

                try {
                    await sendOTPEmail(email, await otp);
                    res.status(200).json({ message: 'OTP sent successfully.' });

                } catch (e: any) {
                    return res.json({ data: e.data, error: e, msg: e.massage, status: "Error" })
                }

            }
            else{
                res.json("wrong Email");
            }
            // return FailResponse("error") 

        } catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: "error " })
        }

    }

    async VarifyEmail(req: Request, res: Response) {
        try {

            const { email, otp,isActive } = req.body;
            const cachedOTP = otpCache[email];

            if (cachedOTP && cachedOTP.otp === otp && cachedOTP.expirationTime > Date.now()) {
                const token = jwt.sign({ email }, 'my_secret_key');
                res.json({ message: "success", token })
                await Customers.update({ isActive: 1 }, {
                    where: {
                      email: email
                    }
                  });
            }
            else{
                res.json("you have enter wrong OTP")
            }
        } 
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: "Error " })
        }

    }

    
    async  Login(req: any, res: Response, next: NextFunction) {


        try {
            const bearerHeader = req.headers["authorization"]
            if (typeof bearerHeader !== 'undefined') {

                const bearer = bearerHeader?.split(" ");
                const bearerToken = bearer[1];
                req.token = bearerToken

                jwt.verify(req.token,'my_secret_key',async function(err:any,data:any) {
                    if(err){
                        res.json(err)
                    }
                    else{
                        data.isActive = 1;
                        res.json({
                            message: 'Successfully logged in',
                            data: data
                        });
                    }
                })

                next();
            } else {
                res.sendStatus(403)
            }

        } catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: "Fail " })
        }


    }

    async GetAll(req: Request, res: Response) {


        try {
            const record = await Customers.findAll({ attributes: ['id', 'roleId', 'FirstName', "LastName", "Email", "Mobile"] });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: record });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: "Fail " })
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Customers.findOne({ where: { id } });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: CustomerResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: "Fail" })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Customers.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }

            const updateRecord = await record.update(req.body, { FirstName: record.getDataValue('firstName'), lastName: record.getDataValue('lastName'), email: record.getDataValue('email'), mobile: record.getDataValue('mobile') });
            //  res.send({record:updateRecord}) 
            return res.json({ status: "success", error: null, msg: 'data has been updated successfully', data: CustomerResponse.CREATE?.(record) });

        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: "Fail" })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Customers.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }


            const updateRecord = await record.update({ isDeleted: 1 }, {
                where: {
                    id: id
                }
            });
            res.send({ record: updateRecord })
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: "Fail" })
        }
    }
}

export default new customerController();