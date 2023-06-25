import Joi from 'joi';

export const bodySchemaLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
})