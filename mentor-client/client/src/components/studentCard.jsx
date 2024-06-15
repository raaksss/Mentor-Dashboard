// StudentCard.js

import React from 'react';

const StudentCard = ({ student }) => {
  const { student_name, courses_enrolled } = student;

  return (
    <div className='border rounded-lg p-4'>
      <h2 className='text-xl font-bold'>{student_name}</h2>
      <p><strong>Courses Enrolled:</strong> {courses_enrolled.join(', ')}</p>
    </div>
  );
};

export default StudentCard;
