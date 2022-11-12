'use strict';

const Router = require('koa-router');
const router = new Router();
const controller = require('./controllers/index');

router.get(/*ENDPOINT*/, controller.getAll);
router.post(/*ENDPOINT*/, controller.postOne);

module.exports = router;
