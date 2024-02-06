import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";

export interface IProduct {
  sequence: number;
  measure: string;
  productName: string;
  quantity: number;
  checked: boolean;
}

export interface IList {
  listName: string;
  products: IProduct[];
}

export interface IListProduct {
  userId: string;
  uuidv: string;
  lists: IList[];
  createdAt: Date;
  updatedAt: Date;
}