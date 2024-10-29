import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Mainpage from './pages/mainpage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
     return (
        <Router>
             <div>
                <Routes>
                    <Route path="/" element={<Mainpage/>} />
                </Routes>
            </div>
        </Router>
     )
}

export default App;
