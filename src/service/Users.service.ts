import { Model } from "mongoose";
import UsersModel from "../models/Users.model";
import { IUsers } from "../Interfaces/usersInterface";
import { IResponseObj } from "../Interfaces/errorsInterface";

class UsersService {
  private _userModel: Model<IUsers>;
  constructor() {
    this._userModel = UsersModel;
  }

  public find = async (email: string, password: string): Promise<IResponseObj> => {
    const userFound = await this._userModel.find({ email, password });
    if (!userFound.length) return { code: 404, message: 'User not Found!' };
    return { code: 200, message: userFound };
  }
}

export default UsersService;