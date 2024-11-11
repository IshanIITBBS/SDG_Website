
import React ,{useState,useEffect} from 'react';
import Sidebar from '../components/sidebar.js';
import Header from '../components/header';
import OverviewCards from '../components/overviewCards';
import Chart from '../components/chart';
import { Grid, Container } from '@mui/material';
import Piechart from '../components/piechart.js';
import ProgressCircle from '../components/progresscircle.js'
import './mainpage.css'


function MainPage() {
    const [loggedIn,setLoggedIn] = useState(false) ;

    useEffect(()=>{
        fetch('http://localhost:5000/logincheck',{method:'GET',credentials:'include'})
        .then(response=> response.json())
        .then(data=>{
              setLoggedIn(data.loggedIn);
              console.log(data) ;
              console.log(loggedIn)
        })
      },[])

  return (
    <>
    <div style={{ display: 'flex' }}>
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
    </div>
    </>
  );
}

export default MainPage;
