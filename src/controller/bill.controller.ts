import express, { Request, Response } from "express"
import { QueryTypes } from "sequelize";

import { Bill } from "../model/bill.model";
import { BillResponse } from "../model/Response/bill.response";



class BillController {
    async create(req: Request, res: Response) {
        const city = {
            id: req.body.id,
            billTemplateId: req.body.billTemplateId,
            flatId: req.body.flatId,
            billNo: req.body.billNo,
            billDate: req.body.billDate,
            termAndCondition: req.body.termAndCondition,
            currentBillAmount: req.body.currentBillAmount,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive,
            isDeleted: req.body.isDeleted,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            modifiedBy: req.body.modifiedBy,
            modifiedAt: new Date(),
        };

        try {
            // const name = await Bill.findOne({ where: { name: req?.body.name.toLowerCase() } });

            // if (name) {
            //     return res.json({ msg: "name already exist" })
            // }

            const record = await Bill.create(city)

            return res.json({ status: "success", error: null, msg: 'data has been uploaded successfully', data: BillResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetAll(req: Request, res: Response) {


        try {
            const record = await Bill.findAll({ attributes: ['id', 'billTemplateId','flatId','billNo','billDate','termAndCondition','currentBillAmount'] });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: record });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Bill.findOne({ where: { id } });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: BillResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Bill.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }

            const updateRecord = await record.update(req.body, { flatId: record.getDataValue('flatId'),billTemplateId: record.getDataValue('billTemplateId'),billNo: record.getDataValue('billNo'),billDate: record.getDataValue('billDate'),termAndCondition: record.getDataValue('termAndCondition'),currentBillAmount: record.getDataValue('currentBillAmount') });
            return res.json({ status: "success", error: null, msg: 'data has been updated successfully', data: BillResponse.CREATE?.(updateRecord) });

        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Bill.findOne({ where: { id } });

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

export default new BillController();