const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
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

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/apis', router); 

router.post('/putData', (req, res) => {
  let data = new Data();
  const { firstname, lastname, email, school } = req.body;
  data.firstname = firstname;
  data.lastname = lastname;
  data.email = email;
  data.school = school;
  data.save();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
