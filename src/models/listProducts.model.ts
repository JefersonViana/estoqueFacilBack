import { Schema, SchemaDefinitionProperty, model } from "mongoose";
import { IProduct, IUsersList } from "../Interfaces/listProductsInterface";

const ListProductsSchema = new Schema<IUsersList>({
  userId: { type: String },
  uuidv: { type: String },
  productsList: [Object] as SchemaDefinitionProperty<IProduct[]>,
  updatedAt: { type: Date },
  createdAt: { type: Date }
}, { versionKey: false });

const ListProductsModel = model<any>('ListProduct', ListProductsSchema, 'ListProducts');

export default ListProductsModel;