import React from 'react';
import BarGraph from './BarGraph';

const Dashboard = () => {
  // Example data for student progress
  const studentProgress = [
    { name: 'Student A', progress: 75 },
    { name: 'Student B', progress: 60 },
    { name: 'Student C', progress: 85 },
    // Add more students as needed
  ];

  return (
    <div>
      <h2>Student Progress Dashboard</h2>
      <BarGraph studentProgress={studentProgress} />
    </div>
  );
};

export default Dashboard;
