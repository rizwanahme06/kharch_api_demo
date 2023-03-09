import express, { Request, Response } from "express"
import { QueryTypes } from "sequelize";

import { Bill_Items } from "../model/bill_items.model";
import { Bill_ItemsResponse } from "../model/Response/bill_items.response";



class Bill_ItemsController {
    async create(req: Request, res: Response) {
        const bill_items = {
            id: req.body.id,
            name:req.body.name,
            description:req.body.description,
            amount:req.body.amount,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive,
            isDeleted: req.body.isDeleted,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            modifiedBy: req.body.modifiedBy,
            modifiedAt: new Date(),
        };

        try {
            const name = await Bill_Items.findOne({ where: { name: req?.body.name.toLowerCase() } });

            if (name) {
                return res.json({ msg: "name already exist" })
            }

            const record = await Bill_Items.create(bill_items)

            return res.json({ status: "success", error: null, msg: 'data has been uploaded successfully', data: Bill_ItemsResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetAll(req: Request, res: Response) {


        try {
            const record = await Bill_Items.findAll({ attributes: ['id', 'description','amount', 'name'] });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: record });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Bill_Items.findOne({ where: { id } });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: Bill_ItemsResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Bill_Items.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }

            const updateRecord = await record.update(req.body, { name: record.getDataValue('name'), description: record.getDataValue('description'),amount: record.getDataValue('amount'), });
            return res.json({ status: "success", error: null, msg: 'data has been updated successfully', data: Bill_ItemsResponse.CREATE?.(updateRecord) });

        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Bill_Items.findOne({ where: { id } });

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

export default new Bill_ItemsController();