'use strict';

/** @type {import('sequelize-cli').Migration} */
const { passwordHelper } = require('common/helpers');
// const hashedPassword = await passwordHelper.generateHashPassword(password)
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admins', [
      
      {
        email: 'admin@admin.com',
        password: await passwordHelper.generateHashPassword("password"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {});
  },
};
