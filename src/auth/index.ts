import { ICurrentUser, IUsers } from "../Interfaces/usersInterface";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from "express";
dotenv.config();

export const safeUser = (user: IUsers): string => {
  const token = jwt.sign(
    { name: user.name, email: user.email, id: user.id, lastUpdate: user.updatedAt, memberSince: user.createdAt },
    `${process.env.SECRET_KEY}`,
    { algorithm: 'HS256', expiresIn: '24h' }
  );
  return token
}

const decodeToken = (token: string) => jwt.verify(token, `${process.env.SECRET_KEY}`) as ICurrentUser;

export const authUser = (req: Request, res: Response, next: NextFunction): Response | NextFunction => {
  try {
    const token = req.headers.authorization;
    const check = decodeToken(token)
    req.params.idUser = check.id
    next()
  } catch (error) {
    console.log('error', error)
    return res.status(400).json({ error: error.message })
  }
}