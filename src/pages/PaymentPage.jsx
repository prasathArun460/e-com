import { useState } from 'react';
import { Lock, AlertCircle, RefreshCcw, CheckCircle2, QrCode, CreditCard, Landmark, X } from 'lucide-react';
import '../App.css';

const PaymentPage = () => {
  const [status, setStatus] = useState('initial'); // 'initial', 'gateway', 'processing', 'failed', 'success'
  
  // Payment Gateway Options
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi', 'card', 'netbanking'

  const handleOpenGateway = (e) => {
    e.preventDefault();
    setStatus('gateway');
  };

  const handleMockTransaction = (success) => {
    setStatus('processing');
    setTimeout(() => {
      setStatus(success ? 'success' : 'failed');
    }, 1500);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '1000px', position: 'relative' }}>
      
      {/* Transaction Failure Banner */}
      {status === 'failed' && (
        <div className="animate-fade-in" style={{ 
          background: 'var(--color-error-bg)', border: '1px solid var(--color-error)', color: 'var(--color-error)', 
          padding: '1.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', boxShadow: '0 4px 6px -1px rgba(239,68,68,0.1)'
        }}>
          <AlertCircle size={32} />
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Transaction Failure</h3>
            <p style={{ fontWeight: 500 }}>Your payment could not be processed via the secure gateway. Please try again.</p>
          </div>
        </div>
      )}

      {/* Transaction Success Banner */}
      {status === 'success' && (
        <div className="animate-fade-in" style={{ 
          background: 'var(--color-success-bg)', border: '1px solid var(--color-success)', color: '#065f46', 
          padding: '1.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', boxShadow: '0 4px 6px -1px rgba(16,185,129,0.1)'
        }}>
          <CheckCircle2 size={32} color="var(--color-success)" />
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Payment Successful!</h3>
            <p style={{ fontWeight: 500 }}>Your order #SDE991 has been confirmed and is being processed.</p>
          </div>
        </div>
      )}

      {/* MOCK PAYMENT GATEWAY MODAL OVERLAY */}
      {status === 'gateway' && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="animate-fade-in" style={{ background: '#fff', width: '100%', maxWidth: '800px', borderRadius: '12px', overflow: 'hidden', display: 'flex', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            
            {/* Gateway Sidebar */}
            <div style={{ width: '280px', background: '#f8fafc', padding: '2rem', borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                  <div style={{ width: '32px', height: '32px', background: 'var(--color-electric)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#C68F56" stroke="none"/></svg>
                  </div>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>SD<span style={{color: 'var(--color-accent)'}}>E</span> Pay</span>
               </div>

               <div style={{ marginBottom: '2rem' }}>
                 <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '0.25rem' }}>Total Amount</p>
                 <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>₹1,250.00</h2>
                 <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>Order ID: SDE-TXN-991</p>
               </div>

               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                 <button onClick={() => setPaymentMethod('upi')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '8px', background: paymentMethod === 'upi' ? '#fff' : 'transparent', border: paymentMethod === 'upi' ? '1px solid var(--color-electric)' : '1px solid transparent', boxShadow: paymentMethod === 'upi' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', fontWeight: 500, color: paymentMethod === 'upi' ? 'var(--color-electric)' : 'var(--color-text)' }}>
                   <QrCode size={20} /> UPI QR
                 </button>
                 <button onClick={() => setPaymentMethod('card')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '8px', background: paymentMethod === 'card' ? '#fff' : 'transparent', border: paymentMethod === 'card' ? '1px solid var(--color-electric)' : '1px solid transparent', boxShadow: paymentMethod === 'card' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', fontWeight: 500, color: paymentMethod === 'card' ? 'var(--color-electric)' : 'var(--color-text)' }}>
                   <CreditCard size={20} /> Credit/Debit Card
                 </button>
                 <button onClick={() => setPaymentMethod('netbanking')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '8px', background: paymentMethod === 'netbanking' ? '#fff' : 'transparent', border: paymentMethod === 'netbanking' ? '1px solid var(--color-electric)' : '1px solid transparent', boxShadow: paymentMethod === 'netbanking' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', fontWeight: 500, color: paymentMethod === 'netbanking' ? 'var(--color-electric)' : 'var(--color-text)' }}>
                   <Landmark size={20} /> Netbanking
                 </button>
               </div>
            </div>

            {/* Gateway Main Area */}
            <div style={{ flex: 1, padding: '2.5rem', position: 'relative' }}>
              <button 
                onClick={() => handleMockTransaction(false)} 
                title="Cancel Payment"
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--color-text-light)', cursor: 'pointer' }}>
                <X size={24} />
              </button>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>
                {paymentMethod === 'upi' ? 'Scan to Pay' : paymentMethod === 'card' ? 'Enter Card Details' : 'Select your Bank'}
              </h3>

              {paymentMethod === 'upi' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '2rem' }}>
                  <div style={{ border: '2px solid var(--color-electric)', borderRadius: '16px', padding: '1rem', background: '#fff' }}>
                    <img src="/assets/qr.png" alt="UPI QR Code" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} onError={(e) => {e.target.style.display='none'; e.target.parentElement.innerHTML='<div style="width:200px; height:200px; background:#f1f5f9; display:flex; align-items:center; justify-content:center; border-radius:8px;">[Simulated QR]</div>';}} />
                  </div>
                  <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Scan using any UPI app (GPay, PhonePe, Paytm)</p>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <input type="text" placeholder="Card Number (Dummy)" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '1rem' }} />
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <input type="text" placeholder="MM/YY" style={{ flex: 1, padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '1rem' }} />
                    <input type="password" placeholder="CVV" style={{ flex: 1, padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '1rem' }} />
                  </div>
                  <input type="text" placeholder="Cardholder Name" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '1rem' }} />
                </div>
              )}

              {paymentMethod === 'netbanking' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {['HDFC Bank', 'SBI', 'ICICI Bank', 'Axis Bank', 'Kotak', 'PNB'].map(bank => (
                    <div key={bank} style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', ':hover': { borderColor: 'var(--color-electric)' } }}>{bank}</div>
                  ))}
                </div>
              )}

              <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn" onClick={() => handleMockTransaction(false)} style={{ border: '1px solid var(--color-error)', color: 'var(--color-error)' }}>Simulate Failure</button>
                <button className="btn btn-primary" onClick={() => handleMockTransaction(true)} style={{ background: 'var(--color-success)' }}>Simulate Success Payment</button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Main Page Layout (Behind Modal) */}
      <div className="responsive-flex" style={{ display: 'flex', gap: '4rem', filter: status === 'gateway' || status === 'processing' ? 'blur(3px)' : 'none', transition: 'all 0.3s', opacity: status === 'processing' ? 0.6 : 1 }}>
        
        {/* Left Side: Order Summary */}
        <div style={{ flex: '1', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '2rem', alignSelf: 'flex-start' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
            Order Summary 
            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', fontWeight: 400 }}>#SDE991</span>
          </h2>
          
          <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
               <div>
                 <div style={{ fontWeight: 600 }}>16A Socket Combo</div>
                 <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>Qty: 5</div>
               </div>
               <div style={{ fontWeight: 600 }}>₹945.00</div>
             </div>
             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <div>
                 <div style={{ fontWeight: 600 }}>Standard Junction Box</div>
                 <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>Qty: 2</div>
               </div>
               <div style={{ fontWeight: 600 }}>₹70.00</div>
             </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--color-text-light)' }}>
            <span>Subtotal</span>
            <span>₹1,015.00</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--color-text-light)' }}>
            <span>Shipping</span>
            <span>₹100.00</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
            <span>Tax (GST 18%)</span>
            <span>₹135.00</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px dashed var(--color-border)', paddingTop: '1.5rem', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>
            <span>Total</span>
            <span>₹1,250.00</span>
          </div>
        </div>

        {/* Right Side: Secure Checkout Entry */}
        <div style={{ flex: '1.5', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-success)' }}>
            <Lock size={20} /> <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>Secure Checkout</h2>
          </div>

          <div style={{ background: 'var(--color-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Pay securely with SDE Checkout</h3>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', marginBottom: '1rem' }}>Click below to open our secure payment gateway window. We support all major UPI apps, credit cards, and 50+ netbanking nodes.</p>
            
            <button disabled={status === 'processing' || status === 'success'} className="btn btn-primary" onClick={handleOpenGateway} style={{ padding: '1.25rem', fontSize: '1.1rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
              {status === 'processing' ? <><RefreshCcw className="spin" /> Processing...</> : `Proceed to Pay ₹1,250.00`}
            </button>
          </div>
          
          <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
            Guaranteed safe & secure checkout. 256-bit encryption.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
