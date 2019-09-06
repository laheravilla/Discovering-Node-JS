'use strict'

var Project = require('../models/project');

// One way to write a controller
var controller = {
    home: function (request, response) 
    {
        return response.status(200).send({
            message: 'Your at Home!'
        });
    },

    test: function (request, response)
    {
        return response.status(200).send({
            message: 'Test method fo the controller'
        });
    },

    saveProject: function(request, response)
    {
       var project = new Project();

       var params = request.body;
       project.name = params.name;
       project.description = params.description;
       project.category = params.category;
       project.year = params.year;
       project.technologies = params.technologies;
       project.image = null;

       project.save((error, projectStored) => {
            if (error) return response.status(500).send({message: 'Error trying to save'});

            if (!projectStored) return response.status(404).send({message: 'Could not save the project! :-( '});

            // If there are not error save in database
            return response.status(200).send({project: projectStored});
       });
    }
};

module.exports = controller;