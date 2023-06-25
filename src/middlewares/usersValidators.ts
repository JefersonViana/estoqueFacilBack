import Joi from 'joi';

export const bodySchemaLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
})

export const bodySchemaRegister = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
})