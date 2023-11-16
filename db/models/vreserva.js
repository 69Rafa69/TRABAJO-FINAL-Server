'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vreserva extends Model {
  }
  vreserva.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vreserva',
  });
  return vreserva;
};