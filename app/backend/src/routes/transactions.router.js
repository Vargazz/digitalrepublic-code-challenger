const transactionsRouter = require('express').Router();
const { getAllTransactions,  cashTranference } = require('../controllers/transactions.controller');


transactionsRouter.get('/transaction', getAllTransactions);
transactionsRouter.post('/transaction', cashTranference);

module.exports = transactionsRouter;