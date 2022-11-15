'use strict';
const model = require('../models/model');

//EXAMPLE BAREBONES CONTROLLER TO GET EVERYTHING FROM A DATABASE
exports.getAll = async (req, res) => {
  const Model = await model.find();
  try {
    res.send(Model);
    res.status(201);
    console.log('DataBase: successfully retrieved data');
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};

//EXAMPLE BAREBONES CONTROLLER TO POST DATA TO A DATABASE
exports.postDocument = async (req, res) => {
  const Model = new model({
    name: req.body.name,
    author: req.body.author,
    content: req.body.content
  });
  try {
    await Model.save();
    console.log('worked');
    res.status(201);
    res.send(JSON.stringify(Model));
    console.log('DataBase: successfuly posted data');
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};

exports.deleteDocument = async (req, res) => {
  const id = req.params._id;
  try {
    await model.findByIdAndDelete(id)
    res.status(204)
    res.send(`Document has been deleted`)
    console.log('Successfully deleted Document')
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
}

exports.updateDocument = async (req, res) => {
  const id = req.params._id;
  try {
    const update = await model.updateOne({_id: id}, {
      $set: {
        name: req.body.name,
        author: req.body.author,
        content: req.body.content
      }
    });
    res.status(200)
    res.send(JSON.stringify(update));
  } catch (error) {
    res.status(400);
    throw new Error(error)
  }
}
