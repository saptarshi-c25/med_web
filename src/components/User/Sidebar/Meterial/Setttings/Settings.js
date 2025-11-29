// src/User/Sidebar/Metarial/Settings/Settings.js
import React, { useState } from 'react';
import './Settings.css';

const Settings = ({ user }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1985-06-15',
    address: '123 Main Street, City, State 12345',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '+1 (555) 987-6543'
    }
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    prescriptionUpdates: true,
    newsletter: false
  });

  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    alert('Profile updated successfully!');
  };

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSecurityUpdate = (e) => {
    e.preventDefault();
    // Handle password change logic here
    alert('Password updated successfully!');
    setSecurity({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2>Account Settings</h2>
        <p>Manage your account preferences and security settings</p>
      </div>

      <div className="settings-layout">
        <div className="settings-sidebar">
          <div 
            className={`sidebar-tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <i className="fas fa-user"></i>
            <span>Profile Information</span>
          </div>
          <div 
            className={`sidebar-tab ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <i className="fas fa-bell"></i>
            <span>Notifications</span>
          </div>
          <div 
            className={`sidebar-tab ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <i className="fas fa-shield-alt"></i>
            <span>Security</span>
          </div>
          <div 
            className={`sidebar-tab ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            <i className="fas fa-lock"></i>
            <span>Privacy</span>
          </div>
        </div>

        <div className="settings-content">
          {activeTab === 'profile' && (
            <div className="tab-content">
              <h3>Personal Information</h3>
              <p className="tab-description">Update your personal details and contact information</p>
              
              <form onSubmit={handleProfileUpdate} className="settings-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    value={profileData.address}
                    onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                    rows="3"
                  />
                </div>

                <div className="emergency-contact">
                  <h4>Emergency Contact</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Contact Name</label>
                      <input
                        type="text"
                        value={profileData.emergencyContact.name}
                        onChange={(e) => setProfileData({
                          ...profileData, 
                          emergencyContact: {...profileData.emergencyContact, name: e.target.value}
                        })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Relationship</label>
                      <input
                        type="text"
                        value={profileData.emergencyContact.relationship}
                        onChange={(e) => setProfileData({
                          ...profileData, 
                          emergencyContact: {...profileData.emergencyContact, relationship: e.target.value}
                        })}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Contact Phone</label>
                    <input
                      type="tel"
                      value={profileData.emergencyContact.phone}
                      onChange={(e) => setProfileData({
                        ...profileData, 
                        emergencyContact: {...profileData.emergencyContact, phone: e.target.value}
                      })}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary">
                  <i className="fas fa-save"></i>
                  Save Changes
                </button>
              </form>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="tab-content">
              <h3>Notification Preferences</h3>
              <p className="tab-description">Choose how you want to receive notifications and updates</p>
              
              <div className="notification-settings">
                <div className="notification-item">
                  <div className="notification-info">
                    <h4>Email Notifications</h4>
                    <p>Receive important updates via email</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notifications.emailNotifications}
                      onChange={() => handleNotificationChange('emailNotifications')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h4>SMS Notifications</h4>
                    <p>Get text message alerts for urgent matters</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notifications.smsNotifications}
                      onChange={() => handleNotificationChange('smsNotifications')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h4>Appointment Reminders</h4>
                    <p>Reminders for upcoming appointments</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notifications.appointmentReminders}
                      onChange={() => handleNotificationChange('appointmentReminders')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h4>Prescription Updates</h4>
                    <p>Updates about your prescriptions and refills</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notifications.prescriptionUpdates}
                      onChange={() => handleNotificationChange('prescriptionUpdates')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h4>Newsletter</h4>
                    <p>Receive health tips and clinic news</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notifications.newsletter}
                      onChange={() => handleNotificationChange('newsletter')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="tab-content">
              <h3>Security Settings</h3>
              <p className="tab-description">Manage your password and account security</p>
              
              <form onSubmit={handleSecurityUpdate} className="settings-form">
                <div className="form-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    value={security.currentPassword}
                    onChange={(e) => setSecurity({...security, currentPassword: e.target.value})}
                    placeholder="Enter your current password"
                  />
                </div>

                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    value={security.newPassword}
                    onChange={(e) => setSecurity({...security, newPassword: e.target.value})}
                    placeholder="Enter your new password"
                  />
                </div>

                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    value={security.confirmPassword}
                    onChange={(e) => setSecurity({...security, confirmPassword: e.target.value})}
                    placeholder="Confirm your new password"
                  />
                </div>

                <div className="password-requirements">
                  <h4>Password Requirements:</h4>
                  <ul>
                    <li>At least 8 characters long</li>
                    <li>Contains uppercase and lowercase letters</li>
                    <li>Includes at least one number</li>
                    <li>Includes at least one special character</li>
                  </ul>
                </div>

                <button type="submit" className="btn-primary">
                  <i className="fas fa-key"></i>
                  Update Password
                </button>
              </form>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="tab-content">
              <h3>Privacy Settings</h3>
              <p className="tab-description">Control your privacy and data sharing preferences</p>
              
              <div className="privacy-settings">
                <div className="privacy-item">
                  <div className="privacy-info">
                    <h4>Data Sharing for Research</h4>
                    <p>Allow anonymous use of your medical data for research purposes</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="privacy-item">
                  <div className="privacy-info">
                    <h4>Third-party Integrations</h4>
                    <p>Share data with connected health apps and devices</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="privacy-item">
                  <div className="privacy-info">
                    <h4>Marketing Communications</h4>
                    <p>Receive offers and health-related product information</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="download-data">
                  <h4>Data Management</h4>
                  <p>Download a copy of your personal data or request account deletion</p>
                  <div className="data-actions">
                    <button className="btn-secondary">
                      <i className="fas fa-download"></i>
                      Download My Data
                    </button>
                    <button className="btn-danger">
                      <i className="fas fa-trash"></i>
                      Request Account Deletion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;