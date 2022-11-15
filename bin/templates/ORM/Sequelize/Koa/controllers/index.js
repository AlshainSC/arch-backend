'use strict';

//TODO HAS NOT BEEN TESTED YET
//TODO IMPLEMENT DELETE/PUT

const db = require('../models');

exports.getAll = async ctx => {
  try {
    ctx.body = await db.Model.findAll();
  } catch (e) {
    ctx.status = 500;
    // Further handle your error on the back-end
  }
};

exports.post = async ctx => {
  const request = ctx.request.body;
  try {
    await db.Model.create({
      id: request.id,
      content: request.content
    });
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    // Further handle your error on the back-end
  }
};
