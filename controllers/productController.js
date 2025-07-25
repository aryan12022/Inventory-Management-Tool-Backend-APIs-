const Product = require('../models/ProductModel');

// @desc    Add a new product   
// @route   POST /products

const addProduct = async (req, res) => {
    const { name, type, sku, image_url, description, quantity, price } = req.body;

    try {
        const product = new Product({
            name,
            type,
            sku,
            image_url,
            description,
            quantity,
            price,
        });

        const createdProduct = await product.save();
        res.status(201).json({
            product_id: createdProduct._id,
            message: "Product added successfully"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateProductQuantity = async (req, res) => {
    const { quantity } = req.body;

    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            product.quantity = quantity;
            const updatedProduct = await product.save();
            res.json({
                _id: updatedProduct._id,
                name: updatedProduct.name,
                quantity: updatedProduct.quantity,
                message: "Quantity updated successfully",
            });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all products
// @route   GET /products

const getProducts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    try {
        const products = await Product.find({}).skip(skip).limit(limit);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addProduct, updateProductQuantity, getProducts };