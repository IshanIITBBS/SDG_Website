// Chart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mar 2023', revenue: 20000, target: 25000 },
  { name: 'Jun 2023', revenue: 30000, target: 26000 },
  { name: 'Sep 2023', revenue: 15000, target: 27000 },
  { name: 'Dec 2023', revenue: 40000, target: 28000 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="700px" height={700}>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        <Line type="monotone" dataKey="target" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
