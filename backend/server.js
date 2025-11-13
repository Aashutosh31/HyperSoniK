import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import publicRoutes from './routes/publicRoute.js';

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect database
connectDB();

// routes
app.use("/api",publicRoutes);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
