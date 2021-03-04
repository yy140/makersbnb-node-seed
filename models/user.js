const { Model, DataTypes } = require("sequelize");

class User extends Model {}

var userFields = {
  First_Name: DataTypes.STRING,
  Last_Name: DataTypes.STRING,
  Email: DataTypes.STRING
};

module.exports = { User, userFields };
 