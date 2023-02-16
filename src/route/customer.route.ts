import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import customerController from "../controller/customer.controller";

const customerRouter = express.Router();


customerRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,customerController.create);

customerRouter.post('/send-otp',Middleware.handleValidationError,customerController.SendEmail);

customerRouter.post('/verify-otp',Middleware.handleValidationError,customerController.VarifyEmail);

customerRouter.get('/',Middleware.handleValidationError,customerController.GetAll);

customerRouter.get('/:id',Middleware.handleValidationError,customerController.GetById);

customerRouter.put('/:id',Middleware.handleValidationError,customerController.update);

customerRouter.delete('/:id',Middleware.handleValidationError,customerController.delete);

export default customerRouter;