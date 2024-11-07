// src/Dashboard.js

import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active bar

  // Sample data for the chart
  const data = [
    { name: 'Jan', Bookings: 5000, User: 2400, Cancelled: 2400 },
    { name: 'Feb', Bookings: 6000, User: 3452, Cancelled: 2210 },
    { name: 'Mar', Bookings: 7856, User: 9800, Cancelled: 2290 },
    { name: 'Apr', Bookings: 5000, User: 8908, Cancelled: 2000 },
    { name: 'May', Bookings: 7859, User: 4800, Cancelled: 2181 },
    { name: 'Jun', Bookings: 8756, User: 3800, Cancelled: 2500 },
    { name: 'Jul', Bookings: 4589, User: 4300, Cancelled: 2100 },
  ];

  // Function to handle bar click
  const handleBarClick = (data, index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active bar
  };

  return (
    <div className="relative p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <div className="flex justify-center items-center">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar
              dataKey="User"
              fill={activeIndex !== null && activeIndex !== 'User' ? '#8884d8' : '#6a5acd'}
              opacity={activeIndex === null || activeIndex === 'User' ? 1 : 0.3}
              onClick={(e, index) => handleBarClick(e, 'User')}
            />
            <Bar
              dataKey="Bookings"
              fill={activeIndex !== null && activeIndex !== 'Bookings' ? '#82ca9d' : '#32cd32'}
              opacity={activeIndex === null || activeIndex === 'Bookings' ? 1 : 0.3}
              onClick={(e, index) => handleBarClick(e, 'Bookings')}
            />
            <Bar
              dataKey="Cancelled"
              fill={activeIndex !== null && activeIndex !== 'Cancelled' ? '#ECBDC4' : '#ff6347'}
              opacity={activeIndex === null || activeIndex === 'Cancelled' ? 1 : 0.3}
              onClick={(e, index) => handleBarClick(e, 'Cancelled')}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
