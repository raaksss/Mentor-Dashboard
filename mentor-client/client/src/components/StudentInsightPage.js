import React, { useState } from 'react';
import SectionHeader from './sectionHeader/sectionHeader';
import mentorData from './student-data.json';
import StudentCard from './studentCard';

const StudentInsightPage = () => {
  const { mentor } = mentorData;
  const [showLowAttendance, setShowLowAttendance] = useState(false);

  const handleFilterToggle = () => {
    setShowLowAttendance(!showLowAttendance);
  };

  const filteredStudents = showLowAttendance
    ? mentor.students.filter((student) => student.attendance < 50)
    : mentor.students.slice(0, 5);

  return (
    <div>
      {/* Filter UI */}
      <div className='flex justify-end mb-4'>
        <button
          onClick={handleFilterToggle}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            showLowAttendance ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-800'
          } hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400`}
>
          {showLowAttendance ? 'Show All' : 'Attendance < 50%'}
        </button>
      </div>

      {/* Student Cards */}
      <SectionHeader heading="Students mentored" />
      <div className='grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {filteredStudents.map((student) => (
          <StudentCard key={student.student_id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default StudentInsightPage;