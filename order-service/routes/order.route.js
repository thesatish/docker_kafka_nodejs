const express = require('express');
const router = express.Router();
const { storeOrder, getOrders } = require('../controllers/orderController');


router.post('/', storeOrder);
router.get('/', getOrders);


module.exports = router;
