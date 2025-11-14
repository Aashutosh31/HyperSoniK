import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import publicRoutes from "./routes/publicRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
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
