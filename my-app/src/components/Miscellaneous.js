import React, { useState } from 'react';
import Navbar from './NavBar'; // Adjust the path as necessary
import AddDrop from './AddDrop'; // Import the AddDrop component
import Replace from './ReplaceCourse'; // Import the Replace component
import Backlog from './Backlog'; // Import the Backlog component

const Miscellaneous = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(""); // No default selection
  const [addedCourses, setAddedCourses] = useState([]); // State to hold added courses

  // Function to render content based on selected option
  const renderComponent = () => {
    switch (selectedOption) {
      case "check-dues":
        return <div>Content for Check Dues</div>;
      case "apply-for-bonafide":
        return <div>Content for Apply for Bonafide</div>;
      case "attendance":
        return <div>Content for Attendance</div>;
      case "replace":
        return <Replace addedCourses={addedCourses} setAddedCourses={setAddedCourses} />; // Pass addedCourses here
      case "add-drop":
        return <AddDrop addedCourses={addedCourses} setAddedCourses={setAddedCourses} />; // Pass addedCourses to AddDrop if needed
      case "backlogs":
        return <Backlog />; // Render the Backlog component here
      default:
        return <div>Please select an option to view its content.</div>; // Default message
    }
  };

  return (
    <div className="p-6">
      {/* Navbar for navigation between sections */}
      <Navbar selectedOption="miscellaneous" onSelect={onSelect} />
      
      {/* Second Navbar for Miscellaneous Options */}
      <nav className="bg-transparent mb-4">
        <ul className="flex space-x-4 p-2">
          {["Check Dues", "Apply for Bonafide", "Attendance", "Replace", "Add-Drop", "Backlogs"].map((option, index) => {
            const optionLowerCase = option.toLowerCase().replace(/ /g, '-'); // Convert option to kebab case
            const isSelected = optionLowerCase === selectedOption;

            return (
              <li key={index} className="pb-2">
                <span 
                  className={`no-underline px-4 py-2 rounded-lg font-semibold ${isSelected ? 'bg-[#4866F4] text-white' : 'text-[#807A86] hover:text-gray-600 cursor-pointer'}`} 
                  onClick={() => {
                    setSelectedOption(optionLowerCase);
                  }}
                >
                  {option}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Content Section */}
      <div>
        {renderComponent()} {/* Render selected component here */}
      </div>
    </div>
  );
};

export default Miscellaneous;
