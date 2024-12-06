import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bus, Navigation } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="homepage bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 text-center transform transition-all hover:scale-105 hover:shadow-3xl ">
        <div className="mb-6 flex justify-center items-center space-x-4">
          <Bus className="text-blue-600 w-12 h-12 " />
          <h1 className="text-4xl font-extrabold text-gray-800 ">
            Bus Tracker
          </h1>
        </div>
        
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          Effortlessly track your bus location in real-time. 
          Stay informed, reduce waiting time, and plan your journey smarter.
        </p>
        
        <div className="flex flex-col space-y-4">
          <div className="flex items-center bg-blue-50 p-3 rounded-lg">
            <MapPin className="text-blue-500 mr-3 w-6 h-6" />
            <span className="text-blue-700">Real-time Location Updates</span>
          </div>
          <div className="flex items-center bg-green-50 p-3 rounded-lg">
            <Navigation className="text-green-500 mr-3 w-6 h-6" />
            <span className="text-green-700">Accurate Route Tracking</span>
          </div>
        </div>
        
        <Link 
          to="/tracking"
          className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 
          bg-blue-500 text-white rounded-lg shadow-lg 
          hover:bg-blue-600 transition duration-300 
          transform hover:-translate-y-1 hover:scale-105 
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Start Tracking
        </Link>
      </div>
    </div>
  );
};

export default HomePage;