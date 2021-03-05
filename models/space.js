const { Model, DataTypes } = require("sequelize");

class Space extends Model {}

var spaceFields = {
  location: DataTypes.STRING, 
  name: DataTypes.STRING, 
  description: DataTypes.STRING,
  user_id: DataTypes.INTEGER
 };

module.exports = { Space, spaceFields };
 