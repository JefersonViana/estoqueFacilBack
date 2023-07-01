import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import Joi from "joi";

export interface IParamsProductsRequest extends ValidatedRequestSchema {
  [ContainerTypes.Params]: {
    userId: string;
  }
}

export const paramsSchemaProducts = Joi.object({
  userId: Joi.string().required()
})