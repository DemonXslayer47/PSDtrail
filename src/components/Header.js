// Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header>
      <div className="header-left">
        <div className="logo">
          <h1>MechaZone</h1>
        </div>
        <nav>
          <ul>
            <li>
              <button onClick={handleHomeClick}>Home</button>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/our-cars">Our Cars</Link>
            </li>
            {/* Add other navigation links as needed */}
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
