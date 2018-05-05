const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const db          = require('../db/db.js')

const app         = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extend: true }));
app.use(express.json());

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  require('./api_routes')(app, database);
  app.listen(port, () => {
    console.log("We are live on " + port);
  })
})
