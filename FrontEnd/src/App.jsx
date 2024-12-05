import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrackingPage from './pages/TrackingPage';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </Router>
  );
};

export default App;