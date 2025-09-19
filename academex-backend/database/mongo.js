const mongoose = require("mongoose");
require("dotenv").config();

async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error(" MongoDB connection error:", err.message);
  }
}

module.exports = connectMongo;
