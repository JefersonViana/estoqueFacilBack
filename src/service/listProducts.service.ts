import { Model } from "mongoose";
import { IProduct, IListProduct } from "../Interfaces/listProductsInterface";
import ListProductsModel from "../models/listProducts.model";
import { IResponseObj } from "../Interfaces/errorsInterface";
import { v4 as uuidv4 } from "uuid";

class ListProductsService {
  private _listProductsModel: Model<IListProduct>;
  constructor() {
    this._listProductsModel = ListProductsModel;
  }

  public find = async (userId: string): Promise<IResponseObj> => {
    const productsList = await this._listProductsModel.find({ userId });
    if (!productsList.length) return { code: 404, message: "User don't have a list yet!" };
    return { code: 200, message: productsList };
  }

  public store = async (userId: string, listProducts: IProduct[]): Promise<IResponseObj> => {
    const productsList = await this._listProductsModel.create({
      userId,
      uuidv: uuidv4(),
      productsList: listProducts,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    if (!productsList) return { code: 500, message: "Error creating list products!" };
    return { code: 200, message: 'List added to User\'s list successfully!' };
  }

  public delete = async (userId: string, listId: string): Promise<IResponseObj> => {
    const productDeleted = await this._listProductsModel.deleteOne({ userId, uuidv: listId });
    console.log('productDeleted', productDeleted)
    if (!productDeleted) return { code: 500, message: "Error deleting list products!" };
    return { code: 200, message: 'List deleted successfully!' };
  }
}

export default ListProductsService;