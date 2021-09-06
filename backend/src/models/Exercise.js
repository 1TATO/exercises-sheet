const DataTypes = require("sequelize");
const db = require("../db");

const Exercise = db.define('exercise', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  repetitions: {
    type: DataTypes.STRING,
  }
});

module.exports = Exercise;