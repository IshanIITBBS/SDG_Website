import React, { useState, useEffect } from 'react';
import './noticeboard.css';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../globalcontext';
const MissionBoard = () => {
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate();
  const { globalVariable, setGlobalVariable } = useGlobalContext();
  useEffect(() => {
    fetch(`${globalVariable}/missionboard`)
      .then(response => response.json())
      .then(data => setNotices(data))
      .catch(error => console.error('Error fetching notices:', error));
  }, []);



    
        


  const handleClick = (missionId)=>{
     navigate(`/missionboard/${missionId}`);
  }


  return (
    <div className="notice-board">
      <h2>Missions</h2>
      <div className="notice-list">
        {notices.length > 0 ? (
          notices.map((notice, index) => (
            <div key={index} className="notice"  onClick={() => handleClick(notice._id)}>
              <h3>{notice.title}</h3>
               <div>{notice.status}</div>
              <span className="date">{notice.status}</span>
            </div>
          ))
        ) : (
          <p className="no-notices">No notices available</p>
        )}
      </div>
    </div>
  );
};

export default MissionBoard;
