'use strict';
//dependencies
const Router = require('express');
const controller = require('../../ORM/Mongoose/controllers');
//setup
const router = new Router();
//endpoints
router.get(/*ENDPOINTS*/ , controller.getAll);
router.post(/*ENDPOINTS*/ , controller.postTo);
module.exports = router;