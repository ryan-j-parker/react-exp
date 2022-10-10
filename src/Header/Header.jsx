import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h3>ryan parker</h3>
      <div className="links">
        <a href="https://github.com/ryan-j-parker">
          <img className="header-logo" src="../gh-logo.png" />
        </a>
        <a href="https://linkedin.com/in/ryanparkerdev">
          <img className="header-logo" src="../li-logo.png" />
        </a>
      </div>
    </div>
  );
}

export default Header;
