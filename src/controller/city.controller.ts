import express,{Request,Response} from "express"
import { QueryTypes } from "sequelize";

import { Cities } from "../model/city.model";
import { CityResponse } from "../model/Response/city.response";



class CitiesController{
    async  create(req:Request,res:Response){
        const city ={
            id:req.body.id,
            stateId:req.body.stateId,
            name:req.body.name,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive,
            isDeleted: req.body.isDeleted,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            modifiedBy: req.body.modifiedBy,
            modifiedAt:new Date(),
        };

     try{ 
        const name = await Cities.findOne({where:{name:req?.body.name.toLowerCase()}});

        if (name) {
            return res.json({msg:"name already exist"})
        }

        const record = await Cities.create(city)

        return res.json({status:"success",error:null,msg:'data has been uploaded successfully',data:CityResponse.CREATE?.(record)});
    }
        catch(e:any){
            return res.json({data:e.data,error:e,msg:e.massage,status:500})
        }
    }

    async  GetAll(req:Request,res:Response){


        try{ 
            const record = await Cities.findAll({attributes: ['id','stateId','name']});
            return res.json({status:"success",error:null,msg:'data has been retrieve successfully',data:record});
        }
            catch(e:any){
                return res.json({data:e.data,error:e,msg:e.massage,status:500})
            }
    }

    async  GetById(req:Request,res:Response){
        try{ 
            const {id}= req.params;
             const record = await Cities.findOne({where:{id}});
             return res.json({status:"success",error:null,msg:'data has been retrieve successfully',data:CityResponse.CREATE?.(record)});
         }
             catch(e:any){
                return res.json({data:e.data,error:e,msg:e.massage,status:500})
             }
    }

     async  update(req:Request,res:Response){
        try{ 
            const {id}= req.params;
             const record = await Cities.findOne({where:{id}});
     
             if (!record) {
                 return res.json({msg:'cannot find record'})
             }
     
             const updateRecord =  await record.update(req.body,{name:record.getDataValue('name')});
            //  res.send({record:updateRecord}) 
             return res.json({status:"success",error:null,msg:'data has been updated successfully',data:CityResponse.CREATE?.(updateRecord)});

         }
             catch(e:any){
                return res.json({data:e.data,error:e,msg:e.massage,status:500})
             }
    }

    async  delete(req:Request,res:Response){
        try{ 
            const {id}= req.params;
             const record = await Cities.findOne({where:{id}});
     
             if (!record) {
                 return res.json({msg:'cannot find record'})
             }
             
            //  const deleteRecord =  await record.destroy();
            // res.send({record:deleteRecord}) 
             const updateRecord = await record.update({ isDeleted: 1 }, {
                where: {
                  id:id 
                }
              });
            // const updateRecord =  await record.update(req.body,{isdeleted:record.setDataValue('isdeleted',1)});
             res.send({record:updateRecord}) 
         }
             catch(e:any){
                return res.json({data:e.data,error:e,msg:e.massage,status:500})
             }
    }
}

export default new CitiesController();