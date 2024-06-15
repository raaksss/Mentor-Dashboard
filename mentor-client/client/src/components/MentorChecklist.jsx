import React, { useState } from 'react';

const MentorChecklist = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Prepare mentoring session', completed: false },
    { id: 2, text: 'Review student progress', completed: false },
    { id: 3, text: 'Update mentoring notes', completed: false },
    { id: 4, text: 'Schedule next meeting', completed: false },
    // Add more tasks as needed
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Mentor Checklist</h2>
      <ul className="space-y-4">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="form-checkbox h-5 w-5 text-[#dbb857] border-gray-300 rounded focus:ring-[#dbb857] focus:ring-offset-0"
            />
            <span className={`ml-3 text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorChecklist;
