import { Schema, model } from "mongoose";
import { IUsers } from "src/Interfaces/usersInterface";

const Users = new Schema<IUsers>({
  id: { type: String },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  updatedAt: { type: Date },
  createdAt: { type: Date }
}, { versionKey: false });

const UsersModel = model<IUsers>('User', Users, 'Users');

export default UsersModel;