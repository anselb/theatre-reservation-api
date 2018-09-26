// server.js - Theater Reservation API

var express = require('express');
var app = express();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'theaterReservations';
let db;

// Create a new theater
app.post('/theaters/new', function(req, res) {
  var theaters = db.collection("theaters");

  theaters.insertOne({
    "_id" : 1,
    "name" : "The Royal",
    "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
    "seatsAvailable" : 80
  });
});

// Get a theater
app.get('/theaters/:theaterId', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

// Get a session for a theater
app.get('/theaters/:theaterId/sessions/:sessionId', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

// Create a new session
app.post('/theaters/:theaterId/sessions/new', function(req, res) {
  var theaterId = 1;

  var theaters = db.collection("theaters");
  var sessions = db.collection("sessions");

  //FIXME: Set up theater promise leading to sessions insertion
  var theater = theaters.findOne({"_id": theaterId});
  sessions.insertOne({
      "name" : "Action Movie 5",
      "description" : "Another action movie",
      "start" : new Date("2015-03-11T15:00:00.000Z"),
      "end" : new Date("2015-03-11T16:00:00.000Z"),
      "price" : 10,
      "seatsAvailable" : theater.seatsAvailable,
      "seats" : theater.seats,
      "reservations" : []
    });
});

// Edit the reservation of a session
app.post('/theaters/:theaterId/sessions/:sessionId/edit', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

// Get a cart
app.get('/carts/:cartId', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

// Create a new cart
app.post('/carts/new', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

// Edit shopping cart for reservations (seats confirmed reserved / remove seats)
app.post('/carts/:cartId/', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

// Edit the state of the cart
app.post('/carts/:cartId', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

// Get a receipt
app.get('/receipts/:receiptId', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

// Create a new receipt
app.post('/receipts/new', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

app.listen(3000, () => {
  // Use connect method to connect to the server.
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db = client.db(dbName);
  });
});

module.exports = app;
