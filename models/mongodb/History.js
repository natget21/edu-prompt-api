import mongoose from 'mongoose';

const HistorySchema = new mongoose.Schema({
    userId: { type: String, required: true },
    folderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder', required: true },
    title: { type: String, required: true },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
  });
  
  export const History = mongoose.model('History', HistorySchema);
  