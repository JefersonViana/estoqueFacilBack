import { Model } from "mongoose";
import UsersModel from "../models/users.model";
import { IUpdateUser, IUserRegister, IUsers } from "../Interfaces/usersInterface";
import { IResponseObj } from "../Interfaces/errorsInterface";
import { buildUpdateUser, buildUserToDb, checkUser } from "../functions/users";
import { safeUser } from "../auth";

class UsersService {
  private _userModel: Model<IUsers>;
  constructor() {
    this._userModel = UsersModel;
  }

  public find = async (email: string, password: string): Promise<IResponseObj> => {
    const userFound = await this._userModel.find({ email });
    if (!userFound.length) return { code: 404, message: 'User not Found!' };
    if (!checkUser(password, userFound[0].password)) return { code: 400, message: 'Email or password incorrect!' }
    const token = safeUser(userFound[0])
    return { code: 200, token };
  }

  public store = async ({ name, email, password }: IUserRegister): Promise<IResponseObj> => {
    const didUserExists = await this._userModel.find({ email });
    if (didUserExists.length) return { code: 409, message: 'Email already registered!' };
    const userDb = await buildUserToDb({ name, email, password });
    const didCreate = await this._userModel.create(userDb);
    if (!didCreate) return { code: 500, message: 'Something went wrong! Try again later.' }
    const token = safeUser(didCreate)
    return { code: 200, token }
  }

  public update = async (id: string, user: IUpdateUser): Promise<IResponseObj> => {
    const updateObj = await buildUpdateUser(user)
    const result = await this._userModel.findOneAndUpdate({ id }, updateObj, { new: true })
    const token = safeUser(result)
    return { code: 200, token }
  }
}

export default UsersService;