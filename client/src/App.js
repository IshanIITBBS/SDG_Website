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

function App() {
     return (
        <Router>
             <div>
                <Routes>
                    <Route path="/" element={<IntroVideo/>} />
                    <Route path="/home" element={<Mainpage/>} />
                    <Route path="/login" element={<Loginpage/>} />
                    <Route path="/noticeform" element={<Noticeform/>} />
                    <Route path="/noticeboard" element={<NoticeBoard/>} />
                    <Route path="/missionform" element={<Missionform/>} />
                    <Route path="/missionboard" element={<MissionBoard/>} />
                    <Route path="/missionboard/:missionId" element={<MissionDetail/>} />
                    <Route path="/quizform" element={<Quizform/>} />
                    <Route path="/quiz" element={<Quiz/>} />
                </Routes>
            </div>
        </Router>
     )
}

export default App;
