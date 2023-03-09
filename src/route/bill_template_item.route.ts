import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import Bill_Template_ItemController from "../controller/bill_template_item.controller";

const bill_template_itemRouter = express.Router();


bill_template_itemRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_template_item"),Bill_Template_ItemController.create);

bill_template_itemRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_template_item"),Bill_Template_ItemController.GetAll);

bill_template_itemRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_template_item"),Bill_Template_ItemController.GetById);

// bill_template_itemRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_template_item"),Bill_Template_ItemController.update);

bill_template_itemRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_template_item"),Bill_Template_ItemController.delete);

export default bill_template_itemRouter;