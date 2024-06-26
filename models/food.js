const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const foodSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    options: [optionSchema], 
    category: String,
    image: String,
    inStock: { type: Boolean, default: true },
    stockExpiresAt: Date, // Store the expiration time
    stockExpiresIn: Number, // Store the duration until expiration
    couponCode: String, // Add coupon code field
    discount: { type: Number, default: 0 } // Add discount field
});

const Food = mongoose.model('Food', foodSchema);
const Option =mongoose.model('Option',optionSchema);
module.exports = {Food,Option};
