// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FrontPage from './FrontPage/FrontPage';
import UserDashboard from './components/User/User';
import DoctorDashboard from './components/Doctor/Doctor';
import AdminDashboard from './components/Admin/Admin';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // Function to handle logout
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* FrontPage routes (login/signup) */}
          <Route path="/*" element={<FrontPage setUser={setUser} />} />
          
          {/* Protected Dashboard routes */}
          <Route 
            path="/user/*" 
            element={
              user?.role === 'user' ? 
              <UserDashboard user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/doctor/*" 
            element={
              user?.role === 'doctor' ? 
              <DoctorDashboard user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/admin/*" 
            element={
              user?.role === 'admin' ? 
              <AdminDashboard user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;