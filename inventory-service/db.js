const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Inventory DB Connected");
  } catch (err) {
    console.error("❌ Inventory DB connection failed:", err.message);
  }
};

module.exports = connectDB;
