const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/user.model");
const asyncHandler = require("../utils/asyncHandler");

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "50m" });

/* REGISTER */
exports.register = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);

  const token = generateToken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000
  });

  res.status(201).json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
});


/* LOGIN */
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000 // 15 minutes
  });

  res.json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
});


/* LOGOUT */
exports.logout = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

/* GET LOGGED IN USER */
exports.getMe = asyncHandler(async (req, res) => {
  res.json(req.user);
});

/* FORGOT PASSWORD */
exports.forgotPassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  res.json({
    message: "Password reset token generated",
    resetToken // send via email in real app
  });
});

/* RESET PASSWORD */
exports.resetPassword = asyncHandler(async (req, res) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() }
  });

  if (!user) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.json({ message: "Password reset successful" });
});
