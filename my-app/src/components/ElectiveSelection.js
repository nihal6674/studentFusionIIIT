import React, { useState } from 'react';

const ElectiveSelection = () => {
  const [selectedElective, setSelectedElective] = useState(""); // State for the selected elective
  const [courses, setCourses] = useState([]); // State to hold the courses
  const [selectedPriorities, setSelectedPriorities] = useState({}); // State to hold selected priorities for Electives
  const [selectedCourses, setSelectedCourses] = useState({}); // State to hold selected courses for swayam

  // Dummy data for current semester and branch
  const currentSemester = "V"; // Modify this value dynamically if needed
  const currentBranch = "Computer Science Engineering"; // Modify this value dynamically if needed

  // Options for the dropdown
  const electiveOptions = [
    { value: "", label: "Select Elective" },
    { value: "elective", label: "Elective" },
    { value: "swayam", label: "Swayam" },
  ];

  // Courses data for each elective
  const coursesData = {
    elective: [
      { name: "Data Structures and Algorithms", code: "CS101", credits: 3 },
      { name: "Database Management Systems", code: "CS102", credits: 3 },
      { name: "Software Engineering", code: "CS103", credits: 4 },
      { name: "Operating Systems", code: "CS104", credits: 4 },
      { name: "Web Development", code: "CS105", credits: 3 },
      { name: "Computer Networks", code: "CS106", credits: 3 },
    ],
    swayam: [
      { name: "Machine Learning", code: "CS201", credits: 3 },
      { name: "Cloud Computing", code: "CS202", credits: 3 },
      { name: "Internet of Things", code: "CS203", credits: 4 },
      { name: "Data Science", code: "CS204", credits: 3 },
      { name: "Artificial Intelligence", code: "CS205", credits: 4 },
      { name: "Cyber Security", code: "CS206", credits: 3 },
    ],
  };

  // Function to handle elective selection
  const handleElectiveChange = (e) => {
    const elective = e.target.value;
    setSelectedElective(elective);
    setCourses(coursesData[elective] || []); // Set courses based on selected elective
    setSelectedPriorities({}); // Reset selected priorities when changing elective
    setSelectedCourses({}); // Reset selected courses when changing elective
  };

  // Function to handle priority selection
  const handlePriorityChange = (courseCode, value) => {
    setSelectedPriorities((prev) => ({
      ...prev,
      [courseCode]: value, // Update priority for the specific course
    }));
  };

  // Function to handle course selection
  const handleSelectCourse = (courseCode) => {
    setSelectedCourses((prev) => ({
      ...prev,
      [courseCode]: prev[courseCode] ? false : true, // Toggle selection
    }));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Prepare submission data
    const submissionData = {
      selectedElective,
      priorities: selectedPriorities,
      swayamSelections: selectedCourses,
    };

    // Log or send submission data to the server
    console.log("Submitted Data:", submissionData);
    alert("Electives submitted successfully!"); // Replace with actual submission logic
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Elective Selection</h2>
      
      {/* Display Current Semester and Branch */}
      <div className="mb-4">
        <p className="font-semibold">Current Semester: {currentSemester}</p>
        <p className="font-semibold">Branch: {currentBranch}</p>
      </div>

      {/* Dropdown for Elective Selection */}
      <label htmlFor="elective" className="block mb-2 font-semibold">Choose an Elective:</label>
      <select
        id="elective"
        value={selectedElective}
        onChange={handleElectiveChange} // Use the updated handler
        className="border border-gray-300 rounded-lg p-2 w-full"
      >
        {electiveOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Display Courses in a Table based on selected elective */}
      {selectedElective && courses.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Available Courses:</h3>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Course Name</th>
                <th className="border px-4 py-2">Course Code</th>
                <th className="border px-4 py-2">Credits</th>
                <th className="border px-4 py-2">Action</th>
                {selectedElective === 'elective' && (
                  <th className="border px-4 py-2">Priority</th>
                )}
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{course.name}</td>
                  <td className="border px-4 py-2">{course.code}</td>
                  <td className="border px-4 py-2">{course.credits}</td>
                  <td className="border px-4 py-2">
                    {selectedElective === 'swayam' ? (
                      <button
                        onClick={() => handleSelectCourse(course.code)} // Use updated handler
                        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                          selectedCourses[course.code] ? 'bg-green-500 text-white' : 'bg-gray-300 hover:bg-green-500'
                        }`}
                      >
                        {selectedCourses[course.code] ? 'Selected' : 'Select'}
                      </button>
                    ) : (
                      <span>Select Priority</span>
                    )}
                  </td>
                  {selectedElective === 'elective' && (
                    <td className="border px-4 py-2">
                      <select
                        value={selectedPriorities[course.code] || ""}
                        onChange={(e) => handlePriorityChange(course.code, e.target.value)}
                        className="border border-gray-300 rounded-lg p-1 w-full"
                      >
                        <option value="">Select Priority</option>
                        {Array.from({ length: courses.length }, (_, i) => (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Submit Button */}
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ElectiveSelection;
