import { Request, Response } from "express";
import SectionsService from "../service/sections.service";

class SectionsController {
  private _sectionsService: SectionsService;
  constructor() {
    this._sectionsService = new SectionsService();
  };

  public find = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const { code ,message } = await this._sectionsService.find();
      return res.status(code).json({ message });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server error' });
    }
  };
};

export default SectionsController;