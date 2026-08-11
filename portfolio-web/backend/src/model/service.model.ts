import mongoose, { Schema, Document } from "mongoose";

export interface IService extends Document {
    title: string;
    description: string;
}
 
const serviceSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const Service = mongoose.model<IService>('service', serviceSchema);
export default Service;
