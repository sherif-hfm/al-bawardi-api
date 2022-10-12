const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../helpers/database');
const prayer=require('./prayer');
const User = sequelize.define('User', {
    // Model attributes are defined here
    loginName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false    
      // allowNull defaults to true
    },
    status: {
        type: DataTypes.INTEGER, // 0 enabled,1 disabled
        allowNull:false   ,
        defaultValue:0 
        // allowNull defaults to true
      },
      loginErrors: {
        type: DataTypes.INTEGER, // 0 enabled,1 disabled
        allowNull:false,
        defaultValue:0    
        // allowNull defaults to true
      }
  }, 
  {
    // Other model options go here
  });
  
module.exports = User;