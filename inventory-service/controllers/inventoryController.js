
const inventoryModel = require('../models/inventory.model');

const storeInventory = async (req, res) => {
    try {
        const item = new inventoryModel(req.body);
        await item.save();

        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const getInventory = async (req, res) => {
    try {
        const items = await inventoryModel.find();

        res.status(201).json(items);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


module.exports = {
    storeInventory,
    getInventory
}