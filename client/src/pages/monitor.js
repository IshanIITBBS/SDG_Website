import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './monitor.css'; // Add this CSS file for custom styling


const VideoPage = () => {
  return (
    <div className="video-container">
      <div className="video-embed">
        <iframe
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/sjYHe8liyKI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPage;


