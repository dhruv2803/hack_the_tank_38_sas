const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3300,
    database: 'fattoslimdb',
    multipleStatements: true
});