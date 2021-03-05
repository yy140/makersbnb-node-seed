const { Model, DataTypes } = require("sequelize");

class Space extends Model {}

var spaceFields = {
  location: DataTypes.STRING, 
  name: DataTypes.STRING, 
  description: DataTypes.STRING
 };

module.exports = { Space, spaceFields };
 