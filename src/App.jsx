// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Major from './components/Major';
import ContactForm from './components/ContactForm';
import DropdownMenu from './components/DropdownMenu';
import Certifications from './components/Certifications';
import PrivacyNotice from './components/PrivacyNotice';
import JobOpportunities from './components/JobOpportunities';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <header>
        <DropdownMenu />
        
      </header>
      <Routes>
        <Route path="/" element={<Major />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/privacy" element={<PrivacyNotice />} />
        <Route path="/job" element={<JobOpportunities />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
};

export default App;
