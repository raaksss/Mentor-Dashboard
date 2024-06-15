
import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgInsights } from "react-icons/cg";
import { RiFeedbackLine } from "react-icons/ri";
import { GrUserManager } from 'react-icons/gr'; // Example additional icon
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Sidebar = () => {
  const menuItems = [
    { label: 'Profile', address: '/profile', icon: GrUserManager },
    { label: 'Dashboard', address: '/dashboard', icon: MdOutlineDashboardCustomize },
    { label: 'Student Insights', address: '/dashboard/add-class', icon: CgInsights },
    { label: 'Feedback', address: '/dashboard/feedback', icon: RiFeedbackLine },
    // Add more items as needed
  ];

  return (
    <nav className="bg-[#523521] h-full text-gray-200 min-h-screen w-64 flex flex-col">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between mb-8">
          <NavLink to="/" className="text-gray-200 text-lg font-bold px-4 hover:text-black">
            <img src="https://eklavyaindia.org/wp-content/uploads/2024/03/LOGO.png" className='w-20 h-20 object-cover mx-auto rounded-lg mx-auto p-2' alt="Logo"></img>
          </NavLink>
        </div>
        <div>
          {menuItems.map(({ label, address, icon: Icon }) => (
            <NavLink
              key={address}
              to={address}
              end
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-gray-200 hover:bg-[#f8f6ef] hover:text-[#523521] transition-colors duration-300 rounded-lg ${
                  isActive ? 'bg-[#f8f6ef] text-black' : 'text-white'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="mx-2">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="mt-auto py-4 px-4 text-gray-200 text-sm">
     
      </div>
    </nav>
  );
};

export default Sidebar;

