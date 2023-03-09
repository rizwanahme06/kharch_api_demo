import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import Bill_ItemsController from "../controller/bill_items.controller";

const bill_itemsRouter = express.Router();


bill_itemsRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_items"),Bill_ItemsController.create);

bill_itemsRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_items"),Bill_ItemsController.GetAll);

bill_itemsRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_items"),Bill_ItemsController.GetById);

bill_itemsRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_items"),Bill_ItemsController.update);

bill_itemsRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_items"),Bill_ItemsController.delete);

export default bill_itemsRouter;