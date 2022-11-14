'use strict';

const mongoose = require('./index');

const Schema = mongoose.Schema;

const modelSchema = new Schema({
  authorId: Boolean,
  content: String,
  timestamp: {
    type: Number,
    default: Date.now
  }
});

const model = mongoose.model('model', modelSchema);


module.exports = model;
