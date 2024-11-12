
import React ,{useState,useEffect} from 'react';
import Sidebar from '../components/sidebar.js';
import Header from '../components/header';
import OverviewCards from '../components/overviewCards';
import Chart from '../components/chart';
import { Grid, Container } from '@mui/material';
import Piechart from '../components/piechart.js';
import ProgressCircle from '../components/progresscircle.js'
import './mainpage.css'
import img from "../assets/Image4.jpeg"
import { useGlobalContext } from '../globalcontext.js';

function MainPage() {
    const [loggedIn,setLoggedIn] = useState(false) ;
    const { globalVariable, setGlobalVariable } = useGlobalContext();
    useEffect(()=>{
        fetch(`${globalVariable}/logincheck`,{method:'GET',credentials:'include'})
        .then(response=> response.json())
        .then(data=>{
              setLoggedIn(data.loggedIn);
              console.log(data) ;
              console.log(loggedIn)
        }).catch(err=>{
          console.log(err);
        })
      },[])

  return (
    <div className="home-container">
      <div>
         <Sidebar loggedIn={loggedIn} />
      </div>
      <nav className="navbar">
        <h2 className="brand"></h2>
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/references">References</a></li>
        </ul>
      </nav>
      <div className="content" style={{marginTop:"25vh"}}>
        <h1 style={{fontSize:75}}>Sustainable Development Goals</h1>
        <h2 style={{fontStyle:"italic", fontSize:50}}>Accelerating Change, Inspiring Hope</h2>
      </div>
          {/* <div style={{ display: 'flex' }}>
       <div>
         <Sidebar loggedIn={loggedIn} />
      </div>
       <div className='mainpage-body'>
           <div className='mainpage-card'>
             <Piechart/>
          </div>
          <div className='mainpage-card'>
            <ProgressCircle/>
         </div>
          <div className='mainpage-card'>
            <ProgressCircle/>
         </div>
       </div>
    </div> */}
    </div>
  );
}

export default MainPage;
