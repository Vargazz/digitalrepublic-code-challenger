const { Account } = require('../models');


const createAccount = async ({ name, cpf, balance }) => {
    return await Account.create({
        name,
        cpf,
        balance
    }); 
};

const getAccounts = async () => {
    return await Account.findAll();
};

module.exports = {
    createAccount,
    getAccounts,
}