import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import RolesController from "../controller/roles.controller";

const rolesRouter = express.Router();


rolesRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("roles"),RolesController.create);

rolesRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("roles"),RolesController.GetAll);

rolesRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("roles"),RolesController.GetById);

rolesRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("roles"),RolesController.update);

rolesRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("roles"),RolesController.delete);

export default rolesRouter;