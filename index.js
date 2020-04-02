const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const generatePassword = require('password-generator');
const Data = require('./data');

const app = express();
const dbRoute =
  'mongodb+srv://Client:Kr4595329@cluster0-wvlxw.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/api/putData', (req, res) => {
  let data = new Data();
  console.log(req);
  const { name, email } = req.body;
  data.id = 5;
  data.name = name;
  data.email = email;
  data.save();
});

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
