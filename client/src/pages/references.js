// src/pages/References.js
import React from 'react';
import './references.css';

const References = () => {
  const references = [
    { name: "The Global Goals", url: "https://www.globalgoals.org/" },
    { name: "UN SDG Goals", url: "https://sdgs.un.org/goals" },
    { name: "SDG India Index 2023-24", url: "https://www.niti.gov.in/sites/default/files/2024-07/SDG_India_Index_2023-24.pdf" },
    { name: "UN Sustainable Development", url: "https://www.un.org/sustainabledevelopment/" },
  ];

  return (
    <div className="references-container">
      <h1>References</h1>
      <p className="references-description">
        These resources provide in-depth information on the Sustainable Development Goals and India’s progress towards them.
      </p>
      <div className="references-list">
        {references.map((ref, index) => (
          <a 
            key={index}
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="reference-card"
          >
            <h3>{ref.url}</h3>
            <p>Visit {ref.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default References;
