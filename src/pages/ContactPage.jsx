import { Send, CheckCircle2 } from 'lucide-react';
import '../App.css';

const ContactPage = () => {
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '800px', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Need Help? Contact SDE Support</h1>
        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem' }}>We are here to assist with your industrial and retail orders.</p>
      </div>

      <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '3rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Hardcoded Target Email per user request */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>Recipient Email</label>
            <input 
              type="email" 
              value="prasatharun460@gmail.com" 
              disabled 
              style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: '#e2e8f0', color: 'var(--color-text-light)', fontSize: '1rem', cursor: 'not-allowed', fontWeight: 500 }} 
            />
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>Emails are sent directly to the SDE support team.</p>
          </div>

          <div className="responsive-flex" style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>Your Name</label>
              <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: '#f8fafc', fontSize: '1rem' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>Order Number (Optional)</label>
              <input type="text" placeholder="e.g. #SDE991" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: '#f8fafc', fontSize: '1rem' }} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>Message</label>
            <textarea 
               rows="5"
               placeholder="Describe your issue or order inquiry..." 
               style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: '#f8fafc', fontSize: '1rem', resize: 'vertical' }}
            ></textarea>
          </div>

          <button className="btn btn-primary" type="button" style={{ padding: '1rem 2rem', fontSize: '1.1rem', alignSelf: 'flex-start', marginTop: '0.5rem' }}>
            <Send size={18} /> Send Message
          </button>
        </form>

        {/* Success Banner Visualization */}
        <div style={{ 
          marginTop: '2.5rem',
          background: 'var(--color-success-bg)', 
          border: '1px solid var(--color-success)', 
          color: '#065f46', 
          padding: '1.25rem 1.5rem', 
          borderRadius: '8px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          boxShadow: '0 4px 6px -1px rgba(16,185,129,0.1)'
        }}>
          <CheckCircle2 size={24} style={{ color: 'var(--color-success)' }} />
          <div>
            <p style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.1rem' }}>Success!</p>
            <p style={{ fontSize: '0.9rem' }}>Your message has been sent to SDE Support. We will contact you soon.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactPage;
