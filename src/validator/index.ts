import { body, check, query } from "express-validator";

class CitiesValidator {
    checkCreate() {
        return [
            body('name').notEmpty().withMessage('the name should not be emty')
        ];
    }
}

export default new CitiesValidator();