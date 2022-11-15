'use strict';

//TODO HAS NOT BEEN TESTED YET

const mongoose = require('./index');

const Schema = mongoose.Schema;

const modelSchema = new Schema({
  id: Boolean,
  content: String,
  timestamp: {
    type: Number,
    default: Date.now
  }
});

const model = mongoose.model('model', modelSchema);


module.exports = model;
