'use strict';

const client = require('./index');

exports.getAll = () => {client.find({}).toArray()}

exports.postOne = () => {client.insertOne({/*SCHEMA*/})}
