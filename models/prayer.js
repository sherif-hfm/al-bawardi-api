const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../helpers/database')
//const funeral=require('./funeral');
const Prayer = sequelize.define('prayer', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true        
      },
    prayerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  }, 
  {
    timestamps: false
    // Other model options go here
  });
 
module.exports = Prayer;