import { Model } from "mongoose";
import { IUsersList } from "../Interfaces/listProductsInterface";
import ListProductsModel from "../models/listProducts.model";
import { IResponseObj } from "../Interfaces/errorsInterface";

class ListProductsService {
  private _listProductsModel: Model<IUsersList>
  constructor() {
    this._listProductsModel = ListProductsModel
  }
  public findProducts = async (userId: string): Promise<IResponseObj> => {
    const productsList = await this._listProductsModel.find({ userId });
    if (!productsList.length) return { code: 404, message: "User doens't have a list yet!" }
    return { code: 200, message: productsList }
  }
}

export default ListProductsService;