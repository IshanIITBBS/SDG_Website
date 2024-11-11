// ProgressCircle.js
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ProgressCircle = ({ progress = 75 }) => {
  const data = [
    { value: progress },       // completed portion
    { value: 100 - progress }, // remaining portion
  ];

  const COLORS = ['#00C49F', '#d3d3d3']; // Color for completed and remaining parts

  return (
    <div style={{ width: '15vw', height: '15vw', position: 'relative' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}    // Controls the inner hollow part
            outerRadius={90}     // Controls the thickness of the ring
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333'
      }}>
        {progress}%
      </div>
    </div>
  );
};

export default ProgressCircle;
