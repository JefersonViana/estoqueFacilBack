import { IUserRegister, IUsers } from "../Interfaces/usersInterface";
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const hashPassword = (pass: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(pass, salt, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });
  });
}

export const buildUserToDb = async ({ name, email, password }: IUserRegister)  => {
  const hashedPassword = await hashPassword(password);
  return {
    id: uuidv4(),
    name,
    email,
    password: hashedPassword,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString()
  }
}

export const checkUser = (pass: string, hash: string): boolean => {
  const isValid = bcrypt.compareSync(pass, hash)
  return isValid
}

export const safeUser = (user: IUsers): string => {
  const token = jwt.sign(
    { user: user.name, email: user.email, id: user.id, lastUpdate: user.updatedAt, memberSince: user.createdAt },
    `${process.env.SECRET}`,
    { algorithm: 'HS256', expiresIn: '24h' }
  )
  return token
}