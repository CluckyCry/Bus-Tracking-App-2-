import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrackingPage from './pages/TrackingPage';
import NavigationMenu from './components/common/Navbar'; // Import Navbar
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tracking" element={<TrackingPage />} />
        </Routes>
    
    </Router>
  );
};

export default App;
