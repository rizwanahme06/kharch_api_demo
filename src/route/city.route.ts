import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import CitiesController from "../controller/city.controller";

const cityRouter = express.Router();


cityRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,CitiesController.create);

cityRouter.get('/',Middleware.handleValidationError,CitiesController.GetAll);

cityRouter.get('/:id',Middleware.handleValidationError,CitiesController.GetById);

cityRouter.put('/:id',Middleware.handleValidationError,CitiesController.update);

cityRouter.delete('/:id',Middleware.handleValidationError,CitiesController.delete);

export default cityRouter;