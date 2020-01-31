const express = require('express');
const app = express();
//const apiRouter = require('./routes');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const ObjectId = require("mongodb").ObjectID;
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.set('port', 3000)
//connect to db
const MongoClient = require('mongodb').MongoClient;
let db;
 MongoClient.connect('mongodb://localhost:27017/', (err, client) => { 
   db = client.db('cw2') 
  })

// get all data from a collection
app.param('collectionName', (req, res, next, collectionName) => {
req.collection = db.collection(collectionName)
    return next()
})
//show suggestion message if no collection name is entered
app.get('/', (req, res, next) => { res.send('Select a collection, eg. User') })

app.get('/:collectionName', (req, res, next) => {
    req.collection.find({}).toArray((e, results) => 
    { if (e) return next(e)  
           res.send(results)
           })
})

//create new user
app.param('collectionName', (req, res, next, collectionName) => {
  req.collection = db.collection(collectionName)
      return next()
  })
app.post('/:collectionName/:id', (req, res, next) => {
req.collection.insert(req.body, (e, results) => {
  if(e) return next(e)
  res.send(results.ops)
})
})

app.listen(3000, () => {
  console.log('express running on port 3000')
})