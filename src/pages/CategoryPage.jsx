import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Filter, ChevronRight } from 'lucide-react';
import '../App.css';

const CategoryPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q') || '';
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch from SQLite', err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
     return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>Connecting to SQLite Database...</div>;
  }

  return (
    <div className="container animate-fade-in responsive-flex responsive-padding" style={{ padding: '3rem 2rem', display: 'flex', gap: '3rem' }}>
      
      {/* Sidebar Navigation & Filters */}
      <aside className="responsive-aside" style={{ width: '280px', flexShrink: 0 }}>
        <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <Filter size={18} /> Filters
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Category Type</h4>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked /> Electric Pipes
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked /> Water Pipes
            </label>
          </div>
        </div>
        
        <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Pipe Size</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['15mm', '20mm', '25mm', '1"', '1.5"', '2"'].map(size => (
               <button key={size} style={{ padding: '0.4rem 0.8rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: '0.85rem' }}>
                 {size}
               </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Grid */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
          <Link to="/">Home</Link> <ChevronRight size={14} /> <span style={{ color: 'var(--color-text)' }}>Piping & Fittings</span>
        </div>
        
        <h1 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>
          {searchQuery ? `Search Results: "${searchQuery}"` : 'Piping & Fittings'}
        </h1>
        
        {filteredProducts.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', background: 'var(--color-card)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-text-light)' }}>No products found matching your search.</h3>
            <Link to="/category" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', display: 'inline-block' }}>View all products</Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
            {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div className="product-image-container">
                  <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>
                    {product.category}
                  </span>
                  <img src={product.image_url || '/assets/sde_product_switch_1773906989380.png'} alt={product.title} className="product-image" />
                </div>
                <div className="product-details">
                  <div className="product-brand">{product.brand}</div>
                  <h3 className="product-title" style={{ fontSize: '0.95rem' }}>{product.title}</h3>
                  <div className="product-footer">
                    <span className="product-price">₹{product.price.toFixed(2)}</span>
                    <button className="add-btn" onClick={(e) => { e.preventDefault(); }}>
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
