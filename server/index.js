import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Blog from './models/Blog.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '10mb'}));

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/blogdb';
mongoose.connect(mongoUri).then(() => console.log('MongoDB connected')).catch(err => console.error('MongoDB connection error', err));

// REST API endpoints
app.get('/api/blogs', async (req, res) => {
  const blogs = await Blog.find().sort({createdAt: -1});
  res.json(blogs);
});

app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({message: 'Blog not found'});
    res.json(blog);
  } catch (err) {
    res.status(400).json({message: 'Invalid ID'});
  }
});

app.post('/api/blogs', async (req, res) => {
  const {title, content, coverImage} = req.body;
  const blog = new Blog({title, content, coverImage});
  await blog.save();
  res.status(201).json(blog);
});

app.put('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!blog) return res.status(404).json({message: 'Blog not found'});
    res.json(blog);
  } catch {
    res.status(400).json({message: 'Invalid ID'});
  }
});

app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({message: 'Blog not found'});
    res.json({message: 'Deleted'});
  } catch {
    res.status(400).json({message: 'Invalid ID'});
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
