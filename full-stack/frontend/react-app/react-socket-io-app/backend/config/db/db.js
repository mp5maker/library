const sqlite3 = require('sqlite3').verbose();
const nameOfTheDatabase = `sample.db`

class Db {
    constructor() {
        this.db = new sqlite3.Database(`./${nameOfTheDatabase}`, (error) => {
            if (error) console.error(error.message)
        })
        console.log('Connected to the in-memory SQlite database')
        return this.db
    }

    close() {
        this.db.close((error) => {
            if (error) return console.error(error.message)
            console.log('Closed the database connection')
        })
    }
}

modules.exports = {
    Db
}