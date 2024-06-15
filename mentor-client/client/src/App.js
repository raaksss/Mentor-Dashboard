import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import StudentInsightPage from './components/StudentInsightPage';
// Import other components here

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/add-class" element={<StudentInsightPage />} />
            
            {/* Define more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
