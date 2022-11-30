const express = require('express');
const accountRouter = express.Router();
const accountService = require('../services/account.service');

accountRouter.post('/', async (req, res) =>{
    const newAccount = await accountService.createAccount(req.body);
    return res.status(201).json(newAccount);
});

accountRouter.get('/', async (req, res) => {
    const accounts = await accountService.getAccounts();
    return res.status(200).json(accounts);
});

module.exports = accountRouter;