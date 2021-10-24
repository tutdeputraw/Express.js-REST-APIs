const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const feedRoutes = require('./routes/postRoutes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(morgan('dev'));

app.use('/post', feedRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status(404);
  next(error);
});
app.use((error, req, res, next) => {
  res.status(404).json({
    error: {
      message: error.message
    }
  })
});

app.listen(3000);