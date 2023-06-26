import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";

export interface IProduct {
  sequence: number;
  sectionId: number;
  productName: string;
  quantity: number;
}

export interface IUsersList {
  userId: string;
  productsList: IProduct[];
  createdAt: Date;
  updatedAt: Date;
}