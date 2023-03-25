import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from 'mysql2';

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3300,
    database: 'fattoslimdb',
    multipleStatements: true
});

connection.connect((err)=> {
    if(!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});

connection.end();

app.listen(port, ()=>{console.log(`app is listening on ${port}` )});