let mysql = require('mysql');

class Database {
    constructor() {
        this.databaseName = 'banking';
        this.userName = 'mmcourt';
        this.password = 'Mlhlt2200!';
        this.host = '127.0.0.1';

        let config = {
            host: this.host,
            user: this.userName,
            password: this.password,
            database: this.databaseName,
        };
        this.connection = mysql.createConnection(config);
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}

module.exports = Database;