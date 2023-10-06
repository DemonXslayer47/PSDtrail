import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <a href="#">Privacy Policy</a>
          <a href="#">Conditions of Use</a>
          <a href="#">Customer Policy</a>
        </div>
        <div className="footer-center">
          <hr /> {/* Line to separate sections */}
        </div>
        <div className="footer-right">
          <p>Contact Information:</p>
          <p>Email: info@mechazone.com</p>
          <p>Follow us on:</p>
          <p>Facebook | Email | LinkedIn</p>
        </div>
      </div>
      <div className="copyright">
        &copy; 2023 Mechazone Inc. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
