// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-api', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});