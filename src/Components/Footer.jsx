import React from 'react'
import { Link } from 'react-router-dom';
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
        
        <div className="footer-section" aria-labelledby="footer-quick-links">
          <h4 id="footer-quick-links" className="footer-title">Quick Links</h4>
          <ul className="footer-links" role="list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/forecast">Weather Forecast</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section" aria-labelledby="footer-services">
          <h4 id="footer-services" className="footer-title">Weather Services</h4>
          <ul className="footer-links" role="list">
            <li><a href="#" aria-label="Current Weather (coming soon)">Current Weather</a></li>
            <li><a href="#" aria-label="7-Day Forecast (coming soon)">7-Day Forecast</a></li>
            <li><a href="#" aria-label="Weather Maps (coming soon)">Weather Maps</a></li>
            <li><a href="#" aria-label="Weather Alerts (coming soon)">Weather Alerts</a></li>
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
            <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
            <a href="#" className="footer-bottom-link" aria-label="Cookie Policy (coming soon)">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
