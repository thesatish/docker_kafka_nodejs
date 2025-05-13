const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Order DB Connected");
  } catch (err) {
    console.error("❌ Order DB connection failed:", err.message);
  }
};

module.exports = connectDB;
