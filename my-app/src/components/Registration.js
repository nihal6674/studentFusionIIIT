import React, { useState } from 'react';
import ViewCourses from './ViewCourses';
import PreRegistration from './PreRegistration';
import FinalRegistration from './FinalRegistration';
import ViewRegistration from './ViewRegistration';
import ElectiveSelection from './ElectiveSelection'; // Import the new ElectiveSelection component

const Registration = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Default to empty string

  const renderComponent = () => {
    switch (selectedOption) {
      case "view-courses":
        return <ViewCourses />;
      case "pre-registration":
        return <PreRegistration />;
      case "final-registration":
        return <FinalRegistration />;
      case "view-registration":
        return <ViewRegistration />;
      case "elective-selection": // Add case for elective selection
        return <ElectiveSelection />; // Render the ElectiveSelection component
      default:
        return null; // Return null when no option is selected
    }
  };

  const handleOptionClick = (option) => {
    // If the option is already selected, do nothing
    if (selectedOption === option) return;
    setSelectedOption(option);
  };

  return (
    <div className="p-6">
      {/* First Navbar */}
      <nav className="bg-transparent mb-4">
        <ul className="flex space-x-4 p-2">
          <li className="border-b border-gray-300 pb-2">
            <span className="text-black hover:text-gray-600 no-underline cursor-pointer">
              Current Semester
            </span>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <span className="text-black hover:text-gray-600 no-underline cursor-pointer font-bold">
              Registration
            </span>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <span className="text-black hover:text-gray-600 no-underline cursor-pointer">
              Miscellaneous
            </span>
          </li>
        </ul>
      </nav>

      {/* Second Navbar */}
      <nav className="bg-transparent mb-4">
        <ul className="flex space-x-4 p-2">
          {["View Courses", "Pre-Registration", "Final Registration", "View Registration", "Elective Selection"].map((option, index) => {
            const optionLowerCase = option.toLowerCase().replace(/ /g, '-'); // e.g., "View Courses" -> "view-courses"
            const isSelected = optionLowerCase === selectedOption;

            return (
              <li key={index} className="pb-2">
                <span 
                  className={`no-underline px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    isSelected ? 'bg-[#4866F4] text-white' : 'text-[#4866BD] hover:text-white hover:bg-[#4866F4]'
                  }`} 
                  onClick={() => handleOptionClick(optionLowerCase)}
                >
                  {option}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Light black line */}
      <div className="h-[1px] bg-gray-300 my-2" />

      {/* Content Section */}
      <div>
        {renderComponent()} {/* Render selected component here */}
      </div>
    </div>
  );
};

export default Registration;
