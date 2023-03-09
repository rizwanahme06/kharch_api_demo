import express, { Request, Response } from "express"
import { QueryTypes } from "sequelize";

import { Flat } from "../model/flat.model";
import { FlatResponse } from "../model/Response/flat.response";



class FlatController {
    async create(req: Request, res: Response) {
        const flat = {
            id: req.body.id,
            societyId:req.body.societyId,
            flatNo:req.body.flatNo,
            floor:req.body.floor,
            wing:req.body.wing,
            ownerId:req.body.ownerId,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive,
            isDeleted: req.body.isDeleted,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            modifiedBy: req.body.modifiedBy,
            modifiedAt: new Date(),
        };

        try {
            // const name = await Flat.findOne({ where: { name: req?.body.name.toLowerCase() } });

            // if (name) {
            //     return res.json({ msg: "name already exist" })
            // }

            const record = await Flat.create(flat)

            return res.json({ status: "success", error: null, msg: 'data has been uploaded successfully', data: FlatResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetAll(req: Request, res: Response) {


        try {
            const record = await Flat.findAll({ attributes: ['id','societyId','flatNo','floor','wing','ownerId'] });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: record });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Flat.findOne({ where: { id } });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: FlatResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Flat.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }

            const updateRecord = await record.update(req.body, { societyId: record.getDataValue('societyId'),ownerId: record.getDataValue('ownerId'),flatNo: record.getDataValue('flatNo'),floor: record.getDataValue('floor'),wing: record.getDataValue('wing') });
            return res.json({ status: "success", error: null, msg: 'data has been updated successfully', data: FlatResponse.CREATE?.(updateRecord) });

        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Flat.findOne({ where: { id } });

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

export default new FlatController();