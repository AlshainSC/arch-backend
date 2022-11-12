'use strict';
//dependencies
const Router = require('express');
const controller = require('./controllers/index');
//setup
const router = new Router();
//endpoints
router.get(/*ENDPOINTS*/ , controller.getAll);
router.post(/*ENDPOINTS*/ , controller.postDocument);
module.exports = router;