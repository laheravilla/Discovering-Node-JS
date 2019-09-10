'use strict'

var Project = require('../models/project');
var fs = require('fs'); // Libreria filesystem. Posibilita borrar un archivo

// One way to write a controller
var controller = {
    /**
     * Displays welcome to home
     * @param {*} request 
     * @param {*} response 
     */
    home: function (request, response) 
    {
        return response.status(200).send({
            message: 'Your at Home!'
        });
    },

    /**
     * This is a testing method
     * @param {*} request 
     * @param {*} response 
     */
    test: function (request, response)
    {
        return response.status(200).send({
            message: 'Test method fo the controller'
        });
    },

    /**
     * Save project in database
     * @param {*} request 
     * @param {*} response 
     */
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
    },

    /**
     * Get and list one project by ID
     * @param {*} request 
     * @param {*} response 
     */
    getProject: function(request, response)
    {
        var projectId = request.params.id;

        if (projectId === null) return response.status(404).send({message: 'Project do not exist'});

        Project.findById(projectId, (error, project) => {
            if (error) return response.status(500).send({message: 'Error trying to get data'});
            if (!project) return response.status(404).send({message: 'Project do not exist'});

            return response.status(200).send({project});
        });
    },

    /**
     * Return an array of projects
     * @param {*} request 
     * @param {*} response 
     */
    getAllProjects: function(request, response)
    {
        Project.find({}).exec((error, projects) => { 
            // FIND({year:2019}) would return data with this condition
            // FIND({}).SORT('year') order ASC by year
            // FIND({}).SORT('-year') order DESC by year

            if (error) return response.status(500).send({message: 'Error trying to retrieve data'});

            if (!projects) return response.status(404).send({message: 'Any project to list'});

            return response.status(200).send({projects}); // Return an array
        });
    },

    /**
     * Updates one document by ID
     * @param {*} request 
     * @param {*} response 
     */
    updateProject: function(request, response)
    {
        var projectId = request.params.id;
        var update = request.body;

        Project.findByIdAndUpdate(projectId, update, {new:true}, (error, projectUpdated) => {
            if (error) return response.status(505).send({message: 'Error trying to update'});

            if (!projectUpdated) return response.status(404).send({message: 'Project does not exist'});

            return response.status(200).send({project: projectUpdated});
        });
    },

    /**
     * Deletes one document from db by ID
     * @param {*} request 
     * @param {*} response 
     */
    removeProject: function(request, response)
    {
        var projectId = request.params.id;

        Project.findByIdAndDelete(projectId, (error, projectDeleted) => {
            if (error) return response.status(500).send({message: 'Could not delete the project'});

            if (!projectDeleted) return response.status(404).send({message: 'Impossible to delete the project'});

            return response.status(200).send({project: projectDeleted});
        });
    },

    /**
     * Uploads and POSTs one image 
     * @param {*} request 
     * @param {*} response 
     */
    uploadImageFile: function(request, response)
    {
        var projectId = request.params.id;
        var fileName = 'Image not uploaded...'

        if (request.files) {
            var filePath = request.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extensionSplit = fileName.split('\.'); // Cortar por la extension
            var fileExtension = extensionSplit[1];

            if (fileExtension === 'png' ||
                fileExtension === 'jpg' ||
                fileExtension === 'jpeg' ||
                fileExtension === 'gif') {
                Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (error, projectUpdated) => {
                if (error) return response.status(500).send({message: 'Image not uploaded'});

                if (!projectUpdated) return response.status(404).send({message: 'Project does not exist'});

                return response.status(200).send({project: projectUpdated});
                });
            } else {
                fs.unlink(filePath, (error) => {
                    return response.status(200).send({message: 'Estension not valid'});
                });
            }
        } else {
            return response.status(200).send({message: fileName});
        }
    }
};

module.exports = controller;