import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RefreshCcw, CheckCircle2 } from 'lucide-react';
import '../App.css';

const AuthPage = () => {
  const navigate = useNavigate();
  const [signupStatus, setSignupStatus] = useState('initial'); // initial, processing, success
  const [loginStatus, setLoginStatus] = useState('initial');

  const handleSignup = (e) => {
    e.preventDefault();
    setSignupStatus('processing');
    setTimeout(() => {
      setSignupStatus('success');
      setTimeout(() => navigate('/'), 1500);
    }, 1500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginStatus('processing');
    setTimeout(() => {
      setLoginStatus('success');
      setTimeout(() => navigate('/'), 1500);
    }, 1500);
  };

  return (
    <div className="container animate-fade-in responsive-padding" style={{ padding: '4rem 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      
      <div className="responsive-flex" style={{ 
        display: 'flex', 
        width: '100%', 
        maxWidth: '1000px', 
        background: 'var(--color-card)', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', 
        border: '1px solid var(--color-border)',
        position: 'relative'
      }}>
        
        {/* Background Circuit Pattern overlay */}
        <div style={{ 
            position: 'absolute', 
            top: 0, right: 0, bottom: 0, left: 0, 
            background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10 10h20v20H10z\' stroke=\'%233B82F6\' stroke-width=\'0.5\' fill=\'none\' opacity=\'0.1\'/%3E%3Cpath d=\'M30 20h40v40H30z\' stroke=\'%233B82F6\' stroke-width=\'0.5\' fill=\'none\' opacity=\'0.05\'/%3E%3C/svg%3E")', 
            pointerEvents: 'none',
            zIndex: 0
        }}></div>

        {/* Left Side: Sign Up */}
        <div style={{ flex: 1, padding: '4rem 3rem', borderRight: '1px solid var(--color-border)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <div style={{ width: '32px', height: '32px', background: 'var(--color-electric)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#C68F56" stroke="none"/></svg>
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.5px' }}>SD<span style={{color: 'var(--color-accent)'}}>E</span></span>
          </div>
          
          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>New User? Sign Up</h2>
          
          {signupStatus === 'success' ? (
            <div className="animate-fade-in" style={{ padding: '2rem', background: 'var(--color-success-bg)', borderRadius: '8px', color: '#065f46', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
              <CheckCircle2 size={48} color="var(--color-success)" />
              <div>
                <h3 style={{ fontSize: '1.25rem' }}>Account Created!</h3>
                <p>Redirecting you to the home page...</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <input required type="text" placeholder="Full Name" style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: '#f8fafc', fontSize: '1rem' }} />
              </div>
              <div>
                <input required type="tel" placeholder="Mobile Number" style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: '#f8fafc', fontSize: '1rem' }} />
              </div>
              <div>
                <input required type="email" placeholder="Email Address" style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: '#f8fafc', fontSize: '1rem' }} />
              </div>
              <div>
                <input required type="password" placeholder="Password" style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: '#f8fafc', fontSize: '1rem' }} />
              </div>
              <button disabled={signupStatus === 'processing'} className="btn btn-primary" type="submit" style={{ marginTop: '0.5rem', padding: '1rem', width: '100%', opacity: signupStatus === 'processing' ? 0.7 : 1 }}>
                {signupStatus === 'processing' ? <><RefreshCcw size={20} className="spin" /> Creating Account...</> : 'Create Account'}
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Login */}
        <div style={{ flex: 1, padding: '4rem 3rem', background: '#f8fafc', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '1.5rem', marginTop: '3.5rem' }}>Returning User? Login</h2>
          
          {loginStatus === 'success' ? (
            <div className="animate-fade-in" style={{ padding: '2rem', background: 'var(--color-success-bg)', borderRadius: '8px', color: '#065f46', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
              <CheckCircle2 size={48} color="var(--color-success)" />
              <div>
                <h3 style={{ fontSize: '1.25rem' }}>Welcome Back!</h3>
                <p>Redirecting you to the home page...</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <input required type="text" placeholder="Email or Mobile Number" style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'white', fontSize: '1rem' }} />
              </div>
              <div>
                <input required type="password" placeholder="Password" style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'white', fontSize: '1rem' }} />
              </div>
              <div style={{ textAlign: 'right', marginTop: '-0.5rem' }}>
                <a href="#" style={{ color: 'var(--color-electric)', fontSize: '0.85rem', fontWeight: 500 }}>Forgot Password?</a>
              </div>
              <button disabled={loginStatus === 'processing'} className="btn" type="submit" style={{ marginTop: '0.5rem', padding: '1rem', width: '100%', background: 'var(--color-primary)', color: 'white', opacity: loginStatus === 'processing' ? 0.7 : 1 }}>
                {loginStatus === 'processing' ? <><RefreshCcw size={20} className="spin" /> Authenticating...</> : 'Log In'}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default AuthPage;
