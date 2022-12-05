const validCpf = (cpf) => {
    if (!cpf || cpf.length !== 14) return null

    return true
};

const validCreateAccount = (req, res, next) => {
    const { cpf, name } = req.body;
    const isValidCpf = validCpf(cpf);
    
    if(name === '' || !name) return res.status(401).json({ erro: 'Necessario informar o Nome' });
    if(cpf === '' || !cpf) return res.status(401).json({ erro: 'É necessario informar um CPF' });
    if(isValidCpf === null) return res.status(401).json({ erro:'Somente numeros de CPF validos' });
    if(isValidCpf === false) return res.status(401).json({ erro: 'CPF invalido'});
    
    next();
};

module.exports = {
    validCreateAccount
};