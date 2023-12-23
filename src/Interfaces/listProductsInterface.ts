import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";

export interface IProduct {
  sequence: number;
  sectionId: number;
  productName: string;
  quantity: number;
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