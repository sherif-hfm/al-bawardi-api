const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('al-bawardi', 'root', 'P@ssw0rd', {
    host: 'localhost',
    dialect:  'mysql'
  });

  module.exports=sequelize;