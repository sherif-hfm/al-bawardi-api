const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.MY_SQL_DB, process.env.MY_SQL_USER, process.env.MY_SQL_PWD, {
    host: process.env.MY_SQL_HOST,
    dialect:  'mysql'
  });

  module.exports=sequelize;