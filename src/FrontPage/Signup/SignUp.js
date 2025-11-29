// src/FrontPage/Signup/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    phone: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup data:', formData);
    // After successful signup, redirect to login
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <i className="fas fa-user-plus"></i>
          <h1>Create Account</h1>
          <p>Join MediCare Pro Today</p>
        </div>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <i className="fas fa-phone"></i>
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <i className="fas fa-user-tag"></i>
            <select 
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <option value="user">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          
          <button type="submit" className="signup-btn">
            <i className="fas fa-user-plus"></i>
            Create Account
          </button>
        </form>
        
        <div className="signup-footer">
          <p>Already have an account? <span className="link" onClick={() => navigate('/login')}>Login here</span></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;