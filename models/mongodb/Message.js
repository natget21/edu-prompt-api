import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    type: { type: String, enum: ['prompt', 'bot', 'user'], required: true },
    chatId: { type: Number, required: true },
    promptId: { type: Number }, // Nullable, only for prompts
    content: { type: String, required: true },
    saved: { type: Boolean, default: false },
    timestamp: { type: Date, default: Date.now }
  });
  
  export const Message = mongoose.model('Message', MessageSchema);
  