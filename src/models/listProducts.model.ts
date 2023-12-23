import { Schema, SchemaDefinitionProperty, model } from "mongoose";
import { IProduct, IListProduct, IList } from "../Interfaces/listProductsInterface";

const ListProductsSchema = new Schema<IListProduct>({
  userId: { type: String },
  uuidv: { type: String },
  lists: [Object] as SchemaDefinitionProperty<IList[]>,
  updatedAt: { type: Date },
  createdAt: { type: Date }
}, { versionKey: false });

const ListProductsModel = model<any>('ListProduct', ListProductsSchema, 'ListProducts');

export default ListProductsModel;