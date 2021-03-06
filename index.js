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

  theaters.findOne({"_id": theaterId})
    .then((theater) => {
      sessions.insertOne({
        "_id" : 1,
        "name" : "Action Movie 5",
        "description" : "Another action movie",
        "start" : new Date("2015-03-11T15:00:00.000Z"),
        "end" : new Date("2015-03-11T16:00:00.000Z"),
        "price" : 10,
        "seatsAvailable" : theater.seatsAvailable,
        "seats" : theater.seats,
        "reservations" : []
      });
    })
});

// Edit the reservation of a session
app.post('/theaters/:theaterId/sessions/:sessionId/edit', function(req, res) {
  var sessionId = 1;
  var cartId = 1;

  var seats = [[1, 5], [1, 6]];
  var seatsQuery = [];
  var setSeatsSelection = {};

  for(var i = 0; i < seats.length; i++) {
    var seatSelector = {};
    var seatSelection = 'seats.' + seats[i][0] + '.' + seats[i][1];
    // Part of $and query to check if seat is free
    seatSelector[seatSelection] = 0;
    seatsQuery.push(seatSelector);
    // Part of $set operation to set seat as occupied
    setSeatsSelection[seatSelection] = 1;
  }

  var sessions = db.collection("sessions");

  sessions.findOne({_id: sessionId})
    .then((session) => {
      console.log(session)
      var result = sessions.updateOne({
            _id: sessionId,
            $and: seatsQuery
          },
          {
            $set: setSeatsSelection,
            $inc: { seatsAvailable: -seats.length },
            $push: {
              reservations: {
                  _id: cartId,
                  seats: seats,
                  price: session.price,
                  total: session.price * seats.length
              }
            }
        });
      return result
    }).then((result) => {
      // Failed to reserve seats
      if(result.nModified == 0) {
        console.log("failed")
      }
      // Reservation was successful
      if(result.nModified == 1) {
        console.log("success")
      }
    }).catch((err) => {
      console.log(err)
    })
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
