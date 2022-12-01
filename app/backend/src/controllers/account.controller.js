const express = require('express');
const accountService = require('../services/account.service');

const createAccount = async (req, res) =>{
    const newAccount = await accountService.createAccount(req.body);
    return res.status(201).json(newAccount);
};

const getAllAccount = async (req, res) => {
    const accounts = await accountService.getAccounts();
    return res.status(200).json(accounts);
};

const getByIds = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await accountService.getById(id);
    if (type) return res.status(type).json({ message });
    return res.status(200).json(message);
};


module.exports = {
    createAccount,
    getAllAccount,
    getByIds,
};