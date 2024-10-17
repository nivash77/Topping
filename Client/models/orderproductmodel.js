
const mongoose = require('mongoose');

const orderProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imgSrc: { type: String, required: true },
});

const OrderProduct = mongoose.model('OrderProduct', orderProductSchema);

module.exports = OrderProduct;