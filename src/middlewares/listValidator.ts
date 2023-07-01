import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import Joi from "joi";
import { IProduct } from "src/Interfaces/listProductsInterface";

export interface IParamsProductsRequest extends ValidatedRequestSchema {
  [ContainerTypes.Params]: {
    idUser: string;
  }
};

export interface IStoreProductsRequest extends ValidatedRequestSchema {
  [ContainerTypes.Params]: {
    idUser: string
  },
  [ContainerTypes.Body]: {
    productsList: Partial<IProduct[]>;
  }
};

export const bodySchemaProducts = Joi.object({
  productsList: Joi.array().items(
    Joi.object({
      sequence: Joi.number().required(),
      sectionId: Joi.number().required(),
      productName: Joi.string().required(),
      quantity: Joi.number().required()
    })).min(1).required(),
});

