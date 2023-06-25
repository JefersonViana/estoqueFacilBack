import { Model } from "mongoose";
import UsersModel from "../models/Users.model";
import { IUserRegister, IUsers } from "../Interfaces/usersInterface";
import { IResponseObj } from "../Interfaces/errorsInterface";
import { buildUserToDb, checkUser } from "src/functions/users";

class UsersService {
  private _userModel: Model<IUsers>;
  constructor() {
    this._userModel = UsersModel;
  }

  public find = async (email: string, password: string): Promise<IResponseObj> => {
    const userFound = await this._userModel.find({ email });
    if (!userFound.length) return { code: 404, message: 'User not Found!' };
    if (!checkUser(password, userFound[0].password)) return { code: 400, message: 'Email or password incorrect!' }
    return { code: 200, message: userFound };
  }

  public store = async ({ name, email, password }: IUserRegister): Promise<IResponseObj> => {
    const didUserExists = await this._userModel.find({ email });
    if (didUserExists.length) return { code: 409, message: 'Email already registered!' }
    const userDb = buildUserToDb({ name, email, password })
    const didCreate = await this._userModel.create(userDb)
  }
}

export default UsersService;