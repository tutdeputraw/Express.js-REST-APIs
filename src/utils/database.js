const Sequelize = require('sequelize');

const sequelize = require('../config/config.database')(Sequelize);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.post = require('../models/post')(sequelize, Sequelize);

module.exports = db;