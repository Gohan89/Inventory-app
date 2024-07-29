const Product = require('../models/productModel');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.addProduct = async (req, res) => {
    const { name, image, quantity, price } = req.body;

    try {
        const existingProduct = await Product.findOne({ name });
        if (existingProduct) {
            return res.status(400).json({ msg: 'Product already exists' });
        }

        const newProduct = new Product({
            name,
            image,
            quantity,
            price
        });

        await newProduct.save();

        res.status(201).json({ msg: 'Product added successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

