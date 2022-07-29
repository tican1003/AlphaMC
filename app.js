const express = require('express');
const morgan = require('morgan');

const appRoutes = require('./routes/appRoutes');

const app = express();

// MIDDLEWARE
if (process.env.NODE_ENV === 'devlopment') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  console.log('Phần mềm trung gian đang hoạt động');
  next();
});

// ROUTES
app.use('/', appRoutes);

module.exports = app;
