// src/User/Sidebar/Metarial/Appointment/Appointment.js
import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, doctor: 'Dr. Sarah Johnson', specialty: 'Cardiology', date: '2024-02-15', time: '10:00 AM', status: 'Confirmed', type: 'Regular Checkup' },
    { id: 2, doctor: 'Dr. Mike Chen', specialty: 'Dermatology', date: '2024-02-18', time: '2:30 PM', status: 'Pending', type: 'Consultation' },
    { id: 3, doctor: 'Dr. Emily Davis', specialty: 'Pediatrics', date: '2024-02-20', time: '11:15 AM', status: 'Confirmed', type: 'Follow-up' }
  ]);

  const [showBookForm, setShowBookForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    doctor: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleBookAppointment = (e) => {
    e.preventDefault();
    const appointment = {
      id: appointments.length + 1,
      doctor: newAppointment.doctor || 'Dr. Smith',
      specialty: 'General',
      date: newAppointment.date,
      time: newAppointment.time,
      status: 'Pending',
      type: newAppointment.reason
    };
    setAppointments([...appointments, appointment]);
    setNewAppointment({ doctor: '', date: '', time: '', reason: '' });
    setShowBookForm(false);
  };

  const cancelAppointment = (id) => {
    setAppointments(appointments.filter(apt => apt.id !== id));
  };

  return (
    <div className="appointment-container">
      <div className="appointment-header">
        <div className="header-left">
          <h2>My Appointments</h2>
          <p>Manage your scheduled appointments</p>
        </div>
        <button 
          className="btn-primary"
          onClick={() => setShowBookForm(true)}
        >
          <i className="fas fa-plus"></i>
          Book New Appointment
        </button>
      </div>

      {showBookForm && (
        <div className="booking-form-overlay">
          <div className="booking-form">
            <div className="form-header">
              <h3>Book New Appointment</h3>
              <button 
                className="close-btn"
                onClick={() => setShowBookForm(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleBookAppointment}>
              <div className="form-group">
                <label>Select Doctor</label>
                <select 
                  value={newAppointment.doctor}
                  onChange={(e) => setNewAppointment({...newAppointment, doctor: e.target.value})}
                  required
                >
                  <option value="">Choose a doctor</option>
                  <option value="Dr. Sarah Johnson">Dr. Sarah Johnson - Cardiology</option>
                  <option value="Dr. Mike Chen">Dr. Mike Chen - Dermatology</option>
                  <option value="Dr. Emily Davis">Dr. Emily Davis - Pediatrics</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date</label>
                <input 
                  type="date" 
                  value={newAppointment.date}
                  onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input 
                  type="time" 
                  value={newAppointment.time}
                  onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Reason for Visit</label>
                <textarea 
                  value={newAppointment.reason}
                  onChange={(e) => setNewAppointment({...newAppointment, reason: e.target.value})}
                  placeholder="Describe your symptoms or reason for appointment..."
                  required
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="button" onClick={() => setShowBookForm(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Book Appointment</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="appointments-grid">
        {appointments.map(appointment => (
          <div key={appointment.id} className="appointment-card">
            <div className="appointment-info">
              <div className="doctor-info">
                <h4>{appointment.doctor}</h4>
                <p className="specialty">{appointment.specialty}</p>
              </div>
              <div className="appointment-details">
                <div className="detail-item">
                  <i className="fas fa-calendar"></i>
                  <span>{appointment.date}</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-clock"></i>
                  <span>{appointment.time}</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-stethoscope"></i>
                  <span>{appointment.type}</span>
                </div>
              </div>
            </div>
            <div className="appointment-actions">
              <div className={`status-badge ${appointment.status.toLowerCase()}`}>
                {appointment.status}
              </div>
              <button 
                className="btn-cancel"
                onClick={() => cancelAppointment(appointment.id)}
              >
                <i className="fas fa-times"></i>
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>

      {appointments.length === 0 && (
        <div className="empty-state">
          <i className="fas fa-calendar-times"></i>
          <h3>No Appointments</h3>
          <p>You don't have any appointments scheduled yet.</p>
          <button 
            className="btn-primary"
            onClick={() => setShowBookForm(true)}
          >
            Book Your First Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default Appointment;