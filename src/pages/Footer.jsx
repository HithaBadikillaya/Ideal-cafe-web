import React from 'react';

const Footer = () => {
  return (
    <footer style={{
        backgroundColor: '#ffe5b4',
        padding: '40px 20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        fontSize: '14px',
        width: '100%',
        marginTop: '40px', 
      }}>
      
      <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Ideal Ice Cream®</h3>
      <p style={{ margin: '4px 0' }}>info@idealicecream.com</p>
      <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>IDEALICECREAM.COM</p>

      {/* Social Media Icons */}
      <div style={{ margin: '10px 0', fontSize: '24px' }}>
        <a href="#" style={{ margin: '0 12px', color: '#3f729b' }}><i className="fab fa-instagram"></i></a>
        <a href="#" style={{ margin: '0 12px', color: '#1877f2' }}><i className="fab fa-facebook-f"></i></a>
        <a href="#" style={{ margin: '0 12px', color: '#1da1f2' }}><i className="fab fa-twitter"></i></a>
        <a href="#" style={{ margin: '0 12px', color: '#ff0000' }}><i className="fab fa-youtube"></i></a>
      </div>

      <p style={{ margin: '10px 0', fontSize: '12px' }}>
        This email was sent to <strong>your_email@gmail.com</strong> because you’ve subscribed on our site or made a purchase.
      </p>

      
    </footer>
  );
};

export default Footer;


