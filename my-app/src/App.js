import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Adjust path as necessary
import CurrentSemester from './components/CurrentSemester'; // Import the CurrentSemester component
import Registration from './components/Registration'; // Import the Registration component
import Miscellaneous from './components/Miscellaneous'; // Import Miscellaneous component

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/current-semester" element={<CurrentSemester />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/miscellaneous" element={<Miscellaneous />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
