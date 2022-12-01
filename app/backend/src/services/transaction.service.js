const { Transaction } = require('../models');

const getAllTransactions = async () => {
    const transactions = await Transaction.findAll();

    return transactions
};

module.exports = {
    getAllTransactions,
};
