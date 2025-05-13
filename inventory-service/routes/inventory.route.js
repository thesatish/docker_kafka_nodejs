const express = require('express');
const router = express.Router();
const { storeInventory, getInventory } = require('../controllers/inventoryController');


router.post('/', storeInventory);
router.get('/', getInventory);

module.exports = router;