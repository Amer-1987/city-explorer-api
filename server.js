'use strict';
const express = require('express'); // import express
const weatherData = require('./data/weather.json');

const cors = require ('cors');
require('dotenv').config(); //to import dotenv

const server = express();
server.use(cors());

const PORT = 3010;

/* 
we can request 3 ways : 
1 : browser
2 : from Extentsions vs : Thunder Client
3 : Postman
*/

// http://localhost:3010/
server.get('/', (req,res) =>{
    res.send('Hello, welcome at Home page');
});


// http://localhost:3010/test
server.get('/test',(req,res) =>{
res.send('Send 2');
});


// http://localhost:3010/cityDescription
server.get('/cityDescription',(req,res) =>{
    let description  = weatherData[0].data.map( item=> {
        console.log(item.weather.description);
        return [ item.datetime , item.weather.description];
    });
    res.send(description);
    });


    // http://localhost:3010/cityDetails
server.get('/cityDetails',(req,res) =>{
    const description = req.query.description;
    const result = weatherData[0].data.find(item =>{
        if(item.description === description)
            return item;
    });
    res.send(result);
    });
    

 // uneversal : http://localhost:3010/******* */  **Always End**
server.get('*',(req,res) =>{
    res.status(404).send('Sory , Page Not found');
    });


server.listen(PORT, () =>{
    console.log(`im listening on ${PORT}`);
});