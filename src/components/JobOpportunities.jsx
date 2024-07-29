// src/components/JobOpportunities.jsx
import React from 'react';
import '../styles/JobOpportunities.css';

const JobOpportunities = () => {
  const jobList = [
    {
      id: 1,
      position: 'Desarrollador Web Frontend',
      location: 'Ciudad de México',
      description: 'Descripción detallada del trabajo...',
      requirements: 'Requisitos específicos del trabajo...',
      applyLink: 'https://www.ejemplo.com/aplicar/desarrollador-frontend',
    },
    {
      id: 2,
      position: 'Diseñador UX/UI',
      location: 'Guadalajara',
      description: 'Descripción detallada del trabajo...',
      requirements: 'Requisitos específicos del trabajo...',
      applyLink: 'https://www.ejemplo.com/aplicar/disenador-ux-ui',
    },
    // Agrega más oportunidades según sea necesario
  ];

  return (
    <div className="job-opportunities-container">
      <h2>Oportunidades de Trabajo</h2>
      <ul className="job-list">
        {jobList.map(job => (
          <li key={job.id} className="job-item">
            <h3>{job.position}</h3>
            <p><strong>Ubicación:</strong> {job.location}</p>
            <p>{job.description}</p>
            <p><strong>Requisitos:</strong> {job.requirements}</p>
            <button>
              <a href={job.applyLink} target="_blank" rel="noopener noreferrer">Aplicar</a>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobOpportunities;
