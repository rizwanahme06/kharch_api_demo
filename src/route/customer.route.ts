import express from "express";
// import CitiesValidator from "../validator"
// import { Customers } from "../model/customer.model";
// import Middleware from "../middleware";
import customerController from "../controller/customer.controller";
import jwt from 'jsonwebtoken';
import middleware from "../middleware";

const customerRouter = express.Router();


customerRouter.post('/',middleware.authorizeTableOperation("Customers"),customerController.create);

customerRouter.post('/send-otp',customerController.SendEmail);

customerRouter.post('/verify-otp',customerController.VarifyEmail);

// customerRouter.post('/login',customerController.Login,function(req:any,res:any){
//     jwt.verify(req.token,'my_secret_key',async function(err:any,data:any) {
//         if(err){
//             res.json(err)
//         }
//         else{
//             data.isActive = 1;
//             res.json({
//                 message: 'Successfully logged in',
//                 data: data
//             });
//         }
//     })
// }
// );

customerRouter.get('/',customerController.GetAll);

customerRouter.get('/:id',customerController.GetById);

customerRouter.put('/:id',customerController.update);

customerRouter.delete('/:id',customerController.delete);

export default customerRouter;