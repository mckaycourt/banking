const express = require('express');
const router = express.Router();

const Transaction = require('../database/tables/transaction');

router.get('/', async function (req, res, next) {
    const transaction = new Transaction();
    const wendys = await transaction.getAllByDescription('WENDYS #6076 PROVO UT');
    const all = await transaction.getAll();
    console.log(all);

    res.render('index', {title: 'Express'});

});

module.exports = router;
