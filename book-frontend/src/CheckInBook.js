import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CheckOutBook.css';

function CheckInBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', author: '', publisher: '', ISBN: '' });

  useEffect(() => {
    axios.get(`http://localhost:3000/book/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error('Error fetching book data:', error));
  }, [id]);

  const handleCheckIn = () => {
    axios.put(`http://localhost:3000/books/${id}/check-in`)
      .then(() => navigate('/checked-out-books'))
      .catch(error => console.error('Error checking in the book:', error));
  };

  return (
    <div className="container">
      <h1>Check In Book</h1>
      <table className="book-details">
        <tbody>
          <tr><th>Title:</th><td>{book.title}</td></tr>
          <tr><th>Author:</th><td>{book.author}</td></tr>
          <tr><th>Publisher:</th><td>{book.publisher}</td></tr>
          <tr><th>ISBN:</th><td>{book.ISBN}</td></tr>
          <tr><th>Checked Out By:</th><td>{book.checkedOutBy}</td></tr>
          <tr><th>Due Date:</th><td>{book.dueDate}</td></tr>
        </tbody>
      </table>
      <div className="buttons">
        <button onClick={handleCheckIn} className="checkout-button">Check In</button>
        <button onClick={() => navigate('/checked-out-books')} className="cancel-button">Cancel</button>
      </div>
    </div>
  );
}

export default CheckInBook;
