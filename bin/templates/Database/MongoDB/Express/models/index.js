'use strict'
const { MongoClient } = require('mongodb');

//TODO HAS NOT BEEN TESTED YET

const uri = /*'CONNECTION STRING TO YOUR DATABASE GOES HERE'*/
const client = new MongoClient(uri);
const database = client.db(/*DATABASE NAME*/);
const collection = database.collection(/*COLLECTION NAME*/);



module.exports = collection;
