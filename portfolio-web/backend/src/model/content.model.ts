import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type:Image,
    required:true
  }
});

 const Content = mongoose.model('content', contentSchema);
 export default Content;