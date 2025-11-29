// src/User/Sidebar/Metarial/Dashboard/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  const stats = [
    { 
      title: 'Upcoming Appointments', 
      value: '2', 
      icon: 'fas fa-calendar-check',
      color: '#1e3c72',
      change: '+1 this week'
    },
    { 
      title: 'Medical Records', 
      value: '5', 
      icon: 'fas fa-file-medical',
      color: '#28a745',
      change: '2 new tests'
    },
    { 
      title: 'Prescriptions', 
      value: '3', 
      icon: 'fas fa-prescription',
      color: '#dc3545',
      change: '1 active'
    },
    { 
      title: 'Doctors Visited', 
      value: '4', 
      icon: 'fas fa-user-md',
      color: '#ffc107',
      change: '2 specialists'
    }
  ];

  const recentActivity = [
    { id: 1, type: 'appointment', message: 'Appointment with Dr. Sarah Johnson', date: '2024-02-15', status: 'confirmed' },
    { id: 2, type: 'prescription', message: 'Prescription refill approved', date: '2024-02-10', status: 'completed' },
    { id: 3, type: 'test', message: 'Blood test results available', date: '2024-02-08', status: 'new' },
    { id: 4, type: 'appointment', message: 'Appointment reminder: Tomorrow 10 AM', date: '2024-02-14', status: 'upcoming' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return '#28a745';
      case 'completed': return '#6c757d';
      case 'new': return '#17a2b8';
      case 'upcoming': return '#ffc107';
      default: return '#6c757d';
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-welcome">
        <div className="welcome-content">
          <h2>Welcome back, {user?.name || 'Patient'}!</h2>
          <p>Here's your health overview for today</p>
        </div>
        <div className="welcome-actions">
          <button className="btn-primary">
            <i className="fas fa-plus"></i>
            Book Appointment
          </button>
          <button className="btn-secondary">
            <i className="fas fa-download"></i>
            Download Records
          </button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>
              <i className={stat.icon}></i>
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {recentActivity.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  <i className={`fas fa-${
                    activity.type === 'appointment' ? 'calendar-check' :
                    activity.type === 'prescription' ? 'prescription' : 'vial'
                  }`}></i>
                </div>
                <div className="activity-content">
                  <p>{activity.message}</p>
                  <span className="activity-date">{activity.date}</span>
                </div>
                <div 
                  className="activity-status"
                  style={{ backgroundColor: getStatusColor(activity.status) }}
                >
                  {activity.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="actions-grid">
            <button className="action-btn">
              <i className="fas fa-calendar-plus"></i>
              <span>Book Appointment</span>
            </button>
            <button className="action-btn">
              <i className="fas fa-file-medical"></i>
              <span>View Records</span>
            </button>
            <button className="action-btn">
              <i className="fas fa-prescription"></i>
              <span>Request Refill</span>
            </button>
            <button className="action-btn">
              <i className="fas fa-user-md"></i>
              <span>Find Doctor</span>
            </button>
            <button className="action-btn">
              <i className="fas fa-bell"></i>
              <span>Set Reminder</span>
            </button>
            <button className="action-btn">
              <i className="fas fa-share-alt"></i>
              <span>Share Records</span>
            </button>
          </div>
        </div>
      </div>

      <div className="health-tips">
        <h3>Health Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <i className="fas fa-heartbeat"></i>
            <h4>Stay Hydrated</h4>
            <p>Drink at least 8 glasses of water daily for optimal health.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-walking"></i>
            <h4>Daily Exercise</h4>
            <p>30 minutes of moderate exercise can improve cardiovascular health.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-apple-alt"></i>
            <h4>Balanced Diet</h4>
            <p>Include fruits and vegetables in every meal for essential nutrients.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;