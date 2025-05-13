const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    product: String,
    stock: Number,
}, { timestamps: true });

module.exports = mongoose.model("Inventory", inventorySchema);
