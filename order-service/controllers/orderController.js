const OrderModel = require('../models/order.model');
// const { sendOrderEvent } = require("../producer");

const storeOrder = async (req, res) => {
    try {
        console.log("Request body:", req.body);


        const order = new OrderModel(req.body);
        
        await order.save();

        // await sendOrderEvent(order);

        res.status(201).json(order);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find();
        res.status(200).json(orders);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


module.exports = {
    storeOrder,
    getOrders
}