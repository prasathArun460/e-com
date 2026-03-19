import { useState } from 'react';
import { Search, ShoppingCart, User, HelpCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/category?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-section">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="var(--color-accent)" stroke="none" />
            </svg>
          </div>
          <div className="logo-text">
            <div className="logo-title">SD<span>E</span></div>
            <div className="logo-subtitle">Electricals & Hardware</div>
          </div>
        </Link>

        <form className="search-bar" onSubmit={handleSearch}>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search for wires, switches, pipes..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" type="submit">
            <Search size={20} />
          </button>
        </form>

        <nav className="nav-icons">
          <Link to="/contact" className="nav-item">
            <HelpCircle size={24} />
            <span>Support</span>
          </Link>
          <Link to="/auth" className="nav-item">
            <User size={24} />
            <span>Account</span>
          </Link>
          <Link to="/checkout" className="nav-item">
            <ShoppingCart size={24} />
            <span>Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
