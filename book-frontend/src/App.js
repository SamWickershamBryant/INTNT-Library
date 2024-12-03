import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AvailableBooks from './AvailableBooks';
import CheckedOutBooks from './CheckedOutBooks';
import CheckOutBook from './CheckOutBook';
import CheckInBook from './CheckInBook';

function App() {
  return (
    <BrowserRouter>
    <p>Made by <b>Sam Bryant</b> and <b>Greyson Hamlin</b></p>
      
      <Header />
      <Routes>
        <Route path="/" element={<AvailableBooks />} />
        <Route path="/checked-out-books" element={<CheckedOutBooks />} />
        <Route path="/checkout/:id" element={<CheckOutBook />} />
        <Route path="/checkin/:id" element={<CheckInBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
