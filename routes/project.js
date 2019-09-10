'use strict'

var express = require('express');
var ProjectController = require('../controllers/project'); // Import 
var router = express.Router();
var multipart = require('connect-multiparty'); // Allows image upload
var multipartMiddleware = multipart({ uploadDir: './uploads' }); // Uploading directory on root project

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject); // (?) Optional parameter. Inh that case, use a condition in method
router.get('/all-projects/', ProjectController.getAllProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.removeProject);
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImageFile); // Add multipartMiddleware to ensure image uoload first

module.exports = router;