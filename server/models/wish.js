"use strict";

module.exports = (sequelize, DataTypes) => {
  const Wish = sequelize.define('Wish', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  Wish.associate = db => {
    Wish.belongsTo(db.User)
  };
  return Wish;
};
