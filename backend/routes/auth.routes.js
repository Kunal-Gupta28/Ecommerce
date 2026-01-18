const express = require("express");

const {
  register,
  login,
  getMe,
  logout,
  forgotPassword,
  resetPassword
} = require("../controllers/auth.controller");

const { protect } = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate.middleware");

const {
  registerValidator,
  loginValidator
} = require("../validators/auth.validator");

const router = express.Router();

/* AUTH ROUTES */
router.post(
  "/register",
  registerValidator,
  validate,
  register
);

router.post(
  "/login",
  loginValidator,
  validate,
  login
);

router.get("/me", protect, getMe);
router.post("/logout", protect, logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
