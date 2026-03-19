import { Link, useNavigate } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle2 } from 'lucide-react';
import '../App.css';

const ProductDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="container animate-fade-in" style={{ padding: '3rem 2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
        <Link to="/">Home</Link> <ChevronRight size={14} /> <Link to="/category">Switches</Link> <ChevronRight size={14} /> <span style={{ color: 'var(--color-text)' }}>SDE Premium 16A Switch</span>
      </div>

      <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 1fr', gap: '4rem', marginBottom: '5rem' }}>
        
        {/* Left Side: Product Image (Hyper-detailed view) */}
        <div style={{ width: '100%', background: '#f1f5f9', borderRadius: '16px', padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src="/assets/sde_product_switch_1773906989380.png" 
            alt="16A Modular Switch & Socket combo" 
            style={{ width: '100%', maxWidth: '500px', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }} 
          />
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <div style={{ width: '80px', height: '80px', background: 'white', border: '2px solid var(--color-electric)', borderRadius: '8px', cursor: 'pointer' }}></div>
            <div style={{ width: '80px', height: '80px', background: 'white', opacity: 0.6, borderRadius: '8px', cursor: 'pointer' }}></div>
            <div style={{ width: '80px', height: '80px', background: 'white', opacity: 0.6, borderRadius: '8px', cursor: 'pointer' }}></div>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: 'var(--color-electric)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            SDE Premium Module Series
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, color: 'var(--color-primary)', marginBottom: '1rem' }}>
            Premium 16A Switch & Socket Combo
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', color: '#fbbf24' }}>
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" opacity={0.5} />
            </div>
            <span style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>4.5 Stars (128 reviews)</span>
          </div>

          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            ₹189.00
            <span style={{ fontSize: '1rem', color: 'var(--color-text-light)', fontWeight: 400, textDecoration: 'line-through', marginBottom: '0.4rem' }}>₹250.00</span>
          </div>

          <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            A high-quality, professional-grade 16A modular switch and socket combo designed for heavy-duty appliances like ACs, geysers, and refrigerators. Features a glossy white finish, robust internal brass contacts, and child-safety shutters for ultimate durability and protection.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-success)' }}><CheckCircle2 size={18} /> <span>In Stock (Ships in 24 hours)</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-light)' }}><CheckCircle2 size={18} /> <span>Lifetime Warranty on Mechanism</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-light)' }}><CheckCircle2 size={18} /> <span>ISO 9001 Certified Quality</span></div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
            <button className="btn" style={{ flex: 1, border: '1px solid var(--color-electric)', color: 'var(--color-electric)', padding: '1rem' }}>Add to Cart</button>
            <button className="btn btn-primary" onClick={() => navigate('/checkout')} style={{ flex: 1, padding: '1rem', background: 'var(--color-success)' }}>Buy Now</button>
          </div>
        </div>

      </div>

      {/* Customer Feedback section */}
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Customer Feedback</h3>
      <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
         <div style={{ padding: '2rem', background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ fontWeight: 600 }}>Rajesh Kumar</div>
              <div style={{ color: '#fbbf24', display: 'flex' }}><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
            </div>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>"Excellent build quality for the price. Using it for my 1.5-ton AC without any heating issues. The glossy finish matches my interior perfectly."</p>
         </div>
         <div style={{ padding: '2rem', background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ fontWeight: 600 }}>Anand Construction</div>
              <div style={{ color: '#fbbf24', display: 'flex' }}><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
            </div>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>"We bought these in bulk for a residential project. Reliable product and very easy to install. Highly recommend SDE products."</p>
         </div>
      </div>

      {/* Similar Products */}
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Similar Products</h3>
      <div className="responsive-flex" style={{ display: 'flex', gap: '2rem' }}>
         <div className="product-card" style={{ flex: 1 }}>
           <div className="product-image-container"><img src="/assets/sde_product_flexbox_1773907084517.png" alt="Flex Box" className="product-image"/></div>
           <div className="product-details">
             <div className="product-brand">SDE Standard</div>
             <h4 className="product-title">Extension Flex Box 4-Way</h4>
             <div className="product-footer"><span className="product-price">₹450</span></div>
           </div>
         </div>
         <div className="product-card" style={{ flex: 1 }}>
           <div className="product-image-container"><img src="/assets/sde_product_switch_1773906989380.png" alt="16A Plug" className="product-image"/></div>
           <div className="product-details">
             <div className="product-brand">Polycab</div>
             <h4 className="product-title">16A Heavy Duty Plug Top</h4>
             <div className="product-footer"><span className="product-price">₹85</span></div>
           </div>
         </div>
         <div className="product-card" style={{ flex: 1 }}>
           <div className="product-image-container"><img src="/assets/sde_product_junction_1773907111064.png" alt="Junction Box" className="product-image"/></div>
           <div className="product-details">
             <div className="product-brand">Anchor</div>
             <h4 className="product-title">Standard Junction Box</h4>
             <div className="product-footer"><span className="product-price">₹35</span></div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default ProductDetail;
