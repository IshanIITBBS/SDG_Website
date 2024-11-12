import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Mainpage from './pages/mainpage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroVideo from './pages/intro';
import Loginpage from './pages/login'
import Noticeform from './pages/noticeform'
import NoticeBoard from './pages/noticeboard';
import Missionform from './pages/missionform'
import MissionBoard from './pages/missionboard';
import MissionDetail from './pages/missiondetail';
import Quizform from './pages/quizform' ;
import Quiz from './pages/quiz';
import SDG from './pages/sdg' ;
import Info from './pages/info' ;
import ImplementationStrategies from './pages/implementation';
import MonitoringPage from './pages/monitor';
import Significance from './pages/significance'
import EnvironmentalConservation from './pages/environment';
import StatsPage from './pages/stats'
import AboutPage from './pages/about'
import References from './pages/references';
import { GlobalProvider } from './globalcontext';

function App() {
     return (
        <GlobalProvider>
        <Router>
             <div>
                <Routes>
                    <Route path="/" element={<Mainpage/>} />
                    <Route path="/home" element={<Mainpage/>} />
                    <Route path="/login" element={<Loginpage/>} />
                    <Route path="/noticeform" element={<Noticeform/>} />
                    <Route path="/noticeboard" element={<NoticeBoard/>} />
                    <Route path="/missionform" element={<Missionform/>} />
                    <Route path="/missionboard" element={<MissionBoard/>} />
                    <Route path="/missionboard/:missionId" element={<MissionDetail/>} />
                    <Route path="/quizform" element={<Quizform/>} />
                    <Route path="/quiz" element={<Quiz/>} />
                    <Route path="/sdg" element={<SDG/>} />
                    <Route path="/info" element={<Info/>} />
                    <Route path="/implementation" element={<ImplementationStrategies/>} />
                    <Route path="/monitor" element={<MonitoringPage/>} />
                    <Route path="/significance" element={<Significance/>} />
                    <Route path="/environment" element={<EnvironmentalConservation/>} />
                    <Route path="/about" element={<AboutPage/>} />
                    <Route path="/references" element={<References/>} />
                </Routes>
            </div>
        </Router>
        </GlobalProvider>
     )
}

export default App;
