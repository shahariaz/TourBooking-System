// All Imoporte
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRouters');
const userRouter = require('./routes/userToutes');

const app = express();
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// 1)Middleware
app.use(express.json());

app.use(express.static('./public'));
// 2)Routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// APP EXPORTS
module.exports = app;
