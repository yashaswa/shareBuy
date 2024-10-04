I have first configure basic buying and selling app inside it we have various funcionalities initally we have kept the price of the stock to be 100$ 
now when we start the server two api get-portfoli and get-stock-price will automatically will hit 
now inside index.js I have set up setInterval function which will randomly generate no such that they are less than 1 % of the previous price
if the stock price goes below 2 % of the initial price initially and later 2 % of the previous bought price then we will buy 10 shares
and if the stock price goes up by 3% of the buying price then we will sell 10 stocks and profit and loss will be displayed on the scree as it call
porfolio at the time of buying and selling 
in this way we can see how much profit is at the end and also I have set up that maximum 50 shares you can buy for the demonstration purpose
