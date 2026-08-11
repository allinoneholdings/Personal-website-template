import mongoose, { Schema, Document } from "mongoose";

export interface IIndustryEx extends Document {
  y_of_ex: number;
  org_imp: number;
  sp_Eng: number;
  lead_coutched: number;
}

const industryExSchema = new Schema({
  y_of_ex: { type: Number, required: true },
  org_imp: { type: Number, required: true },
  sp_Eng: { type: Number, required: true },
  lead_coutched: { type: Number, required: true }
});

const IndustryEx = mongoose.model<IIndustryEx>('industryEx', industryExSchema);
export default IndustryEx;