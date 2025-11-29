import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import '../../styles/Sidebar.css';

const Sidebar = ({ menuItems, userType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {/* Hamburger Menu */}
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h2>Medical Portal</h2>
          <p>{user?.name} ({userType})</p>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="nav-button"
              onClick={item.action}
            >
              {item.icon && <span className="nav-icon">{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;