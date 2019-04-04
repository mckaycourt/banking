const Database = require('../database');

class Transaction {
    constructor() {
        this.tableName = 'Transaction';
        this.date = 'Date';
        this.description = 'Description';
        this.debit = 'Debit';
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
        const query = `SELECT ${this.description}, Sum(${this.debit}) FROM ${this.tableName} GROUP BY ${this.description} ORDER BY Sum(${this.debit}) DESC;`;
        let results = await database.query(query);
        database.close();
        return results;
    }

    async getTotalMoneySpent() {
        let database = new Database();
        const query = `SELECT Sum(${this.debit}) FROM ${this.tableName};`;
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

    async getByMonth(backTrack = 0) {
        let database = new Database();
        let date = new Date();
        // date.setMonth(date.getMonth() - 1);
        let maxMonth = date.getMonth();
        if(maxMonth.toString().length === 1)
            maxMonth = "0" + maxMonth;
        date.setDate(0);
        let max = `${date.getFullYear()}-${maxMonth}-${date.getDate()}`;
        date.setMonth(date.getMonth() - backTrack+1);
        date.setDate(0);
        let month = date.getMonth() + 1;
        if (month.toString().length === 1)
            month = "0" + month;
        let min = `${date.getFullYear()}-${month}-01`;

        const query = `SELECT ${this.description}, Sum(${this.debit}) FROM ${this.tableName} WHERE ${this.date} <= '${max}' AND ${this.date} >= '${min}' GROUP BY ${this.description} ORDER BY Sum(${this.debit}) DESC;`;
        console.log(query);
        let results = await database.query(query);
        database.close();
        return results;
    }
}

module.exports = Transaction;