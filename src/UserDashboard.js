import React, { useState } from 'react';
import Sidebar from '../common/Sidebar';
import '../../styles/Dashboard.css';

const UserDashboard = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const menuItems = [
    { label: 'Dashboard', action: () => setActiveView('dashboard'), icon: '📊' },
    { label: 'Appointments', action: () => setActiveView('appointments'), icon: '📅' },
    { label: 'Medical Records', action: () => setActiveView('records'), icon: '🏥' },
    { label: 'Prescriptions', action: () => setActiveView('prescriptions'), icon: '💊' },
    { label: 'Profile', action: () => setActiveView('profile'), icon: '👤' }
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <div className="dashboard-content">
            <h1>Patient Dashboard</h1>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Upcoming Appointments</h3>
                <p className="stat-number">2</p>
              </div>
              <div className="stat-card">
                <h3>Medical Records</h3>
                <p className="stat-number">5</p>
              </div>
              <div className="stat-card">
                <h3>Active Prescriptions</h3>
                <p className="stat-number">3</p>
              </div>
            </div>
          </div>
        );
      case 'appointments':
        return <div className="dashboard-content"><h1>My Appointments</h1></div>;
      case 'records':
        return <div className="dashboard-content"><h1>Medical Records</h1></div>;
      case 'prescriptions':
        return <div className="dashboard-content"><h1>Prescriptions</h1></div>;
      case 'profile':
        return <div className="dashboard-content"><h1>Profile Settings</h1></div>;
      default:
        return <div className="dashboard-content"><h1>Dashboard</h1></div>;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar menuItems={menuItems} userType="Patient" />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default UserDashboard;