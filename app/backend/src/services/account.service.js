const { Account } = require('../models');


const createAccount = async ({ name, cpf, balance }) => {
    return await Account.create({
        name,
        cpf,
        balance
    }); 
};

const getById = async (id) => {
    const idAccount = await Account.findOne({
      where: { id },
      attributes: { exclude: 'cpf' },
    });
    if (!idAccount) {
        return { type: 404, message: 'User does not exist' };
    }
    return { type: null, message: idAccount };
  };

const getAccounts = async () => {
    return await Account.findAll();
};

const upDateId = async (id, balance) => {
    const [result] = await Account.update(
      { balance },
      { where: { id } },
    );
    return result;
  }


module.exports = {
    createAccount,
    getAccounts,
    getById,
    upDateId
}