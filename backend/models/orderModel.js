const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    shopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop',
        required: true
    },
    products: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    discount: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    finalAmount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema);

