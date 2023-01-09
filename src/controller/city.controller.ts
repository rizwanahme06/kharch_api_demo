import e from "express";
import express,{Request,Response} from "express"
import { Cities } from "../model/city.model";



class CitiesController{
    async  create(req:Request,res:Response){
        // const id = uuidv4();
        const city ={
            id:req.body.id,
            stateid:req.body.stateid ,
            name:req.body.name,
            ipaddress: req.body.ipaddress,
            isactive: req.body.isactive,
            isdeleted: req.body.isdeleted,
            createdby: req.body.createdby,
            createdat: req.body.createdat,
            modifiedby: req.body.modifiedby,
            modifiedat:req.body.modifiedat,
        };

        // const id = req.body.id
     try{ 
        const name = await Cities.findOne({where:{name:req?.body.name.toLowerCase()}});

        if (name) {
            return res.json({msg:"name alreadt exist"})
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
             return res.json({status:"success",error:null,msg:'data has been retrive successfully',data:record});
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
             const updateRecord = await record.update({ isdeleted: 1 }, {
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