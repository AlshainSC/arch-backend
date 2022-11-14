'use strict';

const model = require('../models/model.js');

exports.getAll = async ctx => {
  try {
    ctx.body = await model.find();
  } catch (e) {
    ctx.status = 500;
    // Further handle your error on the back-end
  }
};

exports.post = async ctx => {
  try {
    await model.create(ctx.request.body);
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    // Further handle your error on the back-end
  }
};
