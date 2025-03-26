import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const MessageSchema = new mongoose.Schema({
    type: { type: String, enum: ['prompt', 'bot', 'user'], required: true },
    chatId: { type: String, required: true ,default: () => uuidv4()},
    promptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prompt' },
    content: { type: String, required: true },
    saved: { type: Boolean, default: false },
    timestamp: { type: Date, default: Date.now }
  });

  MessageSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false
  });
  
  export const Message = mongoose.model('Message', MessageSchema);
  