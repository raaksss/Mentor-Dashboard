import React from 'react';
import BarGraph from './BarGraph';
import Reminder from './Reminder';
import mentorData from './student-data.json'; 
import MentorChecklist from './MentorChecklist';
const Dashboard = () => {
// Example data for student progress
const studentProgress = [
{ name: 'Student A', progress: 75 },
{ name: 'Student B', progress: 60 },
{ name: 'Student C', progress: 85 },
// Add more students as needed
];

const { mentor } = mentorData;

return (
<div className="grid grid-cols-2 gap-8">
<div>
<h2 className="mb-4">Student Progress Dashboard</h2>
<BarGraph studentProgress={studentProgress} width={400} height={200} />
</div>
<div>
<Reminder students={mentor.students} />
</div>
<img src="https://as2.ftcdn.net/v2/jpg/01/08/88/43/1000_F_108884300_6im7dEu1EFPZL932SeQpk2cYbiRzT4xQ.jpg" alt="Mentoring" />

<div>
    <MentorChecklist/>
    </div>
</div>
);
};

export default Dashboard;