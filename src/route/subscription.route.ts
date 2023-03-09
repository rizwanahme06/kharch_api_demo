import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import SubscriptionController from "../controller/subscription.controller";

const subscriptionRouter = express.Router();


subscriptionRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("subscription"),SubscriptionController.create);

subscriptionRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("subscription"),SubscriptionController.GetAll);

subscriptionRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("subscription"),SubscriptionController.GetById);

subscriptionRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("subscription"),SubscriptionController.update);

subscriptionRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("subscription"),SubscriptionController.delete);

export default subscriptionRouter;