const express = require('express');
const router = express.Router();
const stockController = require('../../controllers/stock_cont');

router.get('/stock-price', stockController.getStockPrice);
router.get('/portfolio', stockController.getPortfolio);

module.exports = router;