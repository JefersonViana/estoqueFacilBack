import { IUsers } from "./usersInterface";
import { IListProduct } from "./listProductsInterface";
import { ISectionObj } from "./sectionsInterface";

export interface IResponseObj {
  code: number;
  message?: string | IUsers[] | IUsers | IListProduct[] | ISectionObj[];
  token?: string;
}