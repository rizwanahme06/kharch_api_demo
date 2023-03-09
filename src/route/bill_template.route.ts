import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import Bill_TemplateController from "../controller/bill_template.controller";

const bill_templateRouter = express.Router();


bill_templateRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_template"),Bill_TemplateController.create);

bill_templateRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_template"),Bill_TemplateController.GetAll);

bill_templateRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_template"),Bill_TemplateController.GetById);

bill_templateRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_template"),Bill_TemplateController.update);

bill_templateRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("bill_template"),Bill_TemplateController.delete);

export default bill_templateRouter;