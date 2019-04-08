const express = require('express');
const router = express.Router();

const Transaction = require('../database/tables/transaction');

router.get('/', async function (req, res, next) {
    res.redirect('/pastMonth');
});

router.get('/pastMonth', async function (req, res, next) {
    const transaction = new Transaction();
    const lastMonth = await transaction.getMonth(1);
    const options = ['Food','Rent','Utilities','Gas','Entertainment','Personal','Education'];
    const colors = ['red', 'blue', 'green', 'brown', 'yellow', 'teal', 'black'];
    //TODO: options.indexOf(whatever you're looking for) to get the number then to be correlated to a color.
    let data = [];
    for (let row of lastMonth) {
        data.push({
            name: row[transaction.description],
            y: row[transaction.debitSum],
            sliced: true,
            color: colors[options.indexOf(row[transaction.category])]
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

router.get('/sortTransactions', async function (req, res, next) {
    const transaction = new Transaction();
    const grouped = await transaction.getNoCategoryTransactions();
    res.render('sort', {title: 'Sort Transactions', grouped})
});

router.get('/getAllOfDescription', async function (req, res, next) {
    const transaction = new Transaction();
    const wendys = await transaction.getAllByDescription('WENDYS #6076 PROVO UT');

});

router.get('/updateTransaction', async function (req, res, next) {
    const transaction = new Transaction();
    let date = req.query[transaction.date];
    let description = req.query[transaction.description];
    let debit = req.query[transaction.debit];
    let category = req.query[transaction.category];

    let oldDate = req.query[transaction.oldDate];
    let oldDescription = req.query[transaction.oldDescription];
    let oldDebit = req.query[transaction.oldDebit];
    let oldCategory = req.query[transaction.oldCategory];

    let done = await transaction.update(date, description, debit, category, oldDate, oldDescription, oldDebit, oldCategory);
    res.send(done);
});

router.get('/upload', function(req,res,next){
    res.render('upload');
});

router.post('/upload', async function(req,res,next){
    const transaction = new Transaction();
    console.log(req.body.json);
    let json = JSON.parse(req.body.json);
    for(let row of json){
        if(row[transaction.date] && row[transaction.description] && row[transaction.debit]){
            await transaction.insert(transaction.formatDate(row[transaction.date]), row[transaction.description], row[transaction.debit]);
        }
    }
    res.redirect('/sortTransactions');
});


module.exports = router;
