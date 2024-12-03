import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  
import './CheckedOutBooks.css';  

function CheckedOutBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/books/checked-out')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching checked-out books:', error);
      });
  }, []);

  function formatDueDate(dateString) {
    const date = new Date(Date.parse(dateString));
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  return (
    <div className="container">
      <h1>Checked Out Books</h1>
      <table className="books-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>ISBN</th>
            <th>Checked Out By</th>
            <th>Due Date</th>
            <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.ISBN}</td>
              <td>{book.checkedOutBy}</td>
              <td>{formatDueDate(book.dueDate)}</td>
              <td>
                <Link to={`/checkin/${book._id}`} className="checkin-button">
                  Check In
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CheckedOutBooks;
