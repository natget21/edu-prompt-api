import mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'canceled'],
        default: 'pending',
    }

}, { timestamps: true,versionKey: false });

export const Orders = mongoose.model('Orders', OrdersSchema);
