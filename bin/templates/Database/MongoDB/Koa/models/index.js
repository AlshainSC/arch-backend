'use strict';
//TODO HAS NOT BEEN TESTED YET
const { MongoClient } = require('mongodb');

const client = new MongoClient();

async function connect () {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.log(err);
  }
};

connect();

module.exports = client;