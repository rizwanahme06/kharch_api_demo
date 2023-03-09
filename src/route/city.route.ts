import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import CitiesController from "../controller/city.controller";

const cityRouter = express.Router();


cityRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("city"),CitiesController.create);

cityRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("city"),CitiesController.GetAll);

cityRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("city"),CitiesController.GetById);

cityRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("city"),CitiesController.update);

cityRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("city"),CitiesController.delete);

export default cityRouter;