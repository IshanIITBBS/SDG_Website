// src/components/StateProgressCircle.js
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StateProgressCircle = ({ stateName, currentSDG, previousSDG }) => {
  const percentage = (currentSDG / 100) * 100;

  return (
    <div className="state-progress-circle">
      <h3>{stateName}</h3>
      <div style={{ width: 150, height: 150, marginBottom: '10px' }}>
        <CircularProgressbar value={percentage} text={`${currentSDG}%`} />
      </div>
      <div>
        <strong>Previous SDG Index:</strong> {previousSDG}%
      </div>
    </div>
  );
};

export default StateProgressCircle;
