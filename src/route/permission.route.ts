import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import PermissionController from "../controller/permission.controller";

const permissionRouter = express.Router();


permissionRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("permission"),PermissionController.create);

permissionRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("permission"),PermissionController.GetAll);

permissionRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("permission"),PermissionController.GetById);

permissionRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("permission"),PermissionController.update);

permissionRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("permission"),PermissionController.delete);

export default permissionRouter;