import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Lead', LeadSchema);
