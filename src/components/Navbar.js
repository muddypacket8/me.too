import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src='logo.png' alt="Company Logo" className="logo-image" />
        <p>
          <span className="company-name">Uplift</span>
        </p>
        <p>
          <span className="company-salutation">......</span>
        </p>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/HomePage">Home</Link></li>
        <li className="navbar-item"><Link to="/Charity">Charity</Link></li>
        <li className="navbar-item"><Link to="/DonationForm">DonationForm</Link></li>
        <li className="navbar-item"><Link to="/StoryCard">StoryCard</Link></li>
        <li className="navbar-item"><Link to="/CharityCard">CharityCard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
