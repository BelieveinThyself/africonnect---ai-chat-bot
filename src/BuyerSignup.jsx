import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BuyerSignup.css';

export default function BuyerSignup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Buyer data:', form);
    // For now just go to dashboard after signup
    navigate('/buyer/dashboard');
  };

  return (
    <div className="signup-container">
      {/* Left side - Logo */}
      <div className="signup-left">
        <img src="/assets2/africonnect-logo.png" alt="AFRICONNECT Logo" className="signup-logo" />
        <p className="tagline">SOURCE SMARTER. CONNECT AFRICA.</p>
      </div>

      {/* Right side - Form */}
      <div className="signup-right">
        <div className="signup-form-wrapper">
          <div className="form-header">
            <img src="/assets2/africonnect-icon.png" alt="Icon" className="form-icon" />
            <h2>Create Buyer Account</h2>
            <p>Join thousands of businesses sourcing smarter</p>
          </div>

          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="Enter your full name" value={form.fullName} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" placeholder="Enter your phone" value={form.phone} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Create password" value={form.password} onChange={handleChange} required />
            </div>

            <button type="submit" className="signup-btn">Create Account</button>
          </form>

          <p className="login-link">Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
}
