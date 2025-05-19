import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Decision Tracking system</div>
      <img src="/Teams.jpeg" alt="Teams Logo" style={{ height: '50px' }} />

    </nav>
  );
};

export default NavBar;

