// src/User/Sidebar/Sidebar.js - Fixed Version
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { key: 'dashboard', icon: 'fas fa-home', label: 'Dashboard' },
    { key: 'appointment', icon: 'fas fa-calendar-check', label: 'Appointments' },
    { key: 'medical', icon: 'fas fa-file-medical', label: 'Medical Records' },
    { key: 'doctors', icon: 'fas fa-user-md', label: 'Doctors' },
    { key: 'settings', icon: 'fas fa-cog', label: 'Settings' }
  ];

  const handleItemClick = (key) => {
    console.log('Menu item clicked:', key);
    setActiveSection(key);
    setSidebarOpen(false);
  };

  const handleCloseSidebar = () => {
    console.log('Closing sidebar');
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={handleCloseSidebar}
        ></div>
      )}

      <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h3>Patient Portal</h3>
          <button 
            className="close-sidebar"
            onClick={handleCloseSidebar}
            aria-label="Close sidebar"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="sidebar-menu">
          {menuItems.map(item => (
            <div
              key={item.key}
              className={`menu-item ${activeSection === item.key ? 'active' : ''}`}
              onClick={() => handleItemClick(item.key)}
            >
              <div className="menu-icon">
                <i className={item.icon}></i>
              </div>
              <span className="menu-label">{item.label}</span>
              <i className="fas fa-chevron-right menu-arrow"></i>
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              <i className="fas fa-user"></i>
            </div>
            <div className="user-details">
              <h4>Patient</h4>
              <p>Active</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;