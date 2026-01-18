const Product = require("../models/product.model");
const asyncHandler = require("../utils/asyncHandler");

/* GET ALL PRODUCTS */
exports.getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

/* GET SINGLE PRODUCT */
exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

/* SEARCH PRODUCTS */
exports.searchProducts = asyncHandler(async (req, res) => {
  const { q } = req.query;

  const products = await Product.find({
    title: { $regex: q, $options: "i" }
  });

  res.json(products);
});

/* CATEGORY PRODUCTS */
exports.getProductsByCategory = asyncHandler(async (req, res) => {
  const products = await Product.find({
    category: req.params.category
  });

  res.json(products);
});



