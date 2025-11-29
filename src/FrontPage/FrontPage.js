import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Signup/SignUp';
import './Frontpage.css';

const FrontPage = ({ setUser }) => {
  return (
    <div className="frontpage-container">
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default FrontPage;