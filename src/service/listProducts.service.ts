import { Model } from "mongoose";
import { IProduct, IListProduct, IList } from "../Interfaces/listProductsInterface";
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

  public store = async (userId: string, listProducts: IList): Promise<IResponseObj> => {
    const productsList = await this._listProductsModel.updateOne({ userId }, {
      $push: {
        lists: listProducts
      },
      $set: {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    });
    if (!productsList) return { code: 500, message: "Error creating list products!" };
    return { code: 200, message: 'List added to User\'s list successfully!' };
  }
  // listProducts está dando ruim na tipagem
  public update = async (userId: string, listProducts: any): Promise<IResponseObj> => {
    const productsList = await this._listProductsModel.find({ userId });
    const listName = listProducts.listName;
    const newListProduct = listProducts.productsList;
    const updateListProducts = productsList[0].lists.map((list) => {
      if (list.listName === listName) {
        return {
          listName,
          productsList: newListProduct,
        }
      }
      return list
    })
    const productUpdated = await this._listProductsModel.updateOne({ userId }, {
      $set: {
        lists: updateListProducts,
        updatedAt: new Date().toISOString()
      }
    });
    if (!productUpdated) return { code: 500, message: "Error updating list products!" };
    return { code: 200, message: 'List updated successfully!' };
  }

  public delete = async (userId: string, listId: string): Promise<IResponseObj> => {
    const productDeleted = await this._listProductsModel.deleteOne({ userId, uuidv: listId });
    if (!productDeleted) return { code: 500, message: "Error deleting list products!" };
    return { code: 200, message: 'List deleted successfully!' };
  }
}

export default ListProductsService;