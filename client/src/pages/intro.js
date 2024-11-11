import React, { useState, useEffect } from 'react';
import './intro.css';
import { useNavigate } from 'react-router-dom';
import introvedio from '../assets/intro.mp4';


const IntroVideo = ({ onSkip }) => {

    const [showIntro, setShowIntro] = useState(true);
    const navigate = useNavigate();

    // Skip the intro video when the "Skip" button is clicked
    const handleSkipIntro = () => {
        navigate('/home') ;
    };

    

    return (
        <div className="video-overlay">
            <video autoPlay muted playsInline className="intro-video" onEnded={handleSkipIntro}>
                <source src={introvedio} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button className="skip-button" onClick={handleSkipIntro}>Skip</button>
        </div>
    );
};

export default IntroVideo;
