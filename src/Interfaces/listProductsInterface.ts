import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";

export interface IProduct {
  sequence: number;
  sectionId: number;
  productName: string;
  quantity: number;
}

export interface IListProduct {
  userId: string;
  uuidv: string;
  productsList: IProduct[];
  createdAt: Date;
  updatedAt: Date;
}