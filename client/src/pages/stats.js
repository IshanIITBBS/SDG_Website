// src/pages/Dashboard.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './stats.css';

const Dashboard = () => {
  // Example data: List of states with their SDG Index data
  const statesData = [
    { name: 'Kerala', current: 79, previous: 75 },
    { name: 'Uttarakhand', current: 79, previous: 72 },
    { name: 'Tamil Nadu', current: 78, previous: 74 },
    { name: 'Goa', current: 77, previous: 72 },
    { name: 'Himachal Pradesh', current: 77, previous: 74 },
    { name: 'Punjab', current: 76, previous: 68 },
    { name: 'Sikkim', current: 76, previous: 71 },
    { name: 'Karnataka', current: 75, previous: 72 },
    { name: 'Andhra Pradesh', current: 74, previous: 72 },
    { name: 'Gujarat', current: 74, previous: 69 },
    { name: 'Telangana', current: 74, previous: 69 },
    { name: 'Maharashtra', current: 73, previous: 70 },
    { name: 'Haryana', current: 72, previous: 67 },
    { name: 'Manipur', current: 72, previous: 64 },
    { name: 'Mizoram', current: 72, previous: 68 },
    { name: 'Tripura', current: 71, previous: 65 },
    { name: 'West Bengal', current: 70, previous: 62 },
    { name: 'Chhattisgarh', current: 67, previous: 61 },
    { name: 'Madhya Pradesh', current: 67, previous: 62 },
    { name: 'Rajasthan', current: 67, previous: 60 },
    { name: 'Uttar Pradesh', current: 67, previous: 60 },
    { name: 'Odisha', current: 66, previous: 61 },
    { name: 'Arunachal Pradesh', current: 65, previous: 60 },
    { name: 'Assam', current: 65, previous: 57 },
    { name: 'Meghalaya', current: 63, previous: 60 },
    { name: 'Nagaland', current: 63, previous: 61 },
    { name: 'Jharkhand', current: 62, previous: 56 },
    { name: 'Bihar', current: 57, previous: 52 }
  ];

  return (
    <div className="dashboard">
      <h1>SDG Indices of Different States</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={statesData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={120} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="current" fill="#8884d8" name="Current SDG Index" />
          <Bar dataKey="previous" fill="#82ca9d" name="Previous SDG Index" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
