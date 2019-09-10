'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Load route files
var projectRoutes = require('./routes/project');

// Middlewares
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json()); // Convert POST files in json

// CORS
// Setting headers & cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Routes
app.use('/api', projectRoutes); // Todas las rutas comenzaran por /api

// Estas rutas formaran parte de los controladorer en la MVC
/*
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

app.post('/test/:id', (request, response) => {
    console.log(request.body.name); // Enter in Postman body name and value Output: Yurniel
    console.log(request.query.web); // Enter http://localhost:3700/test?web=google.es Output: google.es
    console.log(request.params.id); // Enter http://localhost:3700/test/199?web=google.es Output: 199
    response.status(200).send({
        message: 'Hello World from my first API Node JS'
    });
});
*/

// Export
module.exports = app;