import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // optional CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MentorMatch</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mentors">Mentors</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login" className="btn-login">Login</Link></li>
        <li><Link to="/register" className="btn-register">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
