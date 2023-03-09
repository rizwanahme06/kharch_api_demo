import express, { Request, Response } from "express"
import { QueryTypes } from "sequelize";

import { Package } from "../model/package.model";
import { PackageResponse } from "../model/Response/package.response";



class PackageController {
    async create(req: Request, res: Response) {
        const packages = {
            id: req.body.id,
            name:req.body.name,
            basePrice:req.body.basePrice,
            maxUserLimit:req.body.maxUserLimit,
            discountLimit:req.body.discountLimit,
            onTrail:req.body.onTrail,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive,
            isDeleted: req.body.isDeleted,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            modifiedBy: req.body.modifiedBy,
            modifiedAt: new Date(),
        };

        try {
            const name = await Package.findOne({ where: { name: req?.body.name.toLowerCase() } });

            if (name) {
                return res.json({ msg: "name already exist" })
            }

            const record = await Package.create(packages)

            return res.json({ status: "success", error: null, msg: 'data has been uploaded successfully', data: PackageResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetAll(req: Request, res: Response) {


        try {
            const record = await Package.findAll({ attributes: ['id', 'basePrice','maxUserLimit','discountLimit','onTrail', 'name'] });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: record });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Package.findOne({ where: { id } });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: PackageResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Package.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }

            const updateRecord = await record.update(req.body, { name: record.getDataValue('name'),basePrice: record.getDataValue('basePrice'),maxUserLimit: record.getDataValue('maxUserLimit'),discountLimit: record.getDataValue('discountLimit'),onTrail: record.getDataValue('onTrail') });
            return res.json({ status: "success", error: null, msg: 'data has been updated successfully', data: PackageResponse.CREATE?.(updateRecord) });

        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Package.findOne({ where: { id } });

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

export default new PackageController();