const dotenv = require("dotenv");
dotenv.config({quiet:true});
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const uploadRoutes = require("./routes/upload.routes")

// Error middleware
const errorHandler = require("./middlewares/error.middleware");

connectDB();

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  })
);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload",uploadRoutes)

/* ERROR HANDLER */
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
