const express = require('express');
const { addProduct, updateProductQuantity, getProducts } = require('../controllers/productController');
const { protect } = require('../middleware/authmiddleWare.js'); // Middleware to protect routes
const router = express.Router();

router.route('/').post(protect, addProduct).get(protect, getProducts);
router.route('/:id/quantity').put(protect, updateProductQuantity);

module.exports = router;