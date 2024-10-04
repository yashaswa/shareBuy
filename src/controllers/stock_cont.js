// controller/portfolioController.js
const portfolioService = require('../service/stock_service');

// get the current stock price
const getStockPrice = (req, res) => {
    try{
  const price = portfolioService.getCurrentPrice();
  res.json({ price: price.toFixed(2) });
    }
    catch (error) {
        console.error('Error fetching stock price:', error);
        res.status(500).json({ message: 'Internal server error while fetching stock price' });
      }
};

// get portfolio details
const getPortfolio = (req, res) => {
    try{
  const portfolio = portfolioService.getPortfolio();
  res.json({
    balance: portfolio.balance.toFixed(2),
    stocks: portfolio.stocks,
    profitLoss: portfolio.profitLoss.toFixed(2),
    trades: portfolio.trades,
    dailyBought: portfolio.dailyBought
  });
} catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({ message: 'Internal server error while fetching portfolio' });
  }
};

module.exports = {
  getStockPrice,
  getPortfolio
};
