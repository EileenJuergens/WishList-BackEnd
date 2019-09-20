'use strict';

module.exports = (sequelize, DataTypes) => {
  const Wish = sequelize.define('wish', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
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
    Wish.belongsTo(db.User, {foreignKey: 'user.id'})
  };
  return Wish;
};

//FIXME: do I have to set the property foreignKey? in the association function
