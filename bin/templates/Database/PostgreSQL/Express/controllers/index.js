'use strict'
const { pool } = require('../models/index');

//RETRIEVE ALL DATA FROM SPECIFIED pool
exports.getAll = async () => {
  try {
    const data = await pool.find().toArray();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

//POST
exports.post = async (data) => {
  try {
    const dataToPost = await pool.insertOne(data);
    return dataToPost;
  } catch (error) {
    console.log('post error: ', error);
    throw new Error(error);
  }
};
