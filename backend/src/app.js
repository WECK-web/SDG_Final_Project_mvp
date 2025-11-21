// src/app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middlewares/errorHandler");

// Clerk express middleware
const { clerkMiddleware } = require("@clerk/express");

dotenv.config();

const app = express();

// Connect DB
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/farm2table";
connectDB(mongoUri);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Clerk middleware: attaches auth info to req (req.auth) when a session is present
// Place BEFORE route handlers so req.auth is available
app.use(clerkMiddleware());

// API routes
app.use("/api/products", productRoutes);

// health check
app.get("/api/health", (req, res) => res.json({ ok: true, env: process.env.NODE_ENV || "development" }));

// error handler (last)
app.use(errorHandler);

module.exports = app;
