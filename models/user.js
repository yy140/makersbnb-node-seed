const { Model, DataTypes } = require("sequelize");

class User extends Model {}

var userFields = {
  username: DataTypes.STRING, 
  email: DataTypes.STRING, 
  password: DataTypes.STRING

};

module.exports = { User, userFields };
 