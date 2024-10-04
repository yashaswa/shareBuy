const express = require('express');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');

const ApiRoutes = require('./routes/index');

const app = express();


app.use('/api',ApiRoutes);// routing to version1 routes

const startserver = app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})
