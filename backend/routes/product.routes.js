const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  searchProducts,
  getProductsByCategory
} = require("../controllers/product.controller");

/* Public */
router.get("/", getProducts);
router.get("/search", searchProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/:id", getProductById);

module.exports = router;
