'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Definir esquema del modelo

var ProjectSchema = Schema({
    name: String,
    lastname: String,
    description: String,
    category: String,
    year: Number,
    technologies: String,
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema); // Mongoose export project name in plural and lowercase (projects)