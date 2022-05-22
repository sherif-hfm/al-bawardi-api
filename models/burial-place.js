const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../helpers/database')

const PurialPlace = sequelize.define('purialPlace', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true        
      },
      placeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  }, 
  {
    timestamps: false
    // Other model options go here
  });
 
module.exports = PurialPlace;