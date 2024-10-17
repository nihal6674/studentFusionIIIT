import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/logo.png';

// Importing icons from react-icons
import { FaHome, FaBook, FaFileAlt, FaUser, FaHospital, FaUniversity, FaLaptop, FaHandsHelping, FaUserCircle, FaLifeRing, FaGavel, FaRegBuilding, FaSuitcase, FaHotel, FaSchool, FaCheckCircle, FaClipboardList } from 'react-icons/fa';

const Sidebar = () => {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);

  // Toggle the Academics submenu
  const toggleAcademicsMenu = () => {
    setIsAcademicsOpen(!isAcademicsOpen);
  };

  return (
    <div className="w-[255px] h-[1090px] bg-[#FEFEFF] text-gray-800 p-4 overflow-y-auto"> {/* Add overflow-y-auto for scrolling */}
      {/* Logo */}
      <div className="mb-8">
        <img src={logo} alt="Logo" className="w-32 mx-auto" />
      </div>

      {/* Menu Items */}
      <ul>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaHome className="mr-2" /> Home
        </li>

        {/* Academics with Submenu */}
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center" onClick={toggleAcademicsMenu}>
          <FaBook className="mr-2" /> Academics
        </li>
        {isAcademicsOpen && (
          <ul className="ml-6">
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <Link to="/current-semester" className="flex items-center">
                <FaSchool className="mr-2" /> Current Semester
              </Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <Link to="/registration" className="flex items-center">
                <FaCheckCircle className="mr-2" /> Registration
              </Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <Link to="/miscellaneous" className="flex items-center">
                <FaClipboardList className="mr-2" /> Miscellaneous
              </Link>
            </li>
          </ul>
        )}

        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaFileAlt className="mr-2" /> Program & Curriculum
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaFileAlt className="mr-2" /> File Tracking
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaUser className="mr-2" /> Human Resource
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaHospital className="mr-2" /> Health Centre
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaUniversity className="mr-2" /> Scholarship
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaHandsHelping className="mr-2" /> Complaint System
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaSuitcase className="mr-2" /> Placement Cell
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaRegBuilding className="mr-2" /> Department Portal
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaGavel className="mr-2" /> Gymkhana
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaHotel className="mr-2" /> Visitor's Hostel
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaFileAlt className="mr-2" /> Other Academic Procedures
        </li>
      </ul>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-300 my-6" />

      {/* Profile and Settings as separate items at the bottom */}
      <ul>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaUserCircle className="mr-2" /> Profile
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaUserCircle className="mr-2" /> Settings
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaLifeRing className="mr-2" /> Help
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
