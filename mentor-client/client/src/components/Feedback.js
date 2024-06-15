import React from 'react';

const Feedback= () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Feedback Form</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="mentorName" className="block text-sm font-medium text-gray-700">
            Mentor Name
          </label>
          <input
            type="text"
            id="mentorName"
            name="mentorName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#dbb857] focus:border-transparent"
            placeholder="Enter Mentor Name"
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#dbb857] focus:border-transparent"
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#dbb857] focus:border-transparent"
            placeholder="Enter Student Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="studentReview" className="block text-sm font-medium text-gray-700">
            Student Review
          </label>
          <textarea
            id="studentReview"
            name="studentReview"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#dbb857] focus:border-transparent"
            placeholder="Enter Student Review"
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
