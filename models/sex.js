const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../helpers/database')

const Sex = sequelize.define('sex', {
    // Model attributes are defined here
    id: {
        type: DataTypes.CHAR(1),
        primaryKey: true        
      },
      Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  }, 
  {
    timestamps: false
    // Other model options go here
  });
 
module.exports = Sex;