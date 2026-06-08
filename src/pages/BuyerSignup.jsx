import { Link, useNavigate } from 'react-router-dom';
import './BuyerSignup.css';

export default function BuyerSignup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // For now just go to dashboard after signup
    navigate('/buyer/dashboard');
  };

  return (
    <div className="signup-container">
      {/* Left side - Logo */}
      <div className="signup-left">
        <img 
          src="/assets2/africonnect-logo.png" 
          alt="AFRICONNECT Logo" 
          className="signup-logo"
        />
        <p className="tagline">SOURCE SMARTER. CONNECT AFRICA.</p>
      </div>

      {/* Right side - Form */}
      <div className="signup-right">
        <div className="signup-form-wrapper">
          <div className="form-header">
            <img src="/assets2/africonnect-icon.png" alt="Icon" className="form-icon" />
            <h2>Create Your Buyer Account</h2>
            <p>Join thousands of businesses sourcing smarter</p>
          </div>

          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email address" required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a strong password" required />
            </div>

            <div className="form-group">
              <label>Confirm password</label>
              <input type="password" placeholder="Confirm your password" required />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
            </div>

            <button type="submit" className="btn-create">Create Account</button>
          </form>

          <p className="login-link">
            Already have an account? <Link to="/buyer-login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}