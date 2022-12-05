const { Transaction } = require('../models');

const { dateGenerator } = require('../util/jwt')

const getAllTransactions = async () => {
    const transactions = await Transaction.findAll();

    return transactions
};

const cashTranference = async (transmitter, badge, value) => {
       return await Transaction.create({
        transmitter,
        badge,
        value,
})};

module.exports = {
    getAllTransactions,
    cashTranference,
};
