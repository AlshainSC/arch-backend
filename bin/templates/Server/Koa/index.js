'use strict';

//instantiate Koa
const Koa = require('koa');
const app = new Koa();

//middlewares
const serve = require('koa-static'); //delte if not serving static files
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const cors = require('@koa/cors');

//port & host using .env
const PORT = process.env.PORT || 5000; 
const HOST = process.env.HOST || 'localhost';


app.use(serve(conf.clientPath)); //delete if not using static files

//cors policies
app.use(cors());

//parse
app.use(bodyParser());

//connect router
app.use(router.routes());


try {
  app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`)
  });
} catch (error) {
  throw new Error(error);
}
