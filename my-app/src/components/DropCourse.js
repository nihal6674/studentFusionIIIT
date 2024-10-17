import React from 'react';

const DropCourse = ({ addedCourses, onDropCourse }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Dropped Courses</h2>
      {addedCourses.length > 0 ? (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-[#4866F4] text-white">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Course Code</th>
              <th className="p-2 border">Credits</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {addedCourses.map((course, index) => (
              <tr key={index} className="h-16 border-t">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{course.code}</td>
                <td className="p-2 border">{course.credits}</td>
                <td className="p-2 border">
                  <button
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500"
                    onClick={() => onDropCourse(course)}
                  >
                    Drop
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No courses added.</p>
      )}
    </div>
  );
};

export default DropCourse;
