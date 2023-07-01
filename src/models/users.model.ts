import { Schema, model } from "mongoose";
import { IUsers } from "../Interfaces/usersInterface";

const Users = new Schema<IUsers>({
  id: { type: String },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  updatedAt: { type: String },
  createdAt: { type: String }
}, { versionKey: false });

const UsersModel = model<IUsers>('User', Users, 'Users');

export default UsersModel;