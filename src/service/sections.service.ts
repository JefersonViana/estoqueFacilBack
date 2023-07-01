import { Model } from "mongoose"
import SectionModel from "../models/sections.model"
import { ISectionObj } from "../Interfaces/sectionsInterface"
import { IResponseObj } from "src/Interfaces/errorsInterface"

class SectionsService {
  private _sectionsModel: Model<ISectionObj>;
  constructor() {
    this._sectionsModel = SectionModel;
  };

  public find = async (): Promise<IResponseObj> => {
    const sections = await this._sectionsModel.find();
    if (!sections.length) return { code: 404, message: 'Sections don\'t exist' };
    return { code : 200, message: sections }
  };
}

export default SectionsService;