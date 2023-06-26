import { Request, Response } from "express";
import UsersListProductsService from "../service/UsersListProducts.service";
import { ValidatedRequest } from "express-joi-validation";
import { IParamsProductsRequest } from "src/middlewares/usersListValidator";

class UsersListProductsController {
  private usersListProductsService: UsersListProductsService;
  constructor() {
    this.usersListProductsService = new UsersListProductsService();
  }
  public findProducts = async (req: ValidatedRequest<IParamsProductsRequest>, res: Response): Promise<Response> => {
    try { 
      const { userId } = req.params;
      const { code, message  } = await this.usersListProductsService.findProducts(userId)
      if (code !== 200) return res.status(code).json({ message });
      return res.status(code).json({ message });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server error' });
    }
  }
}

export default UsersListProductsController;