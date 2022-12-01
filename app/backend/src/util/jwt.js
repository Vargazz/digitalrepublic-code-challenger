const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET || '15d5454sdasdaasd32';

const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256'
};
const generateJWTToken = ({ id, name, cpf, balance}) => 
    jwt.sign({id, name, cpf, balance }, TOKEN_SECRET, jwtConfig);

const authenticateToken = async (token) => {
    if(!token){
        throw{status: 401, message: 'jwt malformed'}
    }

    try {
        const validate = await jwt.verify(token, TOKEN_SECRET);
        return validate;
    } catch(error){
        console.log(error)
        throw{status: 401, message: 'jwt malformed'}
    }
}

module.exports = {
    generateJWTToken,
    authenticateToken
}