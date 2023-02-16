import { body, check, query } from "express-validator";

class CitiesValidator {
    checkCreate() {
        return [
            body('FirstName').notEmpty().withMessage('the name should not be emty')
        ];
    }
}

export default new CitiesValidator();