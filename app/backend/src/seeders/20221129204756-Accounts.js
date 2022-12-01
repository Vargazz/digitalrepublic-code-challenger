'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Accounts', [
    {
      name: 'Luffy',
      cpf: '777.555.888-22',
      balance: 2000000000
    },
    {
      name: 'Shanks',
      cpf: '157.685.748-32',
      balance: 2000000
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Accounts', null, {});
  },
};
