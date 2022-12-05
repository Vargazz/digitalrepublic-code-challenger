'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Transactions',
    [
      {
        transmitter: 1,
        badge: 2,
        value: 100.00,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Transactions', null, {}),
};
