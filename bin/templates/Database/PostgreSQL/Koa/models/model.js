'use strict';
const pool = require('./index');


exports.getAll = (req, res) => {
  const sql = 'YOUR SQL GOES HERE'
  pool.query(sql, (error, results) => {
    if (error) {
      throw new Error(error);
    }
    res.status(200).json(results.rows);
  });
  return res.rows;
};

exports.set = (req, res) => {
  
  const sql = 'YOUR SQL (req.body) GOES HERE';
  pool.query(sql, (error, results) => {
    if (error) {
      throw new Error(error);
    }
    res.status(200).send('DATA ADDED')
  })
};
