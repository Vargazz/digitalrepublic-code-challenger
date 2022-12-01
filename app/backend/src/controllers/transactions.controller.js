const express = require('express');
const transactionsService = require('../services/transaction.service')

const getAllTransactions = async (_req, res) => {
    const accounts = await transactionsService.getAllTransactions();
    return res.status(200).json(accounts);
};

module.exports = {
    getAllTransactions
}