import { Request, Response } from "express";
import UsersService from "../service/Users.service";
import { ValidatedRequest } from "express-joi-validation";
import { IBodyLoginRequest, IBodyRegisterRequest } from "../Interfaces/usersInterface";

class UsersController {
  private _usersService: UsersService
  constructor() {
    this._usersService = new UsersService()
  }

  public find = async (req: ValidatedRequest<IBodyLoginRequest>, res: Response): Promise<Response> => {
    try {
      const { email, password } = req.body;
      const { code, message } = await this._usersService.find(email, password);
      if (code !== 200) return res.status(code).json({ message })
      return res.status(code).json({ message })
    } catch (error) {
      console.log('error', error)
      return res.status(500).json({ message: 'Something went wrong try again later!' })
    }
  }

  public store = async (req: ValidatedRequest<IBodyRegisterRequest>, res: Response): Promise<Response> => {
    try {
      const { email, password, name } = req.body;
      const { code, message } = await this._usersService.store({ email, password, name });
      if (code !== 200) return res.status(code).json({ message })
      return res.status(code).json({ message })
    } catch (error) {
      console.log('error', error)
      return res.status(500).json({ message: 'Something went wrong try again later!' })
    }
  }
}

export default UsersController;