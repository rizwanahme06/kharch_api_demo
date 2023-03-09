import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import StateController from "../controller/state.controller";

const stateRouter = express.Router();

stateRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("state"),StateController.create);

stateRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("state"),StateController.GetAll);

stateRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("state"),StateController.GetById);

stateRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("state"),StateController.update);

stateRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("state"),StateController.delete);

export default stateRouter;