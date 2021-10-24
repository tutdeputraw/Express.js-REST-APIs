const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const sequelize = require('./utils/database');
const errorController = require('./controllers/errorController');

const post = require('./models/post');

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
app.use(errorController.get404);

sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });