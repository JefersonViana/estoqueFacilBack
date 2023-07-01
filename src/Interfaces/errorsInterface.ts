import { IUsers } from "./usersInterface";
import { IUsersList } from "./listProductsInterface";

export interface IResponseObj {
  code: number;
  message?: string | IUsers[] | IUsers | IUsersList[];
  token?: string;
}