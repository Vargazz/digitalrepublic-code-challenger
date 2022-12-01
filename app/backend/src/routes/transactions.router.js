const transactionsRouter = require('express').Router();
const { getAllTransactions } = require('../controllers/transactions.controller');


transactionsRouter.get('/transaction', getAllTransactions);



module.exports = transactionsRouter;