const routers = require('express').Router();
const accountController = require('../controllers/account.controller');

routers.use('/account', accountController);


module.exports = routers;