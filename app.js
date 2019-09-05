'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Load route files

// Middlewares
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json()); // Convert POST files in json

// CORS


// Routes
app.get('/', (request, response) => {
    response.status(200).send(
        '<h1>HomePage</h1>'
    );
});

app.get('/test', (request, response) => {
    response.status(200).send({
        message: 'Hello World from my first API Node JS'
    });
});

// Export
module.exports = app;