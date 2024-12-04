import React, { useState, useEffect } from 'react';
import BusMap from './BusMap';

const BusTracker: React.FC = () => {
  const [coordinates, setCoordinates] = useState({ latitude: 24.8607, longitude: 67.0011 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCoordinates((prev) => ({
        latitude: prev.latitude + 0.0001,
        longitude: prev.longitude + 0.0001,
      }));
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return <BusMap latitude={coordinates.latitude} longitude={coordinates.longitude} />;
};

export default BusTracker;
