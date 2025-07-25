const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: String,
  sku: { type: String, required: true, unique: true },
  image_url: String,
  description: String,
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);