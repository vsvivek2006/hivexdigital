import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  coverImage: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Blog', BlogSchema);
