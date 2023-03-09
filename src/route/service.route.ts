import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import serviceController from "../controller/service.controller";

const serviceRouter = express.Router();


serviceRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("service"),serviceController.create);

serviceRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("service"),serviceController.GetAll);

serviceRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("service"),serviceController.GetById);

serviceRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("service"),serviceController.update);

serviceRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("service"),serviceController.delete);

export default serviceRouter;