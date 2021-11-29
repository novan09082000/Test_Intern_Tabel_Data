'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class penduduk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  penduduk.init({
    Nip: DataTypes.STRING,
    nama_lengkap: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    tempat_lahir: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'penduduk',
  });
  return penduduk;
};