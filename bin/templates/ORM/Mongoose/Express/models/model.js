const mongoose = require('./index');
const Schema = mongoose.Schema;
const model = mongoose.model( /*NAME OF MODEL ,
  Schema({
    -->CREATE YOUR SCHEMA
    -->EX:
    id: String,
    name: String,
    date: Date,
    score: Number,
    auth: Boolean
  })*/
);
module.exports = model;
