const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const slugify = require("slugify");
const upload = require("../middlewares/upload.middleware");

router.post("/product", upload.single("image"), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Product image is required",
      });
    }

 const product = await Product.create({
  title: req.body.title,
  slug: slugify(req.body.title, { lower: true }),
  description: req.body.description,
  category: req.body.category,
  stock: Number(req.body.stock),

  price: {
    amount: Number(req.body.price.amount),
    unit: req.body.price.unit || "Piece",
  },

  image: [req.file.path],
});


    res.status(201).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
