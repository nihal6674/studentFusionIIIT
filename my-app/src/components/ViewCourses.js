import React from 'react';

// Sample data for courses with course codes
const courses = [
  { id: 1, code: 'CS101', name: 'Introduction to Computer Science', type: 'Core', semester: '1', credits: 4 },
  { id: 2, code: 'CS102', name: 'Data Structures and Algorithms', type: 'Core', semester: '2', credits: 4 },
  { id: 3, code: 'CS201', name: 'Web Development', type: 'Elective', semester: '3', credits: 3 },
  { id: 4, code: 'CS202', name: 'Database Management Systems', type: 'Core', semester: '4', credits: 4 },
  { id: 5, code: 'CS203', name: 'Operating Systems', type: 'Core', semester: '5', credits: 4 },
];

const ViewCourses = () => {
  const handleDownload = () => {
    // Logic for downloading the course list (e.g., generate a CSV file)
    console.log('Download Course List');
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Available Courses</h2>
        <button 
          onClick={handleDownload} 
          className="bg-[#4866F4] text-white px-4 py-2 rounded"
        >
          Download Course List
        </button>
      </div>
      <table className="min-w-full">
        <thead>
          <tr className="bg-[#4866F4] text-white">
            <th className="p-2">#</th>
            <th className="p-2">Course Code</th> {/* New Course Code Column */}
            <th className="p-2">Course Name</th>
            <th className="p-2">Course Type</th>
            <th className="p-2">Semester</th>
            <th className="p-2">Credits</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id} className="h-16"> {/* Set height for rows */}
              <td className="p-2">{course.id}</td>
              <td className="p-2">{course.code}</td> {/* Display Course Code */}
              <td className="p-2">{course.name}</td>
              <td className="p-2 text-center">
                <span className="bg-[#B1D3FC] text-black py-1 px-3 rounded-full">
                  {course.type}
                </span>
              </td>
              <td className="p-2">{course.semester}</td>
              <td className="p-2">{course.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCourses;
