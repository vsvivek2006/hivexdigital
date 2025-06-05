import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: String,
  metaTitle: String,
  metaDescription: String,
  slug: { type: String, unique: true },
  content: String,
  coverImage: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Blog', BlogSchema);
