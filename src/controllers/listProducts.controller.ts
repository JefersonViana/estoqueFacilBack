import { Request, Response } from "express";
import ListProductsService from "../service/listProducts.service";
import { ValidatedRequest } from "express-joi-validation";
import { IDeleteProductsRequest, IParamsProductsRequest, IStoreProductsRequest } from "../middlewares/listValidator";

class ListProductsController {
  private listProductsService: ListProductsService;
  constructor() {
    this.listProductsService = new ListProductsService();
  }
  public find = async (req: ValidatedRequest<IParamsProductsRequest>, res: Response): Promise<Response> => {
    try { 
      const { idUser } = req.params;
      const { code, message  } = await this.listProductsService.find(idUser)
      if (code !== 200) return res.status(code).json({ message });
      return res.status(code).json({ message });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server error' });
    }
  };

  public store = async (req: ValidatedRequest<IStoreProductsRequest>, res: Response): Promise<Response> => {
    try { 
      const { idUser } = req.params;
      const newList = req.body;
      const { code, message  } = await this.listProductsService.store(idUser, newList)
      if (code !== 200) return res.status(code).json({ message });
      return res.status(code).json({ message });
    } catch (error) {
      console.log('error', error)
      return res.status(500).json({ message: 'Internal Server error' });
    }
  }

  public delete = async (req: ValidatedRequest<IDeleteProductsRequest>, res: Response): Promise<Response> => {
    try { 
      const { idUser } = req.params;
      const { listId } = req.query;
      const { code, message  } = await this.listProductsService.delete(idUser, listId)
      if (code !== 200) return res.status(code).json({ message });
      return res.status(code).json({ message });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server error' });
    }
  }
}

export default ListProductsController;