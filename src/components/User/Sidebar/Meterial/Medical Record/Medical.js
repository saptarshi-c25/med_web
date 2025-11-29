// src/User/Sidebar/Metarial/Medical Record/Medical.js
import React, { useState } from 'react';
import './Medical.css';

const Medical = () => {
  const [medicalRecords] = useState([
    { 
      id: 1, 
      date: '2024-01-15', 
      doctor: 'Dr. Sarah Johnson', 
      type: 'Blood Test', 
      diagnosis: 'Normal results',
      prescription: 'None',
      notes: 'Routine checkup - all parameters within normal range'
    },
    { 
      id: 2, 
      date: '2023-12-10', 
      doctor: 'Dr. Mike Chen', 
      type: 'Consultation', 
      diagnosis: 'Seasonal Allergy',
      prescription: 'Antihistamines - 1 tablet daily',
      notes: 'Patient presented with seasonal allergy symptoms. Recommended OTC medication.'
    },
    { 
      id: 3, 
      date: '2023-11-05', 
      doctor: 'Dr. Emily Davis', 
      type: 'X-Ray', 
      diagnosis: 'No fractures detected',
      prescription: 'Pain relief medication as needed',
      notes: 'X-ray of right wrist following minor injury. No fractures detected.'
    }
  ]);

  const [selectedRecord, setSelectedRecord] = useState(null);

  return (
    <div className="medical-container">
      <div className="medical-header">
        <h2>Medical Records</h2>
        <p>Your complete medical history and test results</p>
      </div>

      <div className="medical-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-file-medical"></i>
          </div>
          <div className="stat-info">
            <h3>Total Records</h3>
            <p>{medicalRecords.length}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-calendar-check"></i>
          </div>
          <div className="stat-info">
            <h3>Last Visit</h3>
            <p>15 Jan 2024</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-prescription"></i>
          </div>
          <div className="stat-info">
            <h3>Active Prescriptions</h3>
            <p>1</p>
          </div>
        </div>
      </div>

      <div className="records-section">
        <h3>Medical History</h3>
        <div className="records-list">
          {medicalRecords.map(record => (
            <div 
              key={record.id} 
              className={`record-card ${selectedRecord?.id === record.id ? 'active' : ''}`}
              onClick={() => setSelectedRecord(record)}
            >
              <div className="record-header">
                <div className="record-date">
                  <i className="fas fa-calendar"></i>
                  {record.date}
                </div>
                <div className="record-type">
                  {record.type}
                </div>
              </div>
              <div className="record-doctor">
                <i className="fas fa-user-md"></i>
                {record.doctor}
              </div>
              <div className="record-diagnosis">
                <strong>Diagnosis:</strong> {record.diagnosis}
              </div>
              <div className="record-actions">
                <button className="btn-view">
                  <i className="fas fa-eye"></i>
                  View Details
                </button>
                <button className="btn-download">
                  <i className="fas fa-download"></i>
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedRecord && (
        <div className="record-detail-overlay">
          <div className="record-detail">
            <div className="detail-header">
              <h3>Medical Record Details</h3>
              <button 
                className="close-btn"
                onClick={() => setSelectedRecord(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="detail-content">
              <div className="detail-row">
                <label>Date:</label>
                <span>{selectedRecord.date}</span>
              </div>
              <div className="detail-row">
                <label>Doctor:</label>
                <span>{selectedRecord.doctor}</span>
              </div>
              <div className="detail-row">
                <label>Visit Type:</label>
                <span>{selectedRecord.type}</span>
              </div>
              <div className="detail-row">
                <label>Diagnosis:</label>
                <span>{selectedRecord.diagnosis}</span>
              </div>
              <div className="detail-row">
                <label>Prescription:</label>
                <span>{selectedRecord.prescription}</span>
              </div>
              <div className="detail-row">
                <label>Doctor's Notes:</label>
                <p>{selectedRecord.notes}</p>
              </div>
            </div>
            <div className="detail-actions">
              <button className="btn-primary">
                <i className="fas fa-print"></i>
                Print Record
              </button>
              <button className="btn-secondary">
                <i className="fas fa-share"></i>
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Medical;