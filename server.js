//cars server
const express = require('express'); //import express
const server = express(); //use express as server
const CarsRouter = require('./carsRouter');

server.use(express.json());

//import cars router eventually and use

server.use('/cars', CarsRouter);

server.get('/', (req, res) => { //base route
    res.send('initial server start')
})

module.exports = server;
