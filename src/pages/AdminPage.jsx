import { useState, useEffect, useRef } from 'react';
import { Upload, Users, ShoppingBag, PlusCircle, CheckCircle2 } from 'lucide-react';
import '../App.css';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  
  // Admin Features State
  const [activeTab, setActiveTab] = useState('products'); // 'products', 'users'
  const [productAdded, setProductAdded] = useState(false);
  
  // Data State
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(console.error);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === 'sdeadmin') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid Admin PIN');
    }
  };

  const [fileName, setFileName] = useState('');
  
  const handleAddProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch('/api/products', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      setProductAdded(true);
      setFileName('');
      setTimeout(() => {
        setProductAdded(false);
        e.target.reset();
      }, 3000);
    })
    .catch(console.error);
  };

  if (!isAuthenticated) {
    return (
      <div className="container animate-fade-in" style={{ padding: '8rem 2rem', display: 'flex', justifyContent: 'center' }}>
        <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <ShieldIcon />
          <h2 style={{ marginBottom: '2rem', color: 'var(--color-primary)' }}>Admin Portal</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="password" 
              placeholder="Enter Admin PIN" 
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}
            />
            <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>Login directly</button>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '1rem' }}>Hint: Use PIN "sdeadmin"</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in responsive-flex responsive-padding" style={{ padding: '3rem 2rem', display: 'flex', gap: '3rem' }}>
      
      {/* Sidebar Dashboard */}
      <aside className="responsive-aside" style={{ width: '250px', flexShrink: 0 }}>
        <div style={{ background: 'var(--color-primary)', color: 'white', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Admin Dashboard</h3>
          <p style={{ opacity: 0.8, fontSize: '0.85rem' }}>Welcome back, Super Admin</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button 
            onClick={() => setActiveTab('products')}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', 
              borderRadius: '8px', width: '100%', textAlign: 'left',
              background: activeTab === 'products' ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
              color: activeTab === 'products' ? 'var(--color-electric)' : 'var(--color-text-light)',
              fontWeight: activeTab === 'products' ? 600 : 400
            }}
          >
            <PlusCircle size={20} /> Add Product
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', 
              borderRadius: '8px', width: '100%', textAlign: 'left',
              background: activeTab === 'users' ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
              color: activeTab === 'users' ? 'var(--color-electric)' : 'var(--color-text-light)',
              fontWeight: activeTab === 'users' ? 600 : 400
            }}
          >
            <Users size={20} /> Customer Data
          </button>
          <button 
            style={{ 
              display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', 
              borderRadius: '8px', width: '100%', textAlign: 'left',
              background: 'transparent', color: 'var(--color-text-light)'
            }}
          >
            <ShoppingBag size={20} /> Order Management
          </button>
          <button 
            onClick={() => setIsAuthenticated(false)}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', 
              borderRadius: '8px', width: '100%', textAlign: 'left',
              background: 'transparent', color: 'var(--color-error)', marginTop: '2rem'
            }}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Dashboard */}
      <div style={{ flex: 1 }}>
        {activeTab === 'products' && (
          <div className="animate-fade-in" style={{ background: 'var(--color-card)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <PlusCircle size={28} color="var(--color-electric)" /> Upload New Product
            </h2>
            
            {productAdded && (
              <div style={{ background: 'var(--color-success-bg)', color: 'var(--color-success)', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={20} /> Product added successfully to catalog!
              </div>
            )}

            <form onSubmit={handleAddProduct} className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              
              {/* Image Upload Area */}
              <div 
                style={{ gridColumn: '1 / -1', background: '#f8fafc', border: '2px dashed var(--color-border)', borderRadius: '12px', padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', cursor: 'pointer', position: 'relative' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--color-electric)' }}>
                  <Upload size={32} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Upload Product Image</h4>
                  <p style={{ color: 'var(--color-electric)', fontSize: '0.9rem', fontWeight: 600 }}>{fileName || 'No file selected'}</p>
                </div>
                <input required type="file" name="image" accept="image/*" onChange={(e) => setFileName(e.target.files[0]?.name)} style={{ opacity: 0, position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, cursor: 'pointer' }} />
                <div className="btn btn-secondary" style={{ pointerEvents: 'none', marginTop: '1rem' }}>Browse Files</div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-light)' }}>Product Title</label>
                <input required name="title" type="text" placeholder="e.g. 10mm Copper Wire" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-light)' }}>Brand Name</label>
                <input required name="brand" type="text" placeholder="e.g. Polycab, Finolex" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-light)' }}>Price (₹)</label>
                <input required name="price" type="number" step="0.01" placeholder="0.00" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-light)' }}>Category Section</label>
                <select name="category" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'white' }}>
                  <option>Electric Pipes</option>
                  <option>Water Pipes</option>
                  <option>Switches</option>
                  <option>Electrical</option>
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-light)' }}>Description & Details</label>
                <textarea name="description" rows="4" placeholder="Enter full specifications..." style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', resize: 'vertical' }}></textarea>
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="submit" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Save & Publish Product</button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="animate-fade-in" style={{ background: 'var(--color-card)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Users size={28} color="var(--color-electric)" /> Global User Data
            </h2>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--color-bg)', borderBottom: '2px solid var(--color-border)' }}>
                    <th style={{ padding: '1rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Customer ID</th>
                    <th style={{ padding: '1rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Name</th>
                    <th style={{ padding: '1rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Contact Info</th>
                    <th style={{ padding: '1rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Total Orders</th>
                    <th style={{ padding: '1rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Registered</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr><td colSpan="5" style={{ padding: '2rem', textAlign: 'center' }}>Connecting to SQLite... fetching customer node.</td></tr>
                  ) : users.map(user => (
                    <tr key={user.id} style={{ borderBottom: '1px solid var(--color-border)', transition: 'background 0.2s', ':hover': { background: '#f8fafc' } }}>
                      <td style={{ padding: '1rem', fontWeight: 500 }}>#{user.id}</td>
                      <td style={{ padding: '1rem', fontWeight: 600 }}>{user.name}</td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontSize: '0.9rem' }}>{user.email}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>{user.phone}</div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-electric)', padding: '0.2rem 0.5rem', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 600 }}>
                          {user.orders} Orders
                        </span>
                      </td>
                      <td style={{ padding: '1rem', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>{user.joinDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

const ShieldIcon = () => (
  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-electric)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  </div>
);

export default AdminPage;
