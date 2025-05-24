import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import morgan from "morgan"; // Added for request logging

dotenv.config();

// Database connection
connectDB();

const app = express();

// Enhanced CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Request logging
app.use(morgan("dev"));

// Body parser
app.use(express.json());

// Add request logger middleware
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  next();
});

// API health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use("/api/tasks", taskRoutes);
app.use("/api/users", authRoutes);

// Enhanced error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err.stack);
  errorHandler(err, req, res, next);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  console.log(
    `CORS configured for: ${
      process.env.FRONTEND_URL || "http://localhost:5173"
    }`
  );
});
