import React from 'react';

const Footer = () => {

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Our Project. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#787a75',
  color: '#fff',
  textAlign: 'center',
  padding: '0.5rem', /* Adjusted padding to reduce height */
  position: 'fixed',
  bottom: 0,
  width: '100%',
  zIndex: 100,
};


export default Footer;