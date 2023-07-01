import { Model } from "mongoose";
import { IProduct, IUsersList } from "../Interfaces/listProductsInterface";
import ListProductsModel from "../models/listProducts.model";
import { IResponseObj } from "../Interfaces/errorsInterface";
import { v4 as uuidv4 } from "uuid";

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

  public store = async (userId: string, listProducts: IProduct[]): Promise<IResponseObj> => {
    const productsList = await this._listProductsModel.create({
      userId,
      uuidv: uuidv4(),
      productsList: listProducts,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    if (!productsList) return { code: 500, message: "Error creating list products!" }
    return { code: 200, message: 'List added to Users list successfully!' }
  }
}

export default ListProductsService;