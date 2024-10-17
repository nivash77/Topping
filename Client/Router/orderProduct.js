// routes/orderProductRoutes.js
const express = require('express');
const router = express.Router();
const OrderProduct = require('../models/orderproductmodel');


router.post('/add', async (req, res) => {
    try {
        const { name, price, imgSrc } = req.body;

        // Validate input
        if (!name || !price || !imgSrc) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newProduct = new OrderProduct({ name, price, imgSrc });
        await newProduct.save();

        return res.status(201).json({
            message: "Product added successfully",
            product: newProduct,
        });
    } catch (error) {
        console.error("Add Product Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.get('/all', async (req, res) => {
    try {
        const products = await OrderProduct.find();
        return res.status(200).json({
            success: true,
            products,
        });
    } catch (error) {
        console.error("Get Products Error:", error);
        return res.status(500).json({ message: "Error retrieving products", error });
    }
});

router.get('/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const product = await OrderProduct.findOne({ name });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        console.error("Get Product Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;