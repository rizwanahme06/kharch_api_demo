import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import subModuleController from "../controller/sub_modules.controller";

const sub_moduleRouter = express.Router();


sub_moduleRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("sub_module"),subModuleController.create);

sub_moduleRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("sub_module"),subModuleController.GetAll);

sub_moduleRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("sub_module"),subModuleController.GetById);

sub_moduleRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("sub_module"),subModuleController.update);

sub_moduleRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("sub_module"),subModuleController.delete);

export default sub_moduleRouter;