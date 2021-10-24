const Sequelize = require('sequelize');

const database = 'expressjs';
const username = 'expressjs';
const password = 'expressjs';

const sequelize = new Sequelize(database, username, password, {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;