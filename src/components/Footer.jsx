import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>Company Info</h4>
          <ul className="footer-links">
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Careers</Link></li>
            <li><Link to="#">Store Locations</Link></li>
            <li><Link to="#">Corporate Sustainability</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul className="footer-links">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="#">Track Order</Link></li>
            <li><Link to="#">Returns & Exchanges</Link></li>
            <li><Link to="#">Shipping Information</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Categories</h4>
          <ul className="footer-links">
            <li><Link to="/category">Electrical Wiring</Link></li>
            <li><Link to="/category">Switches & Sockets</Link></li>
            <li><Link to="/category">Piping & Fittings</Link></li>
            <li><Link to="/category">Lighting Solutions</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1rem', fontSize: '0.9rem' }}>
            Subscribe to get the latest updates on heavy duty hardware.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="email" 
              placeholder="Email address" 
              style={{ padding: '0.5rem', borderRadius: '4px', border: 'none', flex: 1 }}
            />
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Join</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sri Devi Electricals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
