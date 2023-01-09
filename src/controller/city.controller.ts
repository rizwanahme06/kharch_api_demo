import e from "express";
import express,{Request,Response} from "express"
import { Cities } from "../model/city.model";



class CitiesController{
    async  create(req:Request,res:Response){
        const city ={
            id:req.body.id,
            stateId:req.body.stateId ,
            Name:req.body.Name,
            ipAddress: req.body.ipAddress,
            isActive: req.body.isActive,
            isDeleted: req.body.isDeleted,
            createdBy: req.body.createdBy,
            createdAt: req.body.createdAt,
            modifiedBy: req.body.modifiedBy,
            modifiedAt:req.body.modifiedAt,
        };

        // const id = req.body.id
     try{ 
        const name = await Cities.findOne({where:{Name:req?.body.Name.toLowerCase()}});

        if (name) {
            return res.json({msg:"name already exist"})
        }

        const record = await Cities.create(city)
        // return res.json({record,msg:"Successfully create"})
    }
        catch(e:any){
            return res.json({data:e.data,error:e,msg:e.massage,status:500})
        }
    }

    async  readAll(req:Request,res:Response){


        try{ 
            const record = await Cities.findAll({where:{}})
            res.json(record);
        }
            catch(e:any){
                return res.json({data:e.data,error:e,msg:e.massage,status:500})
            }
    }

    async  readwithID(req:Request,res:Response){
        try{ 
            const {id}= req.params;
             const record = await Cities.findOne({where:{id}});
             return res.json({status:"success",error:null,msg:'data has been retrieve successfully',data:record});
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
     
             const updateRecord =  await record.update(req.body,{name:record.getDataValue('Name')});
             res.send({record:updateRecord}) 
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