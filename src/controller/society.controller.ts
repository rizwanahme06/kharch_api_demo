import express, { Request, Response } from "express"
import { QueryTypes } from "sequelize";

import { Society } from "../model/society.model";
import { SocietyResponse } from "../model/Response/society.response";



class SocietyController {
    async create(req: Request, res: Response) {
        const society = {
            id: req.body.id,
    name:req.body.name,
    slug:req.body.slug,
    address:req.body.address,
    pincode:req.body.pincode,
    primaryContectId:req.body.primaryContectId,
    wingType:req.body.wingType,
    noOfWings:req.body.noOfWings,
    noOfFloors:req.body.noOfFloors,
    flatOnSequence:req.body.flatOnSequence,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive,
            isDeleted: req.body.isDeleted,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            modifiedBy: req.body.modifiedBy,
            modifiedAt: new Date(),
        };

        try {
            const name = await Society.findOne({ where: { name: req?.body.name.toLowerCase() } });

            if (name) {
                return res.json({ msg: "name already exist" })
            }

            const record = await Society.create(society)

            return res.json({ status: "success", error: null, msg: 'data has been uploaded successfully', data: SocietyResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetAll(req: Request, res: Response) {


        try {
            const record = await Society.findAll({ attributes: ['id', 'slug','address','pincode','primaryContectId','wingType','noOfWings','noOfFloors','flatOnSequence', 'name'] });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: record });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Society.findOne({ where: { id } });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: SocietyResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Society.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }

            const updateRecord = await record.update(req.body, { name: record.getDataValue('name'),slug: record.getDataValue('slug'),address: record.getDataValue('address'),pincode: record.getDataValue('pincode'),primaryContectId: record.getDataValue('primaryContectId'),wingType: record.getDataValue('wingType'),noOfWings: record.getDataValue('noOfWings'),noOfFloors: record.getDataValue('noOfFloors'),flatOnSequence: record.getDataValue('flatOnSequence') });
            //  res.send({record:updateRecord}) 
            return res.json({ status: "success", error: null, msg: 'data has been updated successfully', data: SocietyResponse.CREATE?.(updateRecord) });

        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Society.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }

            //  const deleteRecord =  await record.destroy();
            // res.send({record:deleteRecord}) 
            const updateRecord = await record.update({ isDeleted: 1 }, {
                where: {
                    id: id
                }
            });
            // const updateRecord =  await record.update(req.body,{isdeleted:record.setDataValue('isdeleted',1)});
            res.send({ record: updateRecord })
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }
}

export default new SocietyController();