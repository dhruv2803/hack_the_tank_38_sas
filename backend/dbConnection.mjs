import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3300,
    database: 'fattoslimdb',
    multipleStatements: true
});

export default connection;