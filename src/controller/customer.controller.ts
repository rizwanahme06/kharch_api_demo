import express, { Request, Response } from "express"
import { Customers } from "../model/customer.model";
import { CustomerResponse } from "../model/Response/customer.response";
import randomstring from 'randomstring';
import nodemailer from 'nodemailer';
import { body } from "express-validator";


class CitiesController {
    async create(req: Request, res: Response) {
        const customer = {
            id: req.body.id,
            roleId: req.body.roleId,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Mobile: req.body.Mobile,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive,
            isDeleted: req.body.isDeleted,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            modifiedBy: req.body.modifiedBy,
            modifiedAt: new Date(),
            otp:req.body.otp
        };

        try {
            const name = await Customers.findOne({ where: { FirstName: req?.body.FirstName.toLowerCase() } });

            if (name) {
                return res.json({ msg: "name already exist" })
            }

            const record = await Customers.create(customer)

            return res.json({ status: "success", error: null, msg: 'data has been uploaded successfully', data: CustomerResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async SendEmail(req: Request, res: Response) {

        if (await Customers.findOne({ where: { Email: req?.body.Email } })) {
            const { Email } = req.body;
            const otp = generateOTP();

            try {
                await sendOTPEmail(Email, otp);
                res.status(200).json({ message: 'OTP sent successfully.'+otp  });
            } catch (e: any) {
                return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
            }
        } else {
            res.json("invalid Email")
        }

    }

    async VarifyEmail(req: Request, res: Response) {

        const { Email, otp } = req.body;

        if (otp === generateOTP()) {
            res.status(200).json({ message: 'OTP verified successfully.' });
        }
 
         else {
            res.status(401).json({ message: 'Invalid OTP.'});   
        }
        
    }



    async GetAll(req: Request, res: Response) {


        try {
            const record = await Customers.findAll({ attributes: ['id', 'roleId', 'FirstName', "LastName", "Email", "Mobile"] });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: record });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Customers.findOne({ where: { id } });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: CustomerResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Customers.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }

            const updateRecord = await record.update(req.body, { FirstName: record.getDataValue('FirstName'), LastName: record.getDataValue('LastName'), Email: record.getDataValue('Email'), Mobile: record.getDataValue('Mobile') });
            //  res.send({record:updateRecord}) 
            return res.json({ status: "success", error: null, msg: 'data has been updated successfully', data: CustomerResponse.CREATE?.(record) });

        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
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
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }
}

export default new CitiesController();

const generateOTP = () => {
    return randomstring.generate({
        length: 6,
        charset: 'numeric'
    });
};


const sendOTPEmail = async (email: string, otp: string) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'Gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'rizwanahme06@gmail.com',
            pass: 'hczpzgjwuomeqisa'
        }
    });

    const mailOptions = {
        from: 'rizwanahme06@gmail.com',
        to: email,
        subject: 'Verification OTP',
        text: `Your OTP for email verification is ${otp}.`
    };

    await transporter.sendMail(mailOptions);
};

