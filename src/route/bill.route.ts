import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import BillController from "../controller/bill.controller";

const billRouter = express.Router();


billRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_route"),BillController.create);

billRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_route"),BillController.GetAll);

billRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_route"),BillController.GetById);

billRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_route"),BillController.update);

billRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_route"),BillController.delete);

export default billRouter;