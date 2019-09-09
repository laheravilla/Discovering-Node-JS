'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio', { useNewUrlParser: true })
.then(() => {
    console.log('Connected to database!');

    // Create SERVER
    app.listen(port, () => {
        console.log('Server running on localhost:3700');
    });
})
.catch(error => console.log(error));
