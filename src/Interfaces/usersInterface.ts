import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { JwtPayload } from "jsonwebtoken";

export interface IUsers {
  id: string;
  name: string;
  email: string;
  password: string;
  updatedAt: string;
  createdAt: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
}

export interface IUpdateUser {
  name?: string;
  email?: string;
  password?: string;
}

export interface ICurrentUser extends JwtPayload {
  id: string;
}

export interface IBodyLoginRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    email: string;
    password: string;
  }
}

export interface IBodyRegisterRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    name: string;
    email: string;
    password: string;
  }
}

export interface IUpdateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Params]: {
    idUser: string;
  },
  [ContainerTypes.Body]: {
    name?: string;
    email?: string;
    password?: string;
  }
}
