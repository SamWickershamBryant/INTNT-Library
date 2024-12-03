

const mongoose = require('mongoose');

const uri = process.env.URI;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
mongoose.connect(uri, clientOptions);



const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    ISBN: { type: String, required: true, unique: true },
    checkedOut: { type: Boolean, default: false },
    checkedOutBy: { type: String },
    dueDate: { type: Date }
});

const Book = mongoose.model('Book', bookSchema);

async function seedBooks() {
    try {
      await Book.deleteMany({});
  
      const books = [
        {
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
          publisher: 'Houghton Mifflin Harcourt',
          ISBN: '97800071352603',
          checkedOut: false,
          checkedOutBy: null,
          dueDate: null
        },
        {
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          publisher: 'Houghton Mifflin Harcourt',
          ISBN: '97800071352610',
          checkedOut: false,
          checkedOutBy: null,
          dueDate: null
        },
        {
          title: 'The Catcher in the Rye',
          author: 'J.D. Salinger',
          publisher: 'Little, Brown and Company',
          ISBN: '9780316485502',
          checkedOut: false,
          checkedOutBy: null,
          dueDate: null
        },
        {
            title: 'The Hunger Games',
            author: 'Katniss Everdeen',
            publisher: 'New York Times',
            ISBN: '9984375693',
            checkedOut: true,
            checkedOutBy: 'Sam Bryant',
            dueDate: Date()
          },
      ];
  
      await Book.insertMany(books);
  
      console.log('Books seeded successfully');
    } catch (err) {
      console.error(err);
    }
  }
  


module.exports = Book;

