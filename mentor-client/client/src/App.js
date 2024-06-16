import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import StudentInsightPage from './components/StudentInsightPage';
import Feedback from './components/Feedback';
import { GrDashboard } from 'react-icons/gr';
import Dashboard from './components/Dashboard';
import Channels from './components/Channels';
import FooterAdmin from './components/FooterAdmin';
// Import other components here

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard/add-class" element={<StudentInsightPage />} />
            <Route path="/dashboard/feedback" element={<Feedback />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/channel" element={<Channels />} />


            {/* <Route path="/dashboard" element={<Dashboard />} /> */}

           
          </Routes>
        </div>
        <FooterAdmin />
      </div>
    </Router>
   
  );
};

export default App;
