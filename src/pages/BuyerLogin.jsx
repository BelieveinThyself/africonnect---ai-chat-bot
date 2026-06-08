import React from 'react';

export default function BuyerLogin() {
  return (
    <div style={{
      maxWidth: '1200px', 
      margin: '60px auto', 
      padding: '0 20px',
      display: 'flex', 
      gap: '40px', 
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }}>
      
      {/* LEFT SIDE */}
      <div style={{flex: '1 1 500px', minWidth: '300px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '14px', marginBottom: '16px'}}>
          🔒 Restricted Action
        </div>
        
        <h1 style={{fontSize: '32px', fontWeight: '700', margin: '0 0 12px 0', color: '#111'}}>
          Join the Network Of 2000+ buyers
        </h1>
        
        <p style={{fontSize: '16px', color: '#555', lineHeight: '1.5', marginBottom: '32px'}}>
          Access the leading industrial marketplace for African raw materials.
          Verify your business to start submitting inquiries and closing deals.
        </p>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
          <div style={{background: '#eef5ff', padding: '20px', borderRadius: '12px', border: '1px solid #d9e8ff'}}>
            <div style={{fontSize: '20px', marginBottom: '8px'}}>🛡️</div>
            <h3 style={{margin: '0 0 6px 0', fontSize: '16px'}}>Verified Supplier Access</h3>
            <p style={{margin: 0, fontSize: '14px', color: '#555'}}>Connect exclusively with trusted suppliers across the continent.</p>
          </div>

          <div style={{background: '#eef5ff', padding: '20px', borderRadius: '12px', border: '1px solid #d9e8ff'}}>
            <div style={{fontSize: '20px', marginBottom: '8px'}}>📄</div>
            <h3 style={{margin: '0 0 6px 0', fontSize: '16px'}}>Secure RFQ Management</h3>
            <p style={{margin: 0, fontSize: '14px', color: '#555'}}>Track your requests for quotation in a centralized, professional dashboard.</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE LOGIN CARD */}
      <div style={{
        flex: '0 1 380px', 
        minWidth: '320px', 
        border: '1px solid #e0e0e0', 
        borderRadius: '12px', 
        padding: '32px',
        background: 'white'
      }}>
        <h2 style={{textAlign: 'center', margin: '0 0 8px 0', fontSize: '22px'}}>Get Started</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '14px', margin: '0 0 24px 0'}}>
          Choose how you want to access the platform
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <label style={{fontSize: '14px', color: '#333', marginBottom: '6px', display: 'block'}}>Email</label>
          <input type="email" placeholder="johndoe@gmail.com" 
            style={{width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box'}} />
          
          <label style={{fontSize: '14px', color: '#333', marginBottom: '6px', display: 'block'}}>Password</label>
          <input type="password" placeholder="••••" 
            style={{width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box'}} />

          <button type="submit" 
            style={{width: '100%', padding: '14px', background: 'black', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: '600'}}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
