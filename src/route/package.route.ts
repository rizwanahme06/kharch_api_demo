import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import PackageController from "../controller/package.controller";

const packageRouter = express.Router();


packageRouter.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,Middleware.authorizeTableOperation("package"),PackageController.create);

packageRouter.get('/',Middleware.handleValidationError,Middleware.authorizeTableOperation("package"),PackageController.GetAll);

packageRouter.get('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("package"),PackageController.GetById);

packageRouter.put('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("package"),PackageController.update);

packageRouter.delete('/:id',Middleware.handleValidationError,Middleware.authorizeTableOperation("package"),PackageController.delete);

export default packageRouter;