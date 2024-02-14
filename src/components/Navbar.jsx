import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyle = {
  backgroundColor: 'black',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center', // Center items vertically
};

const titleStyle = {
  color: 'white',
  marginRight: '20px', // Add space between title and links
};

const listItemStyle = {
  marginRight: '20px',
  position: 'relative',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
};

const downfallStyle = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '3px',
  backgroundColor: '#ff9800',
  transform: 'scaleX(0)',
  transition: 'transform 0.3s ease',
};

function Navbar() {
  const handleHover = (event) => {
    event.target.style.transform = 'scaleX(1)';
  };

  const handleLeave = (event) => {
    event.target.style.transform = 'scaleX(0)';
  };

  return (
    <nav style={navbarStyle}>
      <h1 style={titleStyle}>Sarah Craze</h1>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex' }}>
        <li style={listItemStyle}>
          <Link to="/" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>Accueil</Link>
          <div style={downfallStyle}></div>
        </li>
        <li style={listItemStyle}>
          <Link to="/about" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>À propos</Link>
          <div style={downfallStyle}></div>
        </li>
        <li style={listItemStyle}>
          <Link to="/projects" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>Projets</Link>
          <div style={downfallStyle}></div>
        </li>
        <li style={listItemStyle}>
          <Link to="/contact" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>Contact</Link>
          <div style={downfallStyle}></div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
