
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
    try{
  currentPrice = utils.updateStockPrice(currentPrice);
} catch (error) {
    console.error('Error updating stock:', error);
    throw new Error('Failed to update stock');
  }
};

// buy stock
const buyStock = () => {
    try{
  const cost = currentPrice * BUY_STOCKS;
  if (portfolio.balance >= cost && portfolio.dailyBought + BUY_STOCKS <= MAX_DAILY_PURCHASE) {
    portfolio.stocks += BUY_STOCKS;
    portfolio.balance -= cost;
    portfolio.dailyBought += BUY_STOCKS;
    portfolio.trades.push({ type: 'buy', price: currentPrice });
    console.log(`Bought ${BUY_STOCKS} stocks at $${currentPrice.toFixed(2)}. New balance: $${portfolio.balance.toFixed(2)}. Total bought today: ${portfolio.dailyBought}`);
  }
  
 else {
  console.log('Not enough balance to buy stocks or daily limit reached.');
}
}
catch(error)
{
    console.error('Error buying stock', error);
}
};

// sell stock
const sellStock = () => {
    try{
  const SELL_STOCKS = 10;
  if (portfolio.stocks >= SELL_STOCKS) {
    const lastBuyPrice = utils.getLastBuyPrice(portfolio.trades);
    const profit = (currentPrice - lastBuyPrice) * SELL_STOCKS;
    portfolio.profitLoss += profit;
    portfolio.stocks -= SELL_STOCKS;
    portfolio.balance += currentPrice * SELL_STOCKS;
    portfolio.trades.push({ type: 'sell', price: currentPrice, quantity: SELL_STOCKS });
    console.log(`Sold ${SELL_STOCKS} stocks at $${currentPrice.toFixed(2)}. Profit: $${portfolio.profitLoss.toFixed(2)}`);
} else {
  console.log('Not enough stocks to sell.');
}
}
catch(error)
{
    console.error('Error making sell stock', error);
}
};

// trade decision
const tradeDecision = () => {

    try{
  const lastBuyPrice = utils.getLastBuyPrice(portfolio.trades);
  
  if (currentPrice <= lastBuyPrice * 0.98 && portfolio.dailyBought < MAX_DAILY_PURCHASE) {// if(cur_price<= 2% of curr price and stocks are less than 50 )
    buyStock();
  }

  if (portfolio.stocks > 0 && currentPrice >= lastBuyPrice * 1.03) {
    sellStock();
  }
}
catch(error)
{
    console.error('Error making trade decision:', error);
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
