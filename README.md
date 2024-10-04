Features
Automatic Stock Price Fluctuation: Simulates stock price updates every second.
Predefined Trading Strategy:
Buys stocks if the price drops by 2% from the last purchase or reference price.
Sells stocks if the price increases by 3% from the last purchase.
Portfolio Management: Keeps track of the cash balance, number of stocks owned, and total profit or loss.
API Endpoints: Provides endpoints to get the current stock price and portfolio details.
Error Handling: Robust error handling throughout the application to catch unexpected issues.

The bot uses a simple trading strategy:

Buy Stocks: When the stock price drops by 2% from the last purchase or the reference price, it buys 10 stocks, as long as the user has enough balance and hasn't exceeded the daily purchase limit (50 stocks).
Sell Stocks: When the stock price increases by 3% from the last purchase, it sells 10 stocks if the user has enough in their portfolio.

Technologies Used
Node.js: Backend runtime environment.
Express.js: Framework for building the API.
JavaScript: Core language used for implementing the bot's logic.
Modular Structure: The project is organized into controllers, services, and utility functions, following best practices for maintainability.


Major Installation
npm install
npm nodemon
npm express 
npm dotenv


