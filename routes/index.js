const express = require('express');
const router = express.Router();

const Transaction = require('../database/tables/transaction');

router.get('/', async function (req, res, next) {
    res.redirect('/pastMonth');
});

router.get('/pastMonth', async function (req, res, next) {
    const transaction = new Transaction();
    const lastMonth = await transaction.getMonth(1);
    let data = [];
    for (let row of lastMonth) {
        data.push({
            name: row.Description,
            y: row[transaction.debitSum],
            sliced: true,
        })
    }
    res.render('index', {title: 'Express', information: JSON.stringify([data]), charts: [true]});
});

router.get('/pastThreeMonths', async function (req, res, next) {
    const transaction = new Transaction();
    let bigData = [];
    for(let i = 0; i < 3; i++){
        const lastMonth = await transaction.getMonth(i);
        let data = [];
        for (let row of lastMonth) {
            data.push({
                name: row.Description,
                y: row[transaction.debitSum],
                sliced: true,
            })
        }
        bigData.push(data);
    }
    res.render('index', {title: 'Express', information: JSON.stringify(bigData), charts: bigData});
});

router.get('/allTransactions', async function (req, res, next) {
    const transaction = new Transaction();
    const all = await transaction.getAll();
    res.render('transactions', {title: 'All Transactions', data: JSON.stringify(all)})
});

router.get('/transactionsByGroup', async function (req, res, next) {
    const transaction = new Transaction();
    const grouped = await transaction.getGroupedDescription();

});

router.get('/getAllOfDescription', async function (req, res, next) {
    const transaction = new Transaction();
    const wendys = await transaction.getAllByDescription('WENDYS #6076 PROVO UT');

});


module.exports = router;
