const express = require('express');
const transactionsService = require('../services/transaction.service')

const getAllTransactions = async (_req, res) => {
    const accounts = await transactionsService.getAllTransactions();
    return res.status(200).json(accounts);
};

const cashTranference = async (req, res) => {
    const { transmitter, badge, value } = req.body
    const newAccount = await transactionsService.cashTranference(transmitter, badge, value);
    return res.status(201).json(newAccount);
};

module.exports = {
    getAllTransactions,
    cashTranference
};