import React from 'react';

const AddCourse = ({ onAddCourse, addedCourses }) => {
  const courses = [
    { id: 1, code: 'CS1', name: 'Introduction to Computer Science', branch: 'CSE', credits: 3 },
    { id: 2, code: 'CS2', name: 'Calculus II', branch: 'CSE', credits: 4 },
    { id: 3, code: 'CS3', name: 'English Literature', branch: 'HUM', credits: 2 },
    { id: 4, code: 'CS4', name: 'Physics I', branch: 'CSE', credits: 4 },
    { id: 5, code: 'CS5', name: 'Chemistry I', branch: 'CSE', credits: 3 },
    { id: 6, code: 'CS6', name: 'Biology I', branch: 'BIO', credits: 3 },
    { id: 7, code: 'CS7', name: 'Data Structures and Algorithms', branch: 'CSE', credits: 4 },
    { id: 8, code: 'CS8', name: 'Database Management Systems', branch: 'CSE', credits: 4 },
  ];

  const isCourseAdded = (course) => {
    return addedCourses.some((addedCourse) => addedCourse.code === course.code);
  };

  const handleCourseClick = (course) => {
    if (isCourseAdded(course)) {
      // Remove course
      onAddCourse(-course.credits); // Passing negative credits to deduct
    } else {
      // Add course
      onAddCourse(course.credits); // Adding credits
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Available Courses</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-[#4866F4] text-white">
            <th className="p-2 border">#</th>
            <th className="p-2 border">Course Code</th>
            <th className="p-2 border">Course Name</th>
            <th className="p-2 border">Branch</th>
            <th className="p-2 border">Credits</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="h-16 border-t">
              <td className="p-2 border">{course.id}</td>
              <td className="p-2 border">{course.code}</td>
              <td className="p-2 border">{course.name}</td>
              <td className="p-2 border">{course.branch}</td>
              <td className="p-2 border">{course.credits}</td>
              <td className="p-2 border">
                <button
                  className={`px-2 py-1 rounded ${isCourseAdded(course) ? 'bg-red-600 hover:bg-red-500' : 'bg-[#4866F4] hover:bg-[#3b55d1]'} text-white`}
                  onClick={() => handleCourseClick(course)}
                >
                  {isCourseAdded(course) ? 'Remove' : 'Add'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddCourse;
