import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-button">Available Books</Link>
          </li>
          <li>
            <Link to="/checked-out-books" className="nav-button">Checked Out Books</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
