
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const bookController = require('./controller');

app.use(express.json());
app.use(cors());

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/book/:id', bookController.getBookById);
app.get('/books/available', bookController.getAvailableBooks);
app.get('/books/checked-out', bookController.getCheckedOutBooks);
app.put('/books/:id/check-out', bookController.checkOutBook);
app.put('/books/:id/check-in', bookController.checkInBook);

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
