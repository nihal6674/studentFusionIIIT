import React, { useState } from 'react';
import AddCourse from './AddCourse';
import DropCourse from './DropCourse';

const AddDrop = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [addedCourses, setAddedCourses] = useState([]);
  const [currentCredits, setCurrentCredits] = useState(17); // Default credits

  const handleAddCourse = (credits) => {
    const courseCode = `CS${addedCourses.length + 1}`;
    // Check if the course is already added
    if (addedCourses.some(course => course.code === courseCode)) {
      alert('This course is already added.');
      return;
    }

    if (currentCredits + credits > 26) {
      alert('Total credits cannot exceed 26');
      return;
    }

    setAddedCourses((prevCourses) => [
      ...prevCourses,
      { id: prevCourses.length + 1, code: courseCode, credits },
    ]);
    setCurrentCredits((prevCredits) => prevCredits + credits);
  };

  const handleDropCourse = (courseToDrop) => {
    setAddedCourses((prevCourses) =>
      prevCourses.filter((course) => course.code !== courseToDrop.code)
    );
    setCurrentCredits((prevCredits) => prevCredits - courseToDrop.credits);
  };

  const handleSubmit = () => {
    // Here you can handle the submission logic
    // For example, send addedCourses to an API or display a success message
    if (addedCourses.length > 0) {
      alert(`Courses submitted: ${addedCourses.map(course => course.code).join(', ')}`);
      // Reset courses if needed
      setAddedCourses([]);
      setCurrentCredits(17); // Reset to default
    } else {
      alert('No courses to submit.');
    }
  };

  const renderContent = () => {
  switch (selectedOption) {
    case 'add':
      return <AddCourse onAddCourse={handleAddCourse} addedCourses={addedCourses} />; // Pass addedCourses prop
    case 'drop':
      return <DropCourse addedCourses={addedCourses} onDropCourse={handleDropCourse} />;
    default:
      return null;
  }
};


  return (
    <div className="p-6 bg-[#E5E5E5]">
      <h1 className="text-2xl font-bold mb-4 flex justify-between items-center">
        Add/Drop Courses
        <span className="text-[#65B025] font-bold">Current Credits: {currentCredits}</span>
      </h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <span
              className={`cursor-pointer ${selectedOption === 'add' ? 'font-bold text-[#4866F4]' : 'text-[#807A86]'}`}
              onClick={() => setSelectedOption('add')}
            >
              Add
            </span>
          </li>
          <li>
            <span
              className={`cursor-pointer ${selectedOption === 'drop' ? 'font-bold text-[#4866F4]' : 'text-[#807A86]'}`}
              onClick={() => setSelectedOption('drop')}
            >
              Drop
            </span>
          </li>
        </ul>
      </nav>
      <div className="mt-4">{renderContent()}</div>
      <button
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default AddDrop;
