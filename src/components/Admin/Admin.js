// src/components/Admin/Admin.js
import React from 'react';
import './Admin.css';

const Admin = ({ user , onLogout}) => {
  const systemStats = [
    { label: 'Total Users', value: '1,234', icon: 'fas fa-users' },
    { label: 'Active Doctors', value: '45', icon: 'fas fa-user-md' },
    { label: 'Today Appointments', value: '89', icon: 'fas fa-calendar-check' },
    { label: 'Revenue', value: '$12,567', icon: 'fas fa-dollar-sign' }
  ];

  const recentActivities = [
    { id: 1, action: 'New user registration', user: 'john@email.com', time: '2 mins ago' },
    { id: 2, action: 'Appointment scheduled', user: 'Dr. Smith', time: '5 mins ago' },
    { id: 3, action: 'Prescription created', user: 'Dr. Johnson', time: '10 mins ago' },
    { id: 4, action: 'Payment received', user: 'jane@email.com', time: '15 mins ago' }
  ];

  return (
    <div className="admin-dashboard">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <i className="fas fa-stethoscope"></i>
          <span>MediCare Pro</span>
        </div>
        <div className="nav-user">
  <i className="fas fa-user-md"></i> {/* or fas fa-user-shield for admin */}
  <span>Dr. {user?.name}</span> {/* or Admin {user?.name} for admin */}
  <button className="logout-btn" onClick={onLogout}>
    <i className="fas fa-sign-out-alt"></i>
    Logout
  </button>
</div>

      </nav>

      <div className="dashboard-content">
        <div className="sidebar">
          <div className="sidebar-menu">
            <div className="menu-item active">
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-users-cog"></i>
              <span>User Management</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-hospital-user"></i>
              <span>Doctor Management</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-calendar-alt"></i>
              <span>Appointments</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-chart-bar"></i>
              <span>Analytics</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-cogs"></i>
              <span>System Settings</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-file-invoice-dollar"></i>
              <span>Billing</span>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="content-header">
            <h1>Admin Dashboard</h1>
            <p>Manage the entire healthcare system</p>
          </div>

          <div className="stats-cards">
            {systemStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-info">
                  <h3>{stat.label}</h3>
                  <p>{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dashboard-grid">
            <div className="recent-activities">
              <h2>Recent Activities</h2>
              <div className="activities-list">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-dot"></div>
                    <div className="activity-content">
                      <p className="activity-action">{activity.action}</p>
                      <p className="activity-meta">
                        <span className="activity-user">{activity.user}</span>
                        <span className="activity-time">{activity.time}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="quick-stats">
              <h2>System Overview</h2>
              <div className="system-stats">
                <div className="system-stat">
                  <div className="stat-label">
                    <i className="fas fa-server"></i>
                    <span>System Health</span>
                  </div>
                  <div className="stat-value excellent">Excellent</div>
                </div>
                <div className="system-stat">
                  <div className="stat-label">
                    <i className="fas fa-database"></i>
                    <span>Storage Used</span>
                  </div>
                  <div className="stat-value">65%</div>
                </div>
                <div className="system-stat">
                  <div className="stat-label">
                    <i className="fas fa-shield-alt"></i>
                    <span>Security Status</span>
                  </div>
                  <div className="stat-value secure">Secure</div>
                </div>
                <div className="system-stat">
                  <div className="stat-label">
                    <i className="fas fa-sync-alt"></i>
                    <span>Last Backup</span>
                  </div>
                  <div className="stat-value">2 hours ago</div>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-actions">
            <h2>Quick Admin Actions</h2>
            <div className="action-grid">
              <button className="admin-action-btn">
                <i className="fas fa-user-plus"></i>
                Add New User
              </button>
              <button className="admin-action-btn">
                <i className="fas fa-user-md"></i>
                Register Doctor
              </button>
              <button className="admin-action-btn">
                <i className="fas fa-file-medical"></i>
                Generate Reports
              </button>
              <button className="admin-action-btn">
                <i className="fas fa-cog"></i>
                System Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;