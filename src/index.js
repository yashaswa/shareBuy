const express = require('express');
const {PORT} = require('./config/serverConfig');
const stockService = require('./service/stock_service');


const ApiRoutes = require('./routes/index');

const app = express();



// randomly changing the stock prices and logging it after 1 sec
setInterval(() => {
    stockService.updateStockPrice();  // Update  price
    stockService.tradeDecision();     // Make trade decisions
  }, 1000);

  app.use('/api',ApiRoutes);// routing to version1 routes

  app.use((err, req, res, next) => {
    console.error('Global Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  });

const startserver = app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})
