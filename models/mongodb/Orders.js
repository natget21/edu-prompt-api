import mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    items: [{
        type: String
    }],
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed','canceled'],
        default: 'pending',
    }

}, { timestamps: true });

export const Orders = mongoose.model('Orders', OrdersSchema);
