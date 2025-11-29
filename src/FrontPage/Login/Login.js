// src/FrontPage/Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setUser }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    role: 'user'
  });
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate authentication - In real app, this would be an API call
    const userData = {
      email: credentials.email,
      role: credentials.role,
      name: credentials.role === 'admin' ? 'Admin' : 
            credentials.role === 'doctor' ? 'Dr. Smith' : 'John Doe',
      id: Math.random().toString(36).substr(2, 9)
    };
    
    // Set user in parent component
    setUser(userData);
    
    // Navigate to respective dashboard based on role
    switch(credentials.role) {
      case 'admin':
        navigate('/admin');
        break;
      case 'doctor':
        navigate('/doctor');
        break;
      case 'user':
      default:
        navigate('/user');
        break;
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <i className="fas fa-stethoscope"></i>
          <h1>MediCare Pro</h1>
          <p>Secure Medical Portal</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email Address"
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <i className="fas fa-user-tag"></i>
            <select 
              value={credentials.role}
              onChange={(e) => setCredentials({...credentials, role: e.target.value})}
            >
              <option value="user">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
          
          <button type="submit" className="login-btn">
            <i className="fas fa-sign-in-alt"></i>
            Login to Dashboard
          </button>
        </form>
        
        <div className="login-footer">
          <p>Don't have an account? <span className="link" onClick={() => navigate('/signup')}>Sign up here</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;