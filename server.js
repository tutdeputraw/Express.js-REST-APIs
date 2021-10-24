const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/postRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/post', feedRoutes);

app.listen(3000);