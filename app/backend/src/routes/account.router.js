const accountRouter = require('express').Router();
const { createAccount, getAllAccount,getByIds } = require('../controllers/account.controller');
const { validCreateAccount } = require('../middlewares/accountMiddlewares')

accountRouter.post('/account', validCreateAccount, createAccount);
accountRouter.get('/account', getAllAccount);
accountRouter.get('/account/:id', getByIds);



module.exports = accountRouter;