const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect database
connectDB();

app.get("/",(req,res) => {
    res.send("API is running...");
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
