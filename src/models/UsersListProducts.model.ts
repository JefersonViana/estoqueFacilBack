import { Schema, SchemaDefinitionProperty, model } from "mongoose";
import { IUsers } from "../Interfaces/usersInterface";
import { IProduct, IUsersList } from "../Interfaces/usersListProductsInterface";

const UsersListProductsSchema = new Schema<IUsersList>({
  userId: { type: String },
  productsList: [Object] as SchemaDefinitionProperty<IProduct[]>,
  updatedAt: { type: Date },
  createdAt: { type: Date }
}, { versionKey: false });

const UsersListProductsModel = model<any>('UsersListProducts', UsersListProductsSchema, 'UsersListProducts');

export default UsersListProductsModel;