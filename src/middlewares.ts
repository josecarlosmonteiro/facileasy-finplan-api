import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export function logRequestMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  console.log(`[${req.method}] ${req.path}`);
  next();
}

export function tokenValidateMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const [, token] = req.headers.authorization?.split(' ') || [' ', ' '];

  if (!token) return res.json({ notification: 'Token não informado' }).status(401);

  jwt.verify(token, process.env.PRIVATE_KEY!, function (err, decoded) {
    if (err) {
      console.log("Erro de validação no token");
      return res.json({ notification: 'Problema de validação' }).status(401);
    }

    req.headers.userId = (decoded && typeof decoded !== 'string') && decoded.id;

    return next();
  });
}