// components/Reminder.js
import React from 'react';

const getUpcomingMeetings = (students) => {
  const today = new Date();
  const in14Days = new Date(today);
  in14Days.setDate(today.getDate() + 14);

  let upcomingMeetings = [];

  students.forEach(student => {
    student.meetings?.forEach(meeting => {
      const meetingDate = new Date(meeting.date);
      if (meetingDate >= today && meetingDate <= in14Days) {
        upcomingMeetings.push({
          studentName: student.student_name,
          meetingDate: meetingDate
        });
      }
    });
  });

  upcomingMeetings.sort((a, b) => a.meetingDate - b.meetingDate);

  return upcomingMeetings[0];
};

const Reminder = ({ students }) => {
  const nextMeeting = getUpcomingMeetings(students);

  if (!nextMeeting) {
    return <div>No upcoming meetings in the next 14 days.</div>;
  }

  return (
    <div className='p-4 bg-[#d8be90]-200 rounded shadow'>
      <h3 className='font-bold'>Next Meeting Reminder</h3>
      <p>With: {nextMeeting.studentName}</p>
      <p>Date: {nextMeeting.meetingDate.toLocaleDateString()}</p>
      <p>Time: {nextMeeting.meetingDate.toLocaleTimeString()}</p>
    </div>
  );
};

export default Reminder;