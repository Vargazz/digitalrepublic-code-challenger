const { default: ModelManager } = require('sequelize/types/model-manager');
const validCpf = require('validar-cpf');

const isCpfValid = (cpf) => {
    validCpf(cpf);
};

const isNameValid = (name) => {
    const minCharacters = 8;
    if(name.length >= minCharacters) return true;
    return false;
}

module.exports = {
    isCpfValid,
    isNameValid,
}