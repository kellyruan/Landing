const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const generatePassword = require('password-generator');
const Data = require('./data');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = express.Router();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
const dbRoute =
  'mongodb+srv://Client:Kr4595329@cluster0-wvlxw.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/apis', router);

router.post('/putData', (req, res) => {
  let data = new Data();
  const { id, name, email } = req.body;
  data.id = id;
  data.name = name;
  data.email = email;
  data.save();
});

// Put all API endpoints under '/api'

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
