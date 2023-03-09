import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import FlatController from "../controller/flat.controller";

const flatRouter = express.Router();


flatRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("flat"),FlatController.create);

flatRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("flat"),FlatController.GetAll);

flatRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("flat"),FlatController.GetById);

flatRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("flat"),FlatController.update);

flatRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("flat"),FlatController.delete);

export default flatRouter;