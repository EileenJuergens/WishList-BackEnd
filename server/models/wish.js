'use strict';

module.exports = (sequelize, DataTypes) => {
  const wish = sequelize.define('wish', {
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
  wish.associate = db => {
    wish.belongsTo(db.user)
  };
  return wish;
};
