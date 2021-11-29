'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('penduduks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nip: {
        type: Sequelize.STRING(64)
      },
      nama_lengkap: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      tanggal_lahir: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tempat_lahir: {
        type: Sequelize.STRING(50)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('penduduks');
  }
};