import React, { useState, useEffect } from 'react';
import './noticeboard.css';
import { useGlobalContext } from '../globalcontext';

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const { globalVariable, setGlobalVariable } = useGlobalContext();
  useEffect(() => {
    fetch(`${globalVariable}/noticeboard`)
      .then(response => response.json())
      .then(data => setNotices(data))
      .catch(error => console.error('Error fetching notices:', error));
  }, []);

  return (
    <div className="notice-board">
      <h2>Events Calender</h2>
      <div className="notice-list">
        {notices.length > 0 ? (
          notices.map((notice, index) => (
            <div key={index} className="notice">
              <h3>{notice.title}</h3>
              <p className="notice-description">{notice.description}</p>
               <div>{notice.date}</div>
              <span className="date">{new Date(notice.date).toLocaleDateString()}</span>
            </div>
          ))
        ) : (
          <p className="no-notices">No notices available</p>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
