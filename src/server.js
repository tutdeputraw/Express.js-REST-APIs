require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const database = require('./utils/database');
const errorController = require('./controllers/error.controller');

const feedRoutes = require('./routes/post.routes');

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
app.use(errorController.get404);

database.sequelize
  .sync()
  .then(result => {
    app.listen(process.env.SERVER_PORT);
  })
  .catch(err => {
    console.log(err);
  });