'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {
          args: true,
          msg: `Username must be filled`
        }
      }
    },
    room: {
      type: DataTypes.INTEGER
    },
    row: {
      type: DataTypes.STRING
    } ,
    column: {
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};