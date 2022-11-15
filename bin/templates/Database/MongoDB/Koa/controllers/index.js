'use strict';
//TODO HAS NOT BEEN TESTED YET
//TODO IMPLEMENT DELETE/PUT

const models = require('../models/model');

//GET ALL CONTENT FROM DATABASE
exports.getAll = ctx => {
  try {
    ctx.body = models.getAll();
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
    throw new Error(error);
  }
};

//POST DATA TO DATABASE
exports.post = ctx => {
  try {
    models.postOne(ctx.request.body);
    ctx.status = 201;
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
    throw new Error(error);
  }
};

