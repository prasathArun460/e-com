import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Filter, ChevronRight } from 'lucide-react';
import '../App.css';

const categoryProducts = [
  { id: 1, title: 'Rigid PVC Wiring Conduit 25mm', brand: 'Polycab', price: '₹145.00', section: 'Electric Pipes', img: '/assets/sde_product_conduit_1773907009268.png' },
  { id: 2, title: '90-Degree Wiring Bend', brand: 'SDE Premium', price: '₹18.00', section: 'Electric Pipes', img: '/assets/sde_product_conduit_1773907009268.png' },
  { id: 3, title: 'Metal Wiring Clamp 20mm', brand: 'Anchor', price: '₹12.00', section: 'Electric Pipes', img: '/assets/sde_product_junction_1773907111064.png' },
  { id: 4, title: 'Flexible Service Pipe 1.5"', brand: 'Finolex', price: '₹450.00', section: 'Electric Pipes', img: '/assets/sde_product_wire_1773907065006.png' },
  { id: 5, title: 'Standard PVC Water Pipe 1"', brand: 'Ashirvad', price: '₹320.00', section: 'Water Pipes', img: '/assets/sde_product_waterpipe_1773907033403.png' },
  { id: 6, title: 'Water Pipe Clamp 1"', brand: 'SDE Standard', price: '₹8.00', section: 'Water Pipes', img: '/assets/sde_product_waterpipe_1773907033403.png' },
  { id: 7, title: 'PVC 90-Degree Elbow', brand: 'Supreme', price: '₹28.00', section: 'Water Pipes', img: '/assets/sde_product_waterpipe_1773907033403.png' },
  { id: 8, title: 'PVC Equal Coupling', brand: 'Supreme', price: '₹15.00', section: 'Water Pipes', img: '/assets/sde_product_waterpipe_1773907033403.png' },
  { id: 9, title: 'PVC T-Junction Fitting', brand: 'Ashirvad', price: '₹42.00', section: 'Water Pipes', img: '/assets/sde_product_waterpipe_1773907033403.png' },
  { id: 10, title: 'PVC Reducer Coupling', brand: 'Supreme', price: '₹35.00', section: 'Water Pipes', img: '/assets/sde_product_waterpipe_1773907033403.png' },
  { id: 11, title: 'Heavy Duty PVC Wire Box', brand: 'Anchor', price: '₹85.00', section: 'Electric Pipes', img: '/assets/sde_product_flexbox_1773907084517.png' },
  { id: 12, title: '40mm End Cap', brand: 'Ashirvad', price: '₹22.00', section: 'Water Pipes', img: '/assets/sde_product_waterpipe_1773907033403.png' },
  { id: 13, title: 'Conduit Spacer Saddle', brand: 'SDE Premium', price: '₹10.00', section: 'Electric Pipes', img: '/assets/sde_product_junction_1773907111064.png' },
  { id: 14, title: 'Threaded UPVC Tee', brand: 'Supreme', price: '₹65.00', section: 'Water Pipes', img: '/assets/sde_product_waterpipe_1773907033403.png' },
  { id: 15, title: 'Corrugated Flexible Conduit', brand: 'Finolex', price: '₹280.00', section: 'Electric Pipes', img: '/assets/sde_product_wire_1773907065006.png' },
  { id: 16, title: 'Ball Valve 1.5"', brand: 'Ashirvad', price: '₹140.00', section: 'Water Pipes', img: '/assets/sde_product_waterpipe_1773907033403.png' }
];

const CategoryPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q') || '';

  const filteredProducts = categoryProducts.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                    {product.section}
                  </span>
                  <img src={product.img} alt={product.title} className="product-image" />
                </div>
                <div className="product-details">
                  <div className="product-brand">{product.brand}</div>
                  <h3 className="product-title" style={{ fontSize: '0.95rem' }}>{product.title}</h3>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
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
