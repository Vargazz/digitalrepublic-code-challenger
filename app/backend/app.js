const express = require('express');
const cors = require('cors');

const app = express();
const AccountRouter = require('./src/routes/account.router'); 

app.use(express.json());
app.use(cors());

app.use(AccountRouter);

module.exports = app;