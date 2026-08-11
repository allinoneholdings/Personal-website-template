import mongoose from "mongoose";
import mangoose, { Schema, Document } from "mongoose";

const aboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  title_1: {
    type: String,
    required: true
  },
    dis_1: {
    type: String,
    required: true
  },
  title_2: {
    type: String,
    required: true
  },
  dis_2: {
    type: String,
    required: true
  },
  title_3: {
    type: String,
    required: true
  },
  dis_3: {
    type: String,
    required: true
  },
  title_4: {
    type: String,
    required: true
  },
  dis_4: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const About = mongoose.model('about', aboutSchema);
export default About;
