// service/portfolioService.js
const utils = require('../utils/basicUtils');

let currentPrice = 100;  // Initial stock price
const portfolio = {
  balance: 10000,
  stocks: 0,
  profitLoss: 0,
  trades: [],
  dailyBought: 0
};

const MAX_DAILY_PURCHASE = 50;
const BUY_STOCKS = 10;

// update stock price
const updateStockPrice = () => {
  currentPrice = utils.updateStockPrice(currentPrice);
};

// buy stock
const buyStock = () => {
  const cost = currentPrice * BUY_STOCKS;
  if (portfolio.balance >= cost && portfolio.dailyBought + BUY_STOCKS <= MAX_DAILY_PURCHASE) {
    portfolio.stocks += BUY_STOCKS;
    portfolio.balance -= cost;
    portfolio.dailyBought += BUY_STOCKS;
    portfolio.trades.push({ type: 'buy', price: currentPrice });
  }
};

// sell stock
const sellStock = () => {
  const SELL_STOCKS = 10;
  if (portfolio.stocks >= SELL_STOCKS) {
    const lastBuyPrice = utils.getLastBuyPrice(portfolio.trades);
    const profit = (currentPrice - lastBuyPrice) * SELL_STOCKS;
    portfolio.profitLoss += profit;
    portfolio.stocks -= SELL_STOCKS;
    portfolio.balance += currentPrice * SELL_STOCKS;
    portfolio.trades.push({ type: 'sell', price: currentPrice, quantity: SELL_STOCKS });
  }
};

// trade decision
const tradeDecision = () => {
  const lastBuyPrice = utils.getLastBuyPrice(portfolio.trades);
  
  if (currentPrice <= lastBuyPrice * 0.98 && portfolio.dailyBought < MAX_DAILY_PURCHASE) {// if(cur_price<= 2% of curr price and stocks are less than 50 )
    buyStock();
  }

  if (portfolio.stocks > 0 && currentPrice >= lastBuyPrice * 1.03) {
    sellStock();
  }
};


const getCurrentPrice = () => currentPrice;
const getPortfolio = () => portfolio;

module.exports = {
  updateStockPrice,
  tradeDecision,
  getCurrentPrice,
  getPortfolio
};
