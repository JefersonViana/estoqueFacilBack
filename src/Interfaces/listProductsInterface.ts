import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";

export interface IProduct {
  sequence: number;
  sectionId: number;
  productName: string;
  quantity: number;
}

export interface IUsersList {
  userId: string;
  uuidv: string;
  productsList: IProduct[];
  createdAt: Date;
  updatedAt: Date;
}