// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
//const db = require('./db');

app.use(express.json());
app.use(cors());

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((err, req, res, next) => {
console.error('Error:', err);
res.status(500).send('Internal Server Error');
});

app.use((req, res, next) => {
    console.log(`Route not found: ${req.method} ${req.url}`);
    res.status(404).send('Route not found');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
