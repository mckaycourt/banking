const Database = require('../database');

class Transaction {
    constructor() {
        this.tableName = 'Transaction';
        this.date = 'Date';
        this.description = 'Description';
        this.amount = 'Amount';
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
}

module.exports = Transaction;