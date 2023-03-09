import express, { Request, Response } from "express"
import { QueryTypes } from "sequelize";

import { Management_roles } from "../model/management_roles.model";
import { Management_rolesResponse } from "../model/Response/management_roles.model.response";



class Management_rolesController {
    async create(req: Request, res: Response) {
        const management_roles = {
            id: req.body.id,
            societyId:req.body.societyId,
            roleId:req.body.roleId,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive,
            isDeleted: req.body.isDeleted,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            modifiedBy: req.body.modifiedBy,
            modifiedAt: new Date(),
        };

        try {
            // const name = await Management_roles.findOne({ where: { name: req?.body.name.toLowerCase() } });

            // if (name) {
            //     return res.json({ msg: "name already exist" })
            // }

            const record = await Management_roles.create(management_roles)

            return res.json({ status: "success", error: null, msg: 'data has been uploaded successfully', data: Management_rolesResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetAll(req: Request, res: Response) {


        try {
            const record = await Management_roles.findAll({ attributes: ['id', 'societyId', 'roleId'] });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: record });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Management_roles.findOne({ where: { id } });
            return res.json({ status: "success", error: null, msg: 'data has been retrieve successfully', data: Management_rolesResponse.CREATE?.(record) });
        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Management_roles.findOne({ where: { id } });

            if (!record) {
                return res.json({ msg: 'cannot find record' })
            }

            const updateRecord = await record.update(req.body, { societyId: record.getDataValue('societyId'),roleId: record.getDataValue('roleId') });
            return res.json({ status: "success", error: null, msg: 'data has been updated successfully', data: Management_rolesResponse.CREATE?.(updateRecord) });

        }
        catch (e: any) {
            return res.json({ data: e.data, error: e, msg: e.massage, status: 500 })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await Management_roles.findOne({ where: { id } });

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

export default new Management_rolesController();