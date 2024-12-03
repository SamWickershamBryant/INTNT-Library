import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CheckOutBook.css'; 

function CheckOutBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', author: '', publisher: '', ISBN: '' });
  const [checkedOutBy, setCheckedOutBy] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/book/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error('Error fetching book data:', error));
  }, [id]);

  const handleCheckOut = () => {
    axios.put(`http://localhost:3000/books/${id}/check-out`, { checkedOutBy, dueDate })
      .then(() => navigate('/checked-out-books'))
      .catch(error => console.error('Error checking out the book:', error));
  };

  return (
    <div className="container">
      <h1>Check Out Book</h1>
      <table className="book-details">
        <tbody>
          <tr><th>Title:</th><td>{book.title}</td></tr>
          <tr><th>Author:</th><td>{book.author}</td></tr>
          <tr><th>Publisher:</th><td>{book.publisher}</td></tr>
          <tr><th>ISBN:</th><td>{book.ISBN}</td></tr>
          <tr>
            <th>Checked Out By:</th>
            <td><input type="text" value={checkedOutBy} onChange={(e) => setCheckedOutBy(e.target.value)} /></td>
          </tr>
          <tr>
            <th>Due Date:</th>
            <td><input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} /></td>
          </tr>
        </tbody>
      </table>
      <div className="buttons">
        <button onClick={handleCheckOut} className="checkout-button">Check Out</button>
        <button onClick={() => navigate('/')} className="cancel-button">Cancel</button>
      </div>
    </div>
  );
}

export default CheckOutBook;
