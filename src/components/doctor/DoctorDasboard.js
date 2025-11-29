import React, { useState } from 'react';
import Sidebar from '../common/Sidebar';
import '../../styles/Dashboard.css';

const DoctorDashboard = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const menuItems = [
    { label: 'Dashboard', action: () => setActiveView('dashboard'), icon: '📊' },
    { label: 'Today\'s Appointments', action: () => setActiveView('today'), icon: '📅' },
    { label: 'Patient Records', action: () => setActiveView('patients'), icon: '👥' },
    { label: 'Write Prescription', action: () => setActiveView('prescribe'), icon: '💊' },
    { label: 'Schedule', action: () => setActiveView('schedule'), icon: '⏰' }
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <div className="dashboard-content">
            <h1>Doctor Dashboard</h1>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Today's Appointments</h3>
                <p className="stat-number">8</p>
              </div>
              <div className="stat-card">
                <h3>Patients This Week</h3>
                <p className="stat-number">32</p>
              </div>
              <div className="stat-card">
                <h3>Pending Prescriptions</h3>
                <p className="stat-number">5</p>
              </div>
            </div>
          </div>
        );
      case 'today':
        return <div className="dashboard-content"><h1>Today's Appointments</h1></div>;
      case 'patients':
        return <div className="dashboard-content"><h1>Patient Records</h1></div>;
      case 'prescribe':
        return <div className="dashboard-content"><h1>Write Prescription</h1></div>;
      case 'schedule':
        return <div className="dashboard-content"><h1>Schedule Management</h1></div>;
      default:
        return <div className="dashboard-content"><h1>Doctor Dashboard</h1></div>;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar menuItems={menuItems} userType="Doctor" />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default DoctorDashboard;