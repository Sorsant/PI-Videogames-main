const { DataTypes } = require("sequelize");
module.exports = (sequalize) => {
  sequalize.define(
    "Genres",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
