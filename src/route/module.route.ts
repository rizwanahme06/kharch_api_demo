import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import ModuleController from "../controller/module.controller";

const moduleRouter = express.Router();


moduleRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("module"),ModuleController.create);

moduleRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("module"),ModuleController.GetAll);

moduleRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("module"),ModuleController.GetById);

moduleRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("module"),ModuleController.update);

moduleRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("module"),ModuleController.delete);

export default moduleRouter;