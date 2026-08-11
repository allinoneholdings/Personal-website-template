import mongoose from "mongoose";

const expertiseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Expertise = mongoose.model('expertise', expertiseSchema);
export default Expertise;