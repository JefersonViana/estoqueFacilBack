import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import Joi from "joi";
import { IList, IProduct } from "src/Interfaces/listProductsInterface";

export interface IParamsProductsRequest extends ValidatedRequestSchema {
  [ContainerTypes.Params]: {
    idUser: string;
  }
};

export interface IStoreProductsRequest extends ValidatedRequestSchema {
  [ContainerTypes.Params]: {
    idUser: string
  },
  [ContainerTypes.Body]: IList
};

export interface IDeleteProductsRequest extends ValidatedRequestSchema {
  [ContainerTypes.Query]: {
    listId: string
  },
};

export const bodySchemaProducts = Joi.object({
  listName: Joi.string().min(1).required(),
  productsList: Joi.array().items(
    Joi.object({
      sequence: Joi.number().required(),
      measure: Joi.string().required(),
      productName: Joi.string().required(),
      quantity: Joi.number().required(),
      checked: Joi.boolean().required(),
    })).min(1).required(),
});

export const querySchemaProducts = Joi.object({
  listId: Joi.string().uuid().required()
});
