import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Added useNavigate

export default function SupplierSignup() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // 2. Initialize the navigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Supplier signup successful:', formData);
    
    // 3. Trigger the route to the dashboard
    navigate('/supplierdashboard'); 
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <p style={styles.subheading}>
          Become a <span style={styles.green}>supplier?</span>{' '}
          <span style={styles.blue}>sign up</span>
        </p>

        <label style={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Business Name</label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <div style={styles.buttonWrapper}>
          <button type="submit" style={styles.button}>
            Signup
          </button>
        </div>

        <p style={styles.loginText}>
          Already have an account?{' '}
          <Link to="/login" style={styles.loginLink}>Login</Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    minHeight: '100vh',
  },
  form: {
    width: '320px',
  },
  subheading: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#000',
  },
  green: {
    color: '#22c55e',
    fontWeight: '500',
  },
  blue: {
    color: '#3b82f6',
    fontWeight: '500',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    marginTop: '16px',
    marginBottom: '6px',
    color: '#000',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #000',
    borderRadius: '6px',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '16px',
  },
  button: {
    backgroundColor: '#1d4ed8',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  loginText: {
    textAlign: 'center',
    marginTop: '60px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#000',
  },
  loginLink: {
    color: '#1d4ed8',
    textDecoration: 'none',
  },
};