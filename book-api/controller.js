const Book = require('./db');

// Get all available books
exports.getAvailableBooks = async (req, res) => {
  try {
    const books = await Book.find({ checkedOut: false });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error getting available books' });
  }
};

// Get all checked out books
exports.getCheckedOutBooks = async (req, res) => {
  try {
    const books = await Book.find({ checkedOut: true });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error getting checked out books' });
  }
};

// Check out a book
exports.checkOutBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    if (book.checkedOut) {
      return res.status(400).json({ message: 'Book is already checked out' });
    }
    book.checkedOut = true;
    book.checkedOutBy = req.body.checkedOutBy;
    book.dueDate = req.body.dueDate;
    await book.save();
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error checking out book' });
  }
};

// Check in a book
exports.checkInBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    if (!book.checkedOut) {
      return res.status(400).json({ message: 'Book is not checked out' });
    }
    book.checkedOut = false;
    book.checkedOutBy = null;
    book.dueDate = null;
    await book.save();
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error checking in book' });
  }
};