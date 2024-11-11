import React,{useState,useEffect} from 'react';
import './missiondetail.css';
import { useParams } from 'react-router-dom';

const MissionPage = () => {
    const [mission, setMission] = useState([]);
    const params = useParams() ;
    
  useEffect(() => {
    fetch(`http://localhost:5000/missionboard/${params.missionId}`)
      .then(response => response.json())
      .then(data => setMission(data))
      .catch(error => console.error('Error fetching notices:', error));
  }, []);



    return (
        <div className='mission-body'>
        <div className="mission-container">
            <div className="mission-card">
                <img src={mission.imageurl} alt="Mission" className="mission-image" />
                <h1 className="mission-title">{mission.title}</h1>
                <p className="mission-description">{mission.description}</p>
                <span className={`mission-status ${mission.status}`}>
                    Status: {mission.status}
                </span>
            </div>
        </div>
        </div>
    );
};

export default MissionPage;
