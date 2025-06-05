import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Blog from './models/Blog.js';
import Lead from './models/Lead.js';
import slugify from 'slugify';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '10mb'}));

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/blogdb';
mongoose.connect(mongoUri).then(() => console.log('MongoDB connected')).catch(err => console.error('MongoDB connection error', err));

// REST API endpoints
app.get('/api/blogs', async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

app.get('/api/blogs/slug/:slug', async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (!blog) return res.status(404).json({ message: 'Blog not found' });
  res.json(blog);
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
  const { title, metaTitle, metaDescription, content, coverImage } = req.body;
  const slug = slugify(title, { lower: true, strict: true });
  const blog = new Blog({ title, metaTitle, metaDescription, slug, content, coverImage });
  await blog.save();
  res.status(201).json(blog);
});

app.put('/api/blogs/:id', async (req, res) => {
  try {
    const update = { ...req.body };
    if (update.title) {
      update.slug = slugify(update.title, { lower: true, strict: true });
    }
    const blog = await Blog.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch {
    res.status(400).json({ message: 'Invalid ID' });
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

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, subject, message } = req.body;
  const lead = new Lead({ name, email, phone, service, subject, message });
  await lead.save();
  res.status(201).json(lead);
});

app.get('/api/leads', async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
