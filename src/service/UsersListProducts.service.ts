import { Model } from "mongoose";
import { IUsersList } from "../Interfaces/usersListProductsInterface";
import UsersListProductsModel from "../models/UsersListProducts.model";
import { IResponseObj } from "../Interfaces/errorsInterface";

class UsersListProductsService {
  private _usersListProducts: Model<IUsersList>
  constructor() {
    this._usersListProducts = UsersListProductsModel
  }
  public findProducts = async (userId: string): Promise<IResponseObj> => {
    const productsList = await this._usersListProducts.find({ userId });
    if (!productsList.length) return { code: 404, message: "User doens't have a list yet!" }
    return { code: 200, message: productsList }
  }
}

export default UsersListProductsService;