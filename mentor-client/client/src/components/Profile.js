import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [mentor, setMentor] = useState({});

  useEffect(() => {
    axios.get('/mentors')
      .then(response => setMentor(response.data[0])) // Assuming first mentor for example
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-4">
      <img src={mentor.image} alt="Mentor" className="w-32 h-32 rounded-full mx-auto" />
      <h2 className="text-2xl text-center mt-4">{mentor.name}</h2>
      <p className="text-center text-gray-600">{mentor.region}</p>
      <p className="text-center text-gray-600">{mentor.languages?.join(', ')}</p>
      <div className="flex justify-center mt-4">
        {mentor.badges?.map((badge, index) => (
          <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded-full mx-1">{badge}</span>
        ))}
      </div>
    </div>
  );
};

export default Profile;
