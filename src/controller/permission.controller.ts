import express, { Request, Response } from "express"
import { QueryTypes } from "sequelize";

import { Permission } from "../model/permission.model";
import { PermissionResponse } from "../model/Response/permission.response";



class PermissionController {
    async create(req: Request, res: Response) {
        const permission = {
            id: req.body.id,
            roleId:req.body.roleId,
            actionId:req.body.actionId,
            name:req.body.name,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive,
            isDeleted: req.body.isDeleted,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            modifiedBy: req.body.modifiedBy,
            modifiedAt: new Date(),
        };

        try {
            const name = await Permission.findOne({ where: { name: req?.body.name.toLowerCase() } });

            if (name) {
                return res.json({ msg: "name already exist" })
            }

            const record = await Permission.create(permission)

            return res.json({ status: "success", error: null, msg: 'data has been uploaded successfully', data: PermissionResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetAll(req: Request, res: Response) {


        try {
            const record = await Permission.findAll({ attributes: ['id', 'roleId','actionId', 'name'] });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: record });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Permission.findOne({ where: { id } });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: PermissionResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Permission.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }

            const updateRecord = await record.update(req.body, { name: record.getDataValue('name'),roleId: record.getDataValue('roleId'),actionId: record.getDataValue('actionId') });
            //  res.send({record:updateRecord}) 
            return res.json({ status: "success", error: null, msg: 'data has been updated successfully', data: PermissionResponse.CREATE?.(updateRecord) });

        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Permission.findOne({ where: { id } });

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

export default new PermissionController();