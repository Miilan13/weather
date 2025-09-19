import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Weather.app</h3>
          <p className="footer-description">
            Get accurate weather forecasts and stay updated with real-time weather conditions worldwide.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/forecast">Weather Forecast</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Weather Services</h4>
          <ul className="footer-links">
            <li><a href="#">Current Weather</a></li>
            <li><a href="#">7-Day Forecast</a></li>
            <li><a href="#">Weather Maps</a></li>
            <li><a href="#">Weather Alerts</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> miilansolanki9955@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91 97XXX XXXXX</p>
            <p><i className="fas fa-map-marker-alt"></i> Vadodra , Gujarat , India</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 Weather.app. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
