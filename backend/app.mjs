import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connection from "./dbConnection.mjs";
import Client from "./model/client.mjs";
import Franchise from "./model/franchise.mjs";
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;

connection.connect((err)=> {
    if(!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});

app.get('/getAllClients', async (req, res) => {
    try {
        const resultElements = await Client.getAllClients();
        res.status(200).json({elements: resultElements}); // send a json response
    } catch(e) {
        console.log(e); // console log the error so we can see it in the console
        res.sendStatus(500);
    }
})

app.post('/addClient', async(req, res) =>{
    try {
        const resultElements = await Client.addClient(req.body);
        res.status(200).json({elements: resultElements}); // send a json response
    } catch(e) {
        console.log(e); // console log the error so we can see it in the console
        res.sendStatus(500);
    }
})

app.get('/getAllFranchises', async (req, res) => {
    try {
        const resultElements = await Franchise.getAllFranchises();
        res.status(200).json({elements: resultElements}); // send a json response
    } catch(e) {
        console.log(e); // console log the error so we can see it in the console
        res.sendStatus(500);
    }
})

app.post('/addFranchise', async(req, res) =>{
    try {
        const resultElements = await Franchise.addFranchise(req.body);
        res.status(200).json({elements: resultElements}); // send a json response
    } catch(e) {
        console.log(e); // console log the error so we can see it in the console
        res.sendStatus(500);
    }
})
// connection.end();

app.listen(port, ()=>{console.log(`app is listening on ${port}` )});