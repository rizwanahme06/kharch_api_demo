import express, { Request, Response } from "express"
import { QueryTypes } from "sequelize";

import { Subscription } from "../model/subscription.model";   
import { SubscriptionResponse } from "../model/Response/subscription.response";



class SubscriptionController {
    async create(req: Request, res: Response) {
        const subscription = {
            id: req.body.id,
            packageId:req.body.packageId,
           serviceId:req.body.serviceId,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive,
            isDeleted: req.body.isDeleted,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            modifiedBy: req.body.modifiedBy,
            modifiedAt: new Date(),
        };

        try {
            // const name = await Subscription.findOne({ where: { name: req?.body.name.toLowerCase() } });

            // if (name) {
            //     return res.json({ msg: "name already exist" })
            // }

            const record = await Subscription.create(subscription)

            return res.json({ status: "success", error: null, msg: 'data has been uploaded successfully', data: SubscriptionResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetAll(req: Request, res: Response) {


        try {
            const record = await Subscription.findAll({ attributes: ['id', 'packageId', 'serviceId'] });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: record });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Subscription.findOne({ where: { id } });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: SubscriptionResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Subscription.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }

            const updateRecord = await record.update(req.body, { packageId: record.getDataValue('packageId'),serviceId: record.getDataValue('serviceId') });
            return res.json({ status: "success", error: null, msg: 'data has been updated successfully', data: SubscriptionResponse.CREATE?.(updateRecord) });

        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Subscription.findOne({ where: { id } });

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

export default new SubscriptionController();