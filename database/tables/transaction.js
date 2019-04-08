const Database = require('../database');

class Transaction {
    constructor() {
        this.tableName = 'Transaction';
        this.date = 'Date';
        this.description = 'Description';
        this.debit = 'Debit';
        this.credit = 'Credit';
        this.category = 'Category';
        this.debitSum = `Sum(${this.debit})`;

        this.oldDate = 'oldDate';
        this.oldDescription = 'oldDescription';
        this.oldDebit = 'oldDebit';
        this.oldCategory = 'oldCategory';
    }

    async insert(date, description, debit) {
        let database = new Database();
        const query = `INSERT INTO ${this.tableName} (${this.date}, ${this.description}, ${this.debit}) VALUES (?, ?, ?)`;
        const options = [date, description.replace(/\./g, '').replace(/\*/g,''), debit.replace(/-/g,'')];
        console.log(query, options);
        let results = await database.query(query, options)
            .then(() => {
                database.close();
            })
            .catch(err => {
                console.log(err);
            });
        return results;
    }

    async update(date, description, debit, category, oldDate, oldDescription, oldDebit, oldCategory) {
        let database = new Database();
        let options = [];
        let query = `UPDATE ${this.tableName} SET `;
        if (date && date !== '') {
            query += `${this.date}=?, `;
            options.push(date);
        }
        if (description && description !== '') {
            query += `${this.description}=?, `;
            options.push(description);
        }
        if (debit && debit !== '') {
            query += `${this.debit}=?, `;
            options.push(debit);
        }
        if (category && category !== '') {
            query += `${this.category}=?, `;
            options.push(category);
        }
        query = query.substr(0, query.length - 2);
        query += ' WHERE ';
        if (oldDate && oldDate !== '') {
            query += `${this.date}=? AND `;
            options.push(oldDate);
        }
        if (oldDescription && oldDescription !== '') {
            query += `${this.description}=? AND `;
            options.push(oldDescription);
        }
        if (oldDebit && oldDebit !== '') {
            query += `${this.debit}=? AND `;
            options.push(oldDebit);
        }
        if (oldCategory && oldCategory !== '') {
            query += `${this.category}=? AND `;
            options.push(oldCategory);
        }
        query = query.substr(0, query.length - 5);
        query += `;`;
        console.log(query, options);
        let results =  await database.query(query, options)
            .then(() => {
                database.close();
            })
            .catch(err => {
                console.log(err);
            });
        return results;
    }

    async getAll() {
        let database = new Database();
        const query = `SELECT * FROM ${this.tableName};`;
        let results = await database.query(query);
        database.close();
        return results;
    }

    async getAllByDescription(descriptionSearch) {
        let database = new Database();
        const query = `SELECT * FROM ${this.tableName} WHERE ${this.description} = '${descriptionSearch}';`;
        console.log(query);
        let results = await database.query(query);
        database.close();
        return results;
    }

    async getGroupedDescription() {
        let database = new Database();
        const query = `SELECT ${this.description}, ${this.debitSum} FROM ${this.tableName} GROUP BY ${this.description} ORDER BY ${this.debitSum} DESC;`;
        let results = await database.query(query);
        database.close();
        return results;
    }

    async getNoCategoryTransactions() {
        let database = new Database();
        const query = `SELECT ${this.description}, ${this.debitSum} FROM ${this.tableName} WHERE ${this.category} IS NULL GROUP BY ${this.description} ORDER BY ${this.debitSum} DESC;`;
        let results = await database.query(query);
        database.close();
        return results;
    }

    async getTotalMoneySpent() {
        let database = new Database();
        const query = `SELECT ${this.debitSum} FROM ${this.tableName};`;
        let results = await database.query(query);
        database.close();
        return results[0]['Sum(Debit)'];
    }

    async formatDates() {
        let database = new Database();
        const query = `SELECT ${this.date} FROM ${this.tableName} WHERE ${this.date} LIKE '__/__/____';`;
        let results = await database.query(query);

        for (let row of results) {
            let date = new Date(row[this.date]);
            let month = date.getMonth() + 1;
            let day = date.getDate();
            if (month.toString().length === 1)
                month = "0" + month;
            if (day.toString().length === 1)
                day = "0" + day;
            let formattedDate = `${date.getFullYear()}-${month}-${day}`;
            console.log(`UPDATE ${this.tableName} SET ${this.date} = '${formattedDate}' WHERE ${this.date} = '${row[this.date]}';`);
            await database.query(`UPDATE ${this.tableName} SET ${this.date} = '${formattedDate}' WHERE ${this.date} = '${row[this.date]}';`);
        }

        database.close();
        return results;
    }

    formatDate(oldDate){
        let date = new Date(oldDate);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month.toString().length === 1)
            month = "0" + month;
        if (day.toString().length === 1)
            day = "0" + day;
        return `${date.getFullYear()}-${month}-${day}`;
    }

    async getByMonth(backTrack = 0) {
        let database = new Database();
        let date = new Date();
        // date.setMonth(date.getMonth() - 1);
        let maxMonth = date.getMonth();
        if (maxMonth.toString().length === 1)
            maxMonth = "0" + maxMonth;
        date.setDate(0);
        let max = `${date.getFullYear()}-${maxMonth}-${date.getDate()}`;
        date.setMonth(date.getMonth() - backTrack + 1);
        date.setDate(0);
        let month = date.getMonth() + 1;
        if (month.toString().length === 1)
            month = "0" + month;
        let min = `${date.getFullYear()}-${month}-01`;

        const query = `SELECT ${this.description}, ${this.debitSum} FROM ${this.tableName} WHERE ${this.date} <= '${max}' AND ${this.date} >= '${min}' GROUP BY ${this.description} ORDER BY ${this.debitSum} DESC;`;
        console.log(query);
        let results = await database.query(query);
        database.close();
        return results;
    }

    async getMonth(backTrack = 0) {
        console.log(backTrack);
        let database = new Database();
        let date = new Date();
        let max = '';
        date.setMonth(date.getMonth() - backTrack + 1);
        let maxMonth = date.getMonth();
        if (maxMonth.toString().length === 1)
            maxMonth = '0' + maxMonth;
        if (maxMonth === '00') {
            maxMonth = '12';
            max = `${date.getFullYear() - 1}-${maxMonth}-31`;
        }
        else
            max = `${date.getFullYear()}-${maxMonth}-31`;
        date.setMonth(date.getMonth() - 1);
        let month = date.getMonth() + 1;
        if (month.toString().length === 1)
            month = '0' + month;
        let min = `${date.getFullYear()}-${month}-01`;

        console.log(`From ${min} to ${max}`);

        const query = `SELECT ${this.description}, ${this.debitSum} FROM ${this.tableName} WHERE ${this.date} <= '${max}' AND ${this.date} >= '${min}' GROUP BY ${this.description} ORDER BY ${this.debitSum} DESC;`;
        console.log(query);
        let results = await database.query(query);
        database.close();
        return results;
    }
}

module.exports = Transaction;