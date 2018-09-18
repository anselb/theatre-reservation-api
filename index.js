// server.js - Theater Reservation API

var express = require('express');
var app = express();

// Get a theater
app.get('/theaters/:theaterId', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

// Create a new theater
app.post('/theaters/new', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

// Get a session for a theater
app.get('/theaters/:theaterId/sessions/:sessionId', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

// Create a new session
app.post('/theaters/:theaterId/sessions/new', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
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

app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = app;
