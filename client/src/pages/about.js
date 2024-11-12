// src/pages/About.js
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>Developers Info</h1>
      
      
      <h2>Electronics and Communication Engineering</h2>
      <div className="developers-container">
        <div className="developer-card">
          <h3>Mohd Ishan</h3>
          <p>Roll Number: 22EC01031</p>
        </div>
        <div className="developer-card">
          <h3>Animesh Prasad</h3>
          <p>Roll Number: 22EC01042</p>
        </div>
        <div className="developer-card">
          <h3>Deven</h3>
          <p>Roll Number: 22EC01039</p>
        </div>
        <div className="developer-card">
          <h3>Aditya Dubey</h3>
          <p>Roll Number: 22EC01012</p>
        </div>
      </div>
    </div>
  );
};

export default About;
