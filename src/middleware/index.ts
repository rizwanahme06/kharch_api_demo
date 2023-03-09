import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { Request,Response,NextFunction } from "express";

class Middleware{
    handleValidationError(req:Request,res:Response,next:NextFunction){
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.json(error);
            }
            next();
    }
     authorizeTableOperation = (tableName: string) => (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader?.split(" ")[1];
    
        if (!token) {
          throw new Error("No authorization token provided");
        }
    
        const decodedToken = jwt.verify(token, 'my_secret_key') as any;
        const userservices = decodedToken.services;
    
        if (!userservices[tableName]) {
          throw new Error("User does not have service for this table");
        }
    
        next();
      } catch (error:any) {
        res.status(401).json({ message: error.message });
      }
    };
}

//  const authorizeTableOperation = (tableName: string) => (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const authorizationHeader = req.headers.authorization;
//     const token = authorizationHeader?.split(" ")[1];

//     if (!token) {
//       throw new Error("No authorization token provided");
//     }

//     const decodedToken = jwt.verify(token, 'my_secret_key') as any;
//     const userservices = decodedToken.services;

//     if (!userservices[tableName]) {
//       throw new Error("User does not have service for this table");
//     }

//     next();
//   } catch (error:any) {
//     res.status(401).json({ message: error.message });
//   }
// };


export default new Middleware();
