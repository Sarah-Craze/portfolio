// Footer.js
import React from 'react';

function Footer({ toggleDarkMode }) {
  return (
    <footer style={footerStyle}>
      <button style={buttonStyle} onClick={toggleDarkMode}>
        Switch to Dark Mode
      </button>
    </footer>
  );
}

const footerStyle = {
  position: 'fixed',
  bottom: '0',
  left: '0',
  width: '100%',
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'left',
};

const buttonStyle = {
  backgroundColor: '#555',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Footer;
