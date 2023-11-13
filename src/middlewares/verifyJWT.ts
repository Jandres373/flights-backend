import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

dotenv.config();

// Extiende la interfaz Request para agregar la propiedad 'user'
declare global {
  namespace Express {
    interface Request {
      user: any // Ahora 'user' es de tipo MyJwtPayload
    }
  }
}

type loginFunctionParams = (req: Request, res: Response, next: NextFunction) => void;

export const verifyJWT: loginFunctionParams = (req, res, next) => {
  const privateKey = process.env.TOKEN_SECRET || ' ';
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];

  jwt.verify(
    token,
    privateKey,
    (err, decoded: any) => {
      if (err) return res.sendStatus(403);

      // Accede a las propiedades del usuario a través de req.user
      if (decoded) {
        req.user = decoded.user;
      }

      next();
    }
  );
};
