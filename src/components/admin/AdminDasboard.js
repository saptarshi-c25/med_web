import React, { useState } from 'react';
import Sidebar from '../common/Sidebar';
import '../../styles/Dashboard.css';

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const menuItems = [
    { label: 'Dashboard', action: () => setActiveView('dashboard'), icon: '📊' },
    { label: 'User Management', action: () => setActiveView('users'), icon: '👥' },
    { label: 'Appointment Management', action: () => setActiveView('appointments'), icon: '📅' },
    { label: 'System Settings', action: () => setActiveView('settings'), icon: '⚙️' },
    { label: 'Reports', action: () => setActiveView('reports'), icon: '📈' }
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <div className="dashboard-content">
            <h1>Admin Dashboard</h1>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Users</h3>
                <p className="stat-number">1,247</p>
              </div>
              <div className="stat-card">
                <h3>Active Doctors</h3>
                <p className="stat-number">45</p>
              </div>
              <div className="stat-card">
                <h3>Today's Appointments</h3>
                <p className="stat-number">89</p>
              </div>
            </div>
          </div>
        );
      case 'users':
        return <div className="dashboard-content"><h1>User Management</h1></div>;
      case 'appointments':
        return <div className="dashboard-content"><h1>Appointment Management</h1></div>;
      case 'settings':
        return <div className="dashboard-content"><h1>System Settings</h1></div>;
      case 'reports':
        return <div className="dashboard-content"><h1>Reports & Analytics</h1></div>;
      default:
        return <div className="dashboard-content"><h1>Admin Dashboard</h1></div>;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar menuItems={menuItems} userType="Administrator" />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;