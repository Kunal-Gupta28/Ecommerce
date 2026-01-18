const mongoose = require("mongoose");

const PRODUCT_CATEGORIES = [
  "Hair Transplant Instruments",
  "Health And Personal Care",
  "Ophthalmic Instruments",
  "Dermatology Equipment",
  "Hospital Holloware",
  "Magnification & Optics",
  "Prp Kit",
  "Gynaecology",
  "Surgical Instruments",
];

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    category: {
      type: String,
      enum: PRODUCT_CATEGORIES,
      required: true,
      index: true,
    },

    subCategory: {
      type: String,
    },

    brand: {
      type: String,
    },
    price: {
      amount: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        enum: ["Piece", "Box", "Pack"],
        default: "Piece",
      },
    },

    stock: {
      type: Number,
      default: 0,
    },

    description: {
      type: String,
      required: true,
    },

    specifications: {
      type: Map,
      of: String,
    },

    image: [
      {
        type: String,
      },
    ],

    countryOfOrigin: {
      type: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", productSchema);
