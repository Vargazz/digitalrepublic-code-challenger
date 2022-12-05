const express = require('express');
const cors = require('cors');

const app = express();
const AccountRouter = require('./src/routes/account.router');
const transactionsRouter = require('./src/routes/transactions.router');


app.use(express.json());
app.use(cors());

app.use(AccountRouter);
app.use(transactionsRouter);

module.exports = app;