import { IUsers } from "./usersInterface";

export interface IResponseObj {
  code: number;
  message?: string | IUsers[] | IUsers;
  token?: string;
}