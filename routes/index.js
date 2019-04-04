const express = require('express');
const router = express.Router();

const Transaction = require('../database/tables/transaction');

router.get('/', async function (req, res, next) {
    const transaction = new Transaction();
    const wendys = await transaction.getAllByDescription('WENDYS #6076 PROVO UT');
    const all = await transaction.getAll();
    const grouped = await transaction.getGroupedDescription();
    const totalMoneySpent = await transaction.getTotalMoneySpent();
    // await transaction.formatDates();
    const lastMonth = await transaction.getByMonth(3);
    let data = [];

    for (let row of lastMonth) {
        data.push({
            name: row.Description,
            y: row['Sum(Debit)'],
            sliced: true,
        })
    }

    res.render('index', {title: 'Express', information: JSON.stringify(data)});
});

module.exports = router;
