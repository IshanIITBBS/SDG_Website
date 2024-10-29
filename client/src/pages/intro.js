import React from 'react';
import './intro.css'; // Import CSS for styling
import introvedio from '../assets/intro.mp4';


const IntroVideo = ({ onSkip }) => {
    return (
        <div className="video-overlay">
            <video autoPlay muted playsInline className="intro-video">
                <source src={introvedio} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button className="skip-button" onClick={onSkip}>Skip</button>
        </div>
    );
};

export default IntroVideo;
