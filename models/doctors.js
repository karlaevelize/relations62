"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      doctors.hasMany(models.patient);
    }
  }
  doctors.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      onDuty: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "doctors",
    }
  );
  return doctors;
};
