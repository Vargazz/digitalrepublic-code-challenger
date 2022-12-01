'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Transactions',
    [
      {
        id_transmitter: 1,
        id_badge: 2,
        value: 100.00,
        date: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Transactions', null, {}),
};
