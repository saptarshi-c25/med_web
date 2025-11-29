// src/User/Sidebar/Metarial/Doctors/Doctors.js
import React, { useState } from 'react';
import './Doctors.css';

const Doctors = () => {
  const [doctors] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      experience: '15 years',
      rating: 4.8,
      reviews: 124,
      education: 'MD, Harvard Medical School',
      languages: ['English', 'Spanish'],
      availability: 'Mon, Wed, Fri',
      image: '👩‍⚕️'
    },
    {
      id: 2,
      name: 'Dr. Mike Chen',
      specialty: 'Dermatology',
      experience: '12 years',
      rating: 4.9,
      reviews: 98,
      education: 'MD, Stanford University',
      languages: ['English', 'Mandarin'],
      availability: 'Tue, Thu, Sat',
      image: '👨‍⚕️'
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      specialty: 'Pediatrics',
      experience: '10 years',
      rating: 4.7,
      reviews: 156,
      education: 'MD, Johns Hopkins University',
      languages: ['English', 'French'],
      availability: 'Mon-Fri',
      image: '👩‍⚕️'
    },
    {
      id: 4,
      name: 'Dr. Robert Wilson',
      specialty: 'Orthopedics',
      experience: '18 years',
      rating: 4.6,
      reviews: 203,
      education: 'MD, Mayo Medical School',
      languages: ['English', 'German'],
      availability: 'Wed, Thu, Fri',
      image: '👨‍⚕️'
    }
  ]);

  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const specialties = ['All', 'Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="doctors-container">
      <div className="doctors-header">
        <h2>Our Medical Specialists</h2>
        <p>Book appointments with our experienced healthcare professionals</p>
      </div>

      <div className="doctors-filters">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search doctors by name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="specialty-filters">
          {specialties.map(specialty => (
            <button
              key={specialty}
              className={`specialty-btn ${selectedSpecialty === specialty ? 'active' : ''}`}
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>

      <div className="doctors-grid">
        {filteredDoctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-header">
              <div className="doctor-image">
                {doctor.image}
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="specialty">{doctor.specialty}</p>
                <div className="rating">
                  <div className="stars">
                    {'★'.repeat(Math.floor(doctor.rating))}
                    {'☆'.repeat(5 - Math.floor(doctor.rating))}
                  </div>
                  <span>({doctor.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="doctor-details">
              <div className="detail-item">
                <i className="fas fa-graduation-cap"></i>
                <span>{doctor.education}</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-briefcase"></i>
                <span>{doctor.experience} experience</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-language"></i>
                <span>{doctor.languages.join(', ')}</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-calendar"></i>
                <span>Available: {doctor.availability}</span>
              </div>
            </div>

            <div className="doctor-actions">
              <button 
                className="btn-primary"
                onClick={() => setSelectedDoctor(doctor)}
              >
                <i className="fas fa-calendar-plus"></i>
                Book Appointment
              </button>
              <button className="btn-secondary">
                <i className="fas fa-info-circle"></i>
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="empty-state">
          <i className="fas fa-user-md"></i>
          <h3>No Doctors Found</h3>
          <p>Try adjusting your search criteria or filters</p>
        </div>
      )}

      {selectedDoctor && (
        <div className="booking-modal-overlay">
          <div className="booking-modal">
            <div className="modal-header">
              <h3>Book Appointment with {selectedDoctor.name}</h3>
              <button 
                className="close-btn"
                onClick={() => setSelectedDoctor(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-content">
              <div className="doctor-summary">
                <div className="summary-image">
                  {selectedDoctor.image}
                </div>
                <div className="summary-info">
                  <h4>{selectedDoctor.name}</h4>
                  <p>{selectedDoctor.specialty}</p>
                  <div className="rating">
                    <span className="stars">
                      {'★'.repeat(Math.floor(selectedDoctor.rating))}
                    </span>
                    <span>({selectedDoctor.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="booking-form">
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Preferred Time</label>
                  <select>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Reason for Visit</label>
                  <textarea placeholder="Briefly describe your symptoms or reason for appointment..."></textarea>
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button 
                className="btn-secondary"
                onClick={() => setSelectedDoctor(null)}
              >
                Cancel
              </button>
              <button className="btn-primary">
                Confirm Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;