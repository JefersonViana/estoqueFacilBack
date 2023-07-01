import { Schema, model } from "mongoose";
import { ISectionObj } from "../Interfaces/sectionsInterface";

const SectionSchema = new Schema<ISectionObj>({
  id: { type: Number },
  sectionName: { type: String }
}, { versionKey: false });

const SectionModel = model<ISectionObj>('Section', SectionSchema, 'Sections');

export default SectionModel;