'use strict';
//dependencies
const Router = require('express');
const controller = require('./controllers/index');
//setup
const router = new Router();
//endpoints
router.get('/ENDPOINT' , controller.getAll);
router.post('/ENDPOINT' , controller.postDocument);
router.delete('/ENDPOINT/:_id', controller.deleteDocument);
router.put('/ENDPOINT/:_id', controller.updateDocument);
module.exports = router;