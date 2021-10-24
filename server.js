const express = require('express');

const feedRoutes = require('./routes/feedRoutes');

const app = express();

app.use('/feed', feedRoutes);

app.listen(8080);