import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'; // Assuming you have a CSS file for styling tariq mahmood
import logo from '../assets/images/logo.png'; // Path to your logo image

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link"> <img src={logo} alt="Logo" className="logo-image" />
        <span className="logo-text">DPS Token </span>
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/staking" onClick={() => setMenuOpen(false)}>Staking</Link>
        <Link to="/swapping" onClick={() => setMenuOpen(false)}>Swapping</Link>
        <Link to="/Ston" onClick={() => setMenuOpen(false)}>Ston</Link>
        <Link to="/Tokenomics" onClick={() => setMenuOpen(false)}>Tokenomics</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
//tariq mahmood more help contact telegram @mrdeveloper_bot