import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import CountryController from "../controller/country.controller";

const countryRouter = express.Router();

countryRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("country"),CountryController.create);

countryRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("country"),CountryController.GetAll);

countryRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("country"),CountryController.GetById);

countryRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("country"),CountryController.update);

countryRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("country"),CountryController.delete);

export default countryRouter;