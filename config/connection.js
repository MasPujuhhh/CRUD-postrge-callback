const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'bookstore',
    password: '1234',
    port: 5432,
})

module.exports = client