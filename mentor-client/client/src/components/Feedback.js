import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [mentorName, setMentorName] = useState('');
  const [date, setDate] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentReview, setStudentReview] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('/dashboard/feedback', {
        mentorName,
        date,
        studentName,
        studentReview
      });

      console.log('Feedback submitted:', response.data); // Log the response if needed

      // Optionally, you can reset the form fields after successful submission
      setMentorName('');
      setDate('');
      setStudentName('');
      setStudentReview('');

      // Add any success message or redirection logic here
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Handle error scenarios if needed
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="mentorName" className="block text-sm font-medium text-gray-700">
            Mentor Name
          </label>
          <input
            type="text"
            id="mentorName"
            name="mentorName"
            value={mentorName}
            onChange={(e) => setMentorName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#dbb857] focus:border-transparent"
            placeholder="Enter Mentor Name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
           Submission Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#dbb857] focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
            Student Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#dbb857] focus:border-transparent"
            placeholder="Enter Student Name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="studentReview" className="block text-sm font-medium text-gray-700">
            Student Review
          </label>
          <textarea
            id="studentReview"
            name="studentReview"
            value={studentReview}
            onChange={(e) => setStudentReview(e.target.value)}
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#dbb857] focus:border-transparent"
            placeholder="Enter Student Review"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#523521] hover:bg-[#7e654c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#dbb857]"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
