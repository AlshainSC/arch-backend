'use strict'
const collection = require('../models/index');

//TODO HAS NOT BEEN TESTED YET
//TODO ADD PUT/DELETE

//RETRIEVE ALL DATA FROM SPECIFIED COLLECTION
exports.getAll = async () => {
  try {
    const data = await collection.find().toArray();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

//POST A SINGLE DOCUMENT TO SPECIFIED COLLECTION
exports.postDocument = async (data) => {
  try {
    const dataToPost = await collection.insertOne({
      content : data.content,
      authorId : data.authorId,
      timestamp : data.timestamp
    });
    return dataToPost;
  } catch (error) {
    console.log('post error: ', error);
    throw new Error(error);
  }
};