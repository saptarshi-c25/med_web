import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/auth/Login';
import UserDashboard from './components/user/UserDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import DoctorDashboard from './components/doctor/DoctorDashboard';
import './styles/App.css';

function AppRoutes() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route 
        path="/login" 
        element={!user ? <Login /> : <Navigate to={`/${user.role}/dashboard`} />} 
      />
      <Route 
        path="/user/dashboard" 
        element={user?.role === 'user' ? <UserDashboard /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/admin/dashboard" 
        element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/doctor/dashboard" 
        element={user?.role === 'doctor' ? <DoctorDashboard /> : <Navigate to="/login" />} 
      />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;