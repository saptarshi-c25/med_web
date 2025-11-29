// src/components/Doctor/Doctor.js
import React from 'react';
import './Doctor.css';

const Doctor = ({ user, onLogout }) => {
  const todayAppointments = [
    { id: 1, patient: 'John Doe', time: '10:00 AM', type: 'Checkup', status: 'Scheduled' },
    { id: 2, patient: 'Jane Smith', time: '11:30 AM', type: 'Consultation', status: 'Scheduled' },
    { id: 3, patient: 'Mike Johnson', time: '2:00 PM', type: 'Follow-up', status: 'Scheduled' }
  ];

  return (
    <div className="doctor-dashboard">
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
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-calendar-alt"></i>
              <span>Schedule</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-users"></i>
              <span>Patients</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-file-prescription"></i>
              <span>Prescriptions</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-chart-line"></i>
              <span>Reports</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="content-header">
            <h1>Doctor Dashboard</h1>
            <p>Manage your practice and patient care</p>
          </div>

          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-calendar-day"></i>
              </div>
              <div className="stat-info">
                <h3>Today's Appointments</h3>
                <p>{todayAppointments.length}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-user-injured"></i>
              </div>
              <div className="stat-info">
                <h3>Total Patients</h3>
                <p>156</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="stat-info">
                <h3>Waiting Patients</h3>
                <p>3</p>
              </div>
            </div>
          </div>

          <div className="appointments-section">
            <h2>Today's Schedule</h2>
            <div className="appointments-table">
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Patient</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {todayAppointments.map(appointment => (
                    <tr key={appointment.id}>
                      <td>{appointment.time}</td>
                      <td>{appointment.patient}</td>
                      <td>{appointment.type}</td>
                      <td>
                        <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                          {appointment.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn primary">
                          <i className="fas fa-play"></i>
                          Start
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="action-buttons">
              <button className="action-btn large">
                <i className="fas fa-plus"></i>
                New Appointment
              </button>
              <button className="action-btn large">
                <i className="fas fa-file-medical"></i>
                Write Prescription
              </button>
              <button className="action-btn large">
                <i className="fas fa-notes-medical"></i>
                Medical Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;