import mongoose from 'mongoose';

const SectionSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  content: { type: mongoose.Schema.Types.Mixed, default: {} },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Section', SectionSchema);
