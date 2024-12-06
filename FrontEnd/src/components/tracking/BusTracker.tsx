import React, { useState, useEffect } from 'react';
import BusMap from './BusMap';

const BusTracker: React.FC = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 24.912188, // Starting point: 24°54'43.8"N 67°11'53.1"E
    longitude: 67.198070,
   
  });

  const route = [
    { latitude:24.912188, longitude: 67.198070 }, // First point
    { latitude: 24.9124, longitude: 67.1856 }, // Second point: 24°54'44.9"N 67°11'08.2"E
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % route.length; // Loop through route
      setCoordinates(route[index]);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return <BusMap latitude={coordinates.latitude} longitude={coordinates.longitude} />;
};

export default BusTracker;
