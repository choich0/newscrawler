const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
      "BROCM",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        nTitle: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        nDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        nLink: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
};