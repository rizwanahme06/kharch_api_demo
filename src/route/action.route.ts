import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import ActionController from "../controller/action.controller";

const actionRouter = express.Router();


actionRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("action"),ActionController.create);

actionRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("action"),ActionController.GetAll);

actionRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("action"),ActionController.GetById);

actionRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("action"),ActionController.update);

actionRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("action"),ActionController.delete);

export default actionRouter;