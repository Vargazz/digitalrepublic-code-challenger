'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Accounts',
    [
    {
      full_name: 'Eiichiro Oda',
      cpf: '777.555.888-22',
      balance: 2000000000
    },
    ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Accounts', null, {});
  },
};
