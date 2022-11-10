'use strict';
const /*MODEL NAME*/ = require('../models/model');

//EXAMPLE BAREBONES CONTROLLER TO GET EVERYTHING FROM A DATABASE
exports.getAll = async (req, res) => {
  const /*DATA TO RETRIEVE*/ = await /*MODEL NAME*/.find();
  try {
    res.send(/*DATA TO RETRIEVE*/);
    res.status(201);
    console.log('DataBase: successfully retrieved data');
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};

//EXAMPLE BAREBONES CONTROLLER TO POST DATA TO A DATABASE
exports.postTo = async (req, res) => {
  const /*DATA TO BE POSTED*/ = new /*MODEL NAME*/(req.body);
  try {
    await /*DATA TO BE POSTED*/.save();
    console.log('worked');
    res.status(201);
    res.send(JSON.stringify(/*DATA TO BE POSTED*/));
    console.log('DataBase: successfuly posted data');
  } catch (error) {
    res.status(400);
    console.log(error);
    throw new Error(error);
  }
};
