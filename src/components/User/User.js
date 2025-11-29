// src/User/User.js - Fixed Version
import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Sidebar/Meterial/Dashboard/Dashboard';
import Appointment from './Sidebar/Meterial/Appointment/Appointment';
import Medical from './Sidebar/Meterial/Medical Record/Medical';
import Doctors from './Sidebar/Meterial/Doctors/Doctors';
import Settings from './Sidebar/Meterial/Setttings/Settings';
import './User.css';

const User = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Debug function to check state
  const toggleSidebar = () => {
    console.log('Current sidebar state:', sidebarOpen);
    setSidebarOpen(prevState => !prevState);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setSidebarOpen(false); // Close sidebar when section changes
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'appointment':
        return <Appointment />;
      case 'medical':
        return <Medical />;
      case 'doctors':
        return <Doctors />;
      case 'settings':
        return <Settings user={user} />;
      default:
        return <Dashboard user={user} />;
    }
  };

  return (
    <div className="user-dashboard">
      <nav className="dashboard-nav">
        <div className="nav-left">
          <button 
            className="hamburger-btn"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="nav-brand">
            <i className="fas fa-stethoscope"></i>
            <span>MediCare Pro</span>
          </div>
        </div>
        <div className="nav-user">
          <i className="fas fa-user-circle"></i>
          <span>Welcome, {user?.name}</span>
          <button className="logout-btn" onClick={onLogout}>
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <Sidebar 
          activeSection={activeSection}
          setActiveSection={handleSectionChange}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        
        <main className="main-content">
          <div className="content-header">
            <h1>
              {activeSection === 'dashboard' && 'Patient Dashboard'}
              {activeSection === 'appointment' && 'Appointment Management'}
              {activeSection === 'medical' && 'Medical Records'}
              {activeSection === 'doctors' && 'Our Doctors'}
              {activeSection === 'settings' && 'Account Settings'}
            </h1>
            <p>
              {activeSection === 'dashboard' && 'Overview of your health management'}
              {activeSection === 'appointment' && 'Schedule and manage your appointments'}
              {activeSection === 'medical' && 'View your medical history and records'}
              {activeSection === 'doctors' && 'Browse our specialist doctors'}
              {activeSection === 'settings' && 'Manage your account preferences'}
            </p>
          </div>

          <div className="content-body">
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default User;