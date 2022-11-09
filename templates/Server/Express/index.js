//server dependencies
const express = require('express');
const cors = require('cors');
// const path = require('path');
//here's how to dotenv
require('dotenv').config();
//setup
const app = express();
const router = require('./router');
//port & host using .env
const PORT = process.env.PORT || 5000; 
const HOST = process.env.HOST || 'localhost'; 
//cors
app.use(cors());
//parse, since everything's an object
app.use(express.json());
//hook up the router
app.use(router);
//run that server
try {
  app.listen(PORT, () => {
    console.log(`listening on http://${HOST}:${PORT}`);
  });
} catch (error) {
  throw new Error(error);
}
