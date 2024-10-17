// models/DishModel.js
const mongoose = require('../config/db');

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:false
    },
    description: {
        type: String,
        required: false
    }
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;