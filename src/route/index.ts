import express from "express";
import CitiesValidator from "../validator"
import Middleware from "../middleware";
import CitiesController from "../controller";

const router = express.Router();


router.post('/',CitiesValidator.checkCreate(),
Middleware.handleValidationError,CitiesController.create);

router.get('/',Middleware.handleValidationError,CitiesController.readPagination);

router.get('/:id',Middleware.handleValidationError,CitiesController.readwithID);

router.put('/:id',Middleware.handleValidationError,CitiesController.update);

router.delete('/:id',Middleware.handleValidationError,CitiesController.delete);

export default router;