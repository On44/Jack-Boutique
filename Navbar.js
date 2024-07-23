import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to=".pages/">Home</Link></li>
        <li className="navbar-item"><Link to="/login">Login</Link></li>
        <li className="navbar-item"><Link to="/register">Register</Link></li>
        <li className="navbar-item"><Link to="/account">Account Balance</Link></li>
        <li className="navbar-item"><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
