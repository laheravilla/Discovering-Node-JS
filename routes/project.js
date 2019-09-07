'use strict'

var express = require('express');
var ProjectController = require('../controllers/project'); // Import 

var router = express.Router();
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject); // (?) Optional parameter. Inh that case, use a condition in method
router.get('/all-projects/', ProjectController.getAllProjects);
router.put('/project/:id', ProjectController.updateProject);

module.exports = router;