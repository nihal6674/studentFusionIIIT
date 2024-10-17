import React, { useState } from 'react';

const sampleCourses = [
  { name: 'Data Structures', code: 'CS101', credits: 4 },
  { name: 'Algorithms', code: 'CS102', credits: 4 },
  { name: 'Web Development', code: 'CS201', credits: 3 },
  { name: 'Database Systems', code: 'CS202', credits: 3 },
  { name: 'Operating Systems', code: 'CS301', credits: 4 },
  { name: 'Software Engineering', code: 'CS302', credits: 4 },
  { name: 'Artificial Intelligence', code: 'CS401', credits: 3 },
  { name: 'Machine Learning', code: 'CS402', credits: 3 },
  { name: 'Computer Networks', code: 'CS403', credits: 3 },
  { name: 'Human-Computer Interaction', code: 'CS404', credits: 3 },
];

const getRandomCourses = (count) => {
  const shuffled = sampleCourses.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ReplaceCourse = ({ addedCourses, setAddedCourses, onReplaceCourse }) => {
  const [oldCourse, setOldCourse] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [newCredits, setNewCredits] = useState(0);
  const [message, setMessage] = useState(""); // State for success message

  // Function to handle course replacement
  const handleSubmit = (e) => {
    e.preventDefault();

    const oldCourseDetails = addedCourses.find(course => course.name === oldCourse);
    
    // Call the onReplaceCourse function with old and new credits
    if (oldCourseDetails) {
      const oldCredits = oldCourseDetails.credits;
      
      onReplaceCourse(oldCredits, newCredits);

      // Update the courses list
      const updatedCourses = addedCourses.map(course =>
        course.name === oldCourse ? { ...course, name: newCourse, credits: newCredits } : course
      );

      setAddedCourses(updatedCourses);
      setMessage("Submitted for replacement!"); // Set success message
    } else {
      setMessage("Submitted for replacement!"); // Set success message even if the old course is not found
    }

    // Clear the input fields after submission
    setOldCourse("");
    setNewCourse("");
    setNewCredits(0);
  };

  // Generate random courses to replace
  const randomCourses = getRandomCourses(5); // Change the count as needed

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Replace Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Select Course to Replace:</label>
          <select 
            value={oldCourse} 
            onChange={(e) => setOldCourse(e.target.value)} 
            required
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="">Select a course</option>
            {randomCourses.map((course, index) => (
              <option key={index} value={course.name}>
                {course.name} ({course.code}) - {course.credits} credits
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">New Course Name:</label>
          <select 
            value={newCourse} 
            onChange={(e) => setNewCourse(e.target.value)} 
            required
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="">Select a new course</option>
            {sampleCourses.map((course, index) => (
              <option key={index} value={course.name}>
                {course.name} ({course.code}) - {course.credits} credits
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">New Course Credits:</label>
          <input 
            type="number" 
            value={newCredits} 
            onChange={(e) => setNewCredits(Number(e.target.value))} 
            required
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
        >
          Replace Course
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>} {/* Display the success message */}
    </div>
  );
};

export default ReplaceCourse;
