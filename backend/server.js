import dotenv from "dotenv";
dotenv.config(); // <-- MUST BE THE FIRST LINE

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import publicRoutes from "./routes/publicRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

// DB
// (I also removed the deprecated mongoose options from my last suggestion)
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB Connected");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

// Routes mount
app.use("/api", publicRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log("Manual refresh available at GET /api/refresh-products?secret=YOUR_SECRET");
});