import { Request, Response } from "express";
import ListProductsService from "../service/listProducts.service";
import { ValidatedRequest } from "express-joi-validation";
import { IParamsProductsRequest } from "../middlewares/listValidator";

class ListProductsController {
  private listProductsService: ListProductsService;
  constructor() {
    this.listProductsService = new ListProductsService();
  }
  public findProducts = async (req: ValidatedRequest<IParamsProductsRequest>, res: Response): Promise<Response> => {
    try { 
      const { userId } = req.params;
      const { code, message  } = await this.listProductsService.findProducts(userId)
      if (code !== 200) return res.status(code).json({ message });
      return res.status(code).json({ message });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server error' });
    }
  }
}

export default ListProductsController;