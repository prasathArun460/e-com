import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import '../App.css';

const products = [
  { id: 1, title: '16A Modular Switch', brand: 'SDE Premium', price: '₹45.00', category: 'Switches', img: '/assets/sde_product_switch_1773906989380.png' },
  { id: 2, title: 'PVC Conduit Pipe 25mm', brand: 'Polycab', price: '₹120.00', category: 'Piping', img: '/assets/sde_product_conduit_1773907009268.png' },
  { id: 3, title: '90-Degree PVC Bend', brand: 'SDE Standard', price: '₹15.00', category: 'Piping', img: '/assets/sde_product_conduit_1773907009268.png' },
  { id: 4, title: 'Copper Wire 1.5 sq mm', brand: 'Finolex', price: '₹950.00', category: 'Electrical', img: '/assets/sde_product_wire_1773907065006.png' },
  { id: 5, title: 'MCB 32A Double Pole', brand: 'Legrand', price: '₹340.00', category: 'Electrical', img: '/assets/sde_product_junction_1773907111064.png' },
  { id: 6, title: '4-Way MCB Box', brand: 'Anchor', price: '₹220.00', category: 'Electrical', img: '/assets/sde_product_junction_1773907111064.png' },
  { id: 7, title: 'Water Pipe Clamp 1"', brand: 'SDE Standard', price: '₹8.00', category: 'Plumbing', img: '/assets/sde_product_waterpipe_1773907033403.png' },
  { id: 8, title: '6A Standard Socket', brand: 'SDE Lite', price: '₹35.00', category: 'Switches', img: '/assets/sde_product_switch_1773906989380.png' },
  { id: 9, title: 'PVC Insulation Tape', brand: 'Anchor', price: '₹25.00', category: 'Electrical', img: '/assets/sde_product_wire_1773907065006.png' },
  { id: 10, title: 'Bulb Holder Angled', brand: 'SDE Premium', price: '₹40.00', category: 'Electrical', img: '/assets/sde_product_junction_1773907111064.png' },
  { id: 11, title: 'PVC T-Junction', brand: 'SDE Standard', price: '₹22.00', category: 'Plumbing', img: '/assets/sde_product_waterpipe_1773907033403.png' },
  { id: 12, title: 'Fan Junction Box', brand: 'Polycab', price: '₹65.00', category: 'Piping', img: '/assets/sde_product_flexbox_1773907084517.png' }
];

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url("/assets/sde_hero_bg_1773906971709.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '8rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700 }} className="text-gradient">
            Your Source for Quality <br/> Electrical & Water Pipe Supplies
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Premium industrial construction materials for professionals and DIY enthusiasts alike. Fast shipping across the country.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/category" className="btn btn-primary">Shop Piping & Fittings</Link>
            <Link to="/category" className="btn btn-secondary" style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>View Electricals</Link>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="container" style={{ padding: '5rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Featured Products</h2>
            <p style={{ color: 'var(--color-text-light)', marginTop: '0.5rem' }}>High-quality components for every project scale.</p>
          </div>
          <Link to="/category" style={{ color: 'var(--color-electric)', fontWeight: 600 }}>View All Catalog &rarr;</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {products.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div className="product-image-container">
                  <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>
                    {product.category}
                  </span>
                  <img src={product.img} alt={product.title} className="product-image" />
                </div>
                <div className="product-details">
                  <div className="product-brand">{product.brand}</div>
                  <h3 className="product-title">{product.title}</h3>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="add-btn" onClick={(e) => {
                      e.preventDefault(); // Prevent navigating to product detail
                    }}>
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
