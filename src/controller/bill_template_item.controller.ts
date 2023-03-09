import express, { Request, Response } from "express"
import { QueryTypes } from "sequelize";

import { Bill_Template_Item } from "../model/bill_template_item.model";
import { Bill_Template_ItemResponse } from "../model/Response/bill_template_item.response";



class Bill_Template_ItemController {
    async create(req: Request, res: Response) {
        const bill_template_item = {
            id: req.body.id,
            templateId:req.body.templateId,
            itemId:req.body.itemId,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive,
            isDeleted: req.body.isDeleted,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            modifiedBy: req.body.modifiedBy,
            modifiedAt: new Date(),
        };

        try {
            // const name = await Bill_Template_Item.findOne({ where: { name: req?.body.name.toLowerCase() } });

            // if (name) {
            //     return res.json({ msg: "name already exist" })
            // }

            const record = await Bill_Template_Item.create(bill_template_item)

            return res.json({ status: "success", error: null, msg: 'data has been uploaded successfully', data: Bill_Template_ItemResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetAll(req: Request, res: Response) {


        try {
            const record = await Bill_Template_Item.findAll({ attributes: ['id', 'templateId', 'itemId'] });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: record });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Bill_Template_Item.findOne({ where: { id } });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: Bill_Template_ItemResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Bill_Template_Item.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }

            const updateRecord = await record.update(req.body, { templateId: record.getDataValue('templateId'),itemId: record.getDataValue('itemId') });
            //  res.send({record:updateRecord}) 
            return res.json({ status: "success", error: null, msg: 'data has been updated successfully', data: Bill_Template_ItemResponse.CREATE?.(updateRecord) });

        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Bill_Template_Item.findOne({ where: { id } });

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

export default new Bill_Template_ItemController();