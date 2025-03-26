import mongoose from 'mongoose';

const SavedMessagesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const SavedMessages = mongoose.model('SavedMessages', SavedMessagesSchema);
