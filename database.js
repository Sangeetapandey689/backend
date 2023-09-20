const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Geeta@6204', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
