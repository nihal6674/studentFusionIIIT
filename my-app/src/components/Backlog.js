import React, { useState } from 'react';

// Sample data for courses in backlog
const backlogCourses = [
  { name: 'Data Structures', code: 'CS101', credits: 4, grade: 'D' },
  { name: 'Algorithms', code: 'CS102', credits: 4, grade: 'C' },
  { name: 'Database Systems', code: 'CS202', credits: 3, grade: 'F' }
];

const Backlog = () => {
  // State to manage applied status for each course
  const [appliedCourses, setAppliedCourses] = useState(
    backlogCourses.reduce((acc, course) => {
      acc[course.code] = false; // Initialize all courses as not applied
      return acc;
    }, {})
  );

  // Function to handle apply for improvement
  const handleApplyForImprovement = (courseCode) => {
    setAppliedCourses((prev) => ({
      ...prev,
      [courseCode]: true, // Set the course as applied
    }));
    alert(`Applied for improvement in ${courseCode}`);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Backlog Courses</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Course Name</th>
            <th className="py-2 px-4 border-b">Course Code</th>
            <th className="py-2 px-4 border-b">Credits</th>
            <th className="py-2 px-4 border-b">Grade</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {backlogCourses.map((course, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{course.name}</td>
              <td className="py-2 px-4 border-b">{course.code}</td>
              <td className="py-2 px-4 border-b">{course.credits}</td>
              <td className="py-2 px-4 border-b">{course.grade}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  onClick={() => handleApplyForImprovement(course.code)} 
                  className={`px-4 py-2 rounded-lg ${appliedCourses[course.code] ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-600'}`}
                  disabled={appliedCourses[course.code]} // Disable button if already applied
                >
                  {appliedCourses[course.code] ? 'Applied' : 'Apply for Improvement'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Backlog;
