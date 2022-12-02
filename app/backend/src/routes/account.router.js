const accountRouter = require('express').Router();
const { createAccount, getAllAccount,getByIds, upDate } = require('../controllers/account.controller');
const { validCreateAccount } = require('../middlewares/accountMiddlewares')

accountRouter.post('/account', validCreateAccount, createAccount);
accountRouter.get('/account', getAllAccount);
accountRouter.get('/account/:id', getByIds);
accountRouter.put('/account/:id', upDate)



module.exports = accountRouter;