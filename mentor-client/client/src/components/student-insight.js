import React from 'react';
import SectionHeader from '../components/sectionHeader/sectionHeader'; // Adjust path as per your project structure
import StudentCard from '../components/studentCard'; // Example component for displaying student details
import mentorData from './student-data.json'; // Path to your JSON data

const StudentInsightPage = () => {
  const { mentor } = mentorData;

  return (
    <div>
      <SectionHeader heading={`Students mentored by ${mentor.mentor_name}`} />
      <div className='grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {mentor.students.slice(0, 10).map((student) => (
          <StudentCard key={student.student_id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default StudentInsightPage;
