import React from 'react';

const StudentCard = ({ student }) => {
  const { student_name, courses_enrolled, region } = student;

  // Define dynamic background color styles based on region
  const getBackgroundColor = (region) => {
    switch (region) {
      case 'East Coast':
        return '#f0f4c3'; // light green
      case 'Midwest':
        return '#c3f0f4'; // light blue
      case 'West Coast':
        return '#f4c3f0'; // light pink
      default:
        return '#f0f0f0'; // light gray
    }
  };

  const cardStyle = {
    backgroundColor: getBackgroundColor(region),
    borderRadius: '8px',
    padding: '16px',
    margin: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={cardStyle} className='border rounded-lg p-4'>
      <h2 className='text-xl font-bold'>{student_name}</h2>
      <p><strong>Courses Enrolled:</strong> {courses_enrolled.join(', ')}</p>
    </div>
  );
};

export default StudentCard;
