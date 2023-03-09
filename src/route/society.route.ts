import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import SocietyController from "../controller/society.controller";

const societyRouter = express.Router();


societyRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("society"),SocietyController.create);

societyRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("society"),SocietyController.GetAll);

societyRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("society"),SocietyController.GetById);

societyRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("society"),SocietyController.update);

societyRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("society"),SocietyController.delete);

export default societyRouter;