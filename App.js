// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import UserVisualization from './components/UserVisualization';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define a route for the user info form */}
        <Route path="/" element={<UserInfo />} />

        {/* Define a route for the user visualization page */}
        <Route path="/visualization" element={<UserVisualization />} />
      </Routes>
    </Router>
  );
}

export default App;