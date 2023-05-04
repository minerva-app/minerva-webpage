import React, { useState } from 'react';
import '../styles//NavigationBar.css';
import placeholderImage from '../assets/placeholder-image.jpg';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : 'closed'}`}>
<div className="navbar-logo">
<img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo"
                  />
      </div>
      <ul className={`nav-links ${isOpen ? 'visible' : 'hidden'}`}>
        <li>
          <span className="nav-symbol">ⓘ</span>
          <a href="#summary">Summary</a>
        </li>
        <li>
          <span className="nav-symbol">📁</span>
          <a href="#project">Project</a>
        </li>
        <li>
          <span className="nav-symbol">👥</span>
          <a href="#people">People</a>
        </li>
      </ul>
      <div className="arrow-container">
        <span className="arrow" onClick={toggleNav}>
          {isOpen ? '◀' : '▶'}
        </span>
      </div>
    </nav>
  );
};

export default NavigationBar;
