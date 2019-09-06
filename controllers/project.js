'use strict'

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
    }
};

module.exports = controller;