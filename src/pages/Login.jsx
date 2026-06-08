import { Link } from 'react-router-dom';
import './Login.css';

export default function BuyerLogin() {
  return (
    <div className="login-page">
      {/* Nav */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo-area">
            <img src="/images/logo.png" alt="Africonnect" className="logo" />
            <span className="brand">AFRICONNECT</span>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/marketplace" className="active">Marketplace</Link>
            <Link to="/logistics">Logistics</Link>
          </div>
          <button className="menu-btn">☰</button>
        </div>
      </nav>

      {/* Main */}
      <div className="main-container">
        
        {/* Left */}
        <div className="left-side">
          <p className="restricted-badge">🔒 Restricted Action</p>
          
          <h1 className="main-title">Join the Network Of 2000+ buyers</h1>
          
          <p className="subtitle">
            Access the leading industrial marketplace for African raw materials. 
            Verify your business to start submitting inquiries and closing deals.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">🛡️</div>
              <h3>Verified Supplier Access</h3>
              <p>Connect exclusively with trusted suppliers across the continent.</p>
            </div>

            <div className="feature-card">
              <div className="icon">📄</div>
              <h3>Secure RFQ Management</h3>
              <p>Track your requests for quotation in a centralized, professional dashboard.</p>
            </div>

            <div className="feature-card">
              <div className="icon">💬</div>
              <h3>Direct Communication</h3>
              <p>Encrypted messaging channels for seamless negotiations with suppliers</p>
            </div>

            <div className="feature-card">
              <div className="icon">📈</div>
              <h3>Real-time Pricing</h3>
              <p>Stay ahead with live market prices.</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="form-card">
          <h2>Get Started</h2>
          <p className="form-subtitle">Choose how you want to access the platform</p>

          <button className="google-btn">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="divider">
            <span></span>
            <p>OR SIGN IN</p>
            <span></span>
          </div>

          <form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="johndoe@gmail.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••" />
            </div>

            <button type="submit" className="signin-btn">Sign In</button>

            <div className="forgot-link">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
