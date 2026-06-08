import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Logic for authentication goes here
    console.log('Logging in with:', form);
    
    // Route to Supplier Dashboard
    navigate('/supplierdashboard'); 
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <p style={styles.subheading}>
          Welcome back to <span style={styles.green}>Africonnect</span>
        </p>
        
        <h2 style={styles.title}>Supplier Login</h2>

        <label style={styles.label}>Email</label>
        <input 
          type="email" 
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
          style={styles.input}
          required
        />

        <label style={styles.label}>Password</label>
        <input 
          type="password" 
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({...form, password: e.target.value})}
          style={styles.input}
          required
        />

        <div style={styles.buttonWrapper}>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </div>

        <p style={styles.footerText}>
          Don't have a supplier account?{' '}
          <Link to="/signup" style={styles.link}>Sign up</Link>
        </p>
        
        <p style={styles.footerText}>
          <Link to="/" style={styles.backHome}>← Back to Home</Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '60px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    minHeight: '100vh',
  },
  form: {
    width: '320px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: '700',
  },
  subheading: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#000',
  },
  green: {
    color: '#22c55e',
    fontWeight: '600',
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
    padding: '10px',
    border: '1px solid #000',
    borderRadius: '6px',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '24px',
  },
  button: {
    backgroundColor: '#1d4ed8', 
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
  },
  footerText: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
    color: '#000',
  },
  link: {
    color: '#1d4ed8',
    textDecoration: 'none',
    fontWeight: '600',
  },
  backHome: {
    color: '#666',
    textDecoration: 'none',
    fontSize: '12px',
  }
};

export default Login;