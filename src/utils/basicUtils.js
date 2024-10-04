
const updateStockPrice = (currentPrice) => {
  const fluctuation = (Math.random() * 2 - 1) * 0.01;  // Random fluctuation by +1 or -1 %
  return currentPrice * (1 + fluctuation);
};

// Get the last buy price from the portfolio trades
const getLastBuyPrice = (trades) => {
  const lastBuyTrade = trades.filter(t => t.type === 'buy').slice(-1)[0];
  return lastBuyTrade ? lastBuyTrade.price : 100;  // 100 is the reference price
};

module.exports = {
  updateStockPrice,
  getLastBuyPrice
};
