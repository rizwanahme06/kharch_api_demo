import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import Management_rolesController from "../controller/management_roles.controller";

const management_roleRouter = express.Router();


management_roleRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("management_roles"),Management_rolesController.create);

management_roleRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("management_roles"),Management_rolesController.GetAll);

management_roleRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("management_roles"),Management_rolesController.GetById);

management_roleRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("management_roles"),Management_rolesController.update);

management_roleRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("management_roles"),Management_rolesController.delete);

export default management_roleRouter;