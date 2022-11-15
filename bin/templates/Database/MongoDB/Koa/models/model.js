'use strict';
//TODO HAS NOT BEEN TESTED YET

const client = require('./index');

exports.getAll = () => {client.find({}).toArray()}

exports.postOne = () => {client.insertOne({/*SCHEMA*/})}
