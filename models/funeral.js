const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../helpers/database');
const prayer=require('./prayer');
const PurialPlace=require('./sex');
const Sex=require('./burial-place');
const Funeral = sequelize.define('Funeral', {
    // Model attributes are defined here
    deadName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull:false    
      // allowNull defaults to true
    },
    // sex: {
    //     type: DataTypes.CHAR(1), // M male,F female,B boy,G girl
    //     allowNull:false    
    //     // allowNull defaults to true
    //   }
  }, 
  {
    // Other model options go here
  });
  Funeral.belongsTo(prayer)
  Funeral.belongsTo(PurialPlace)
  Funeral.belongsTo(Sex)
module.exports = Funeral;