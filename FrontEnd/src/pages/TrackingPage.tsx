import React from 'react';
import BusTracker from '../components/tracking/BusTracker';

const TrackingPage: React.FC = () => {
  return (
    <div className="tracking-page">
      <h1 className="text-2xl font-bold mb-4">Bus Tracking</h1>
      <BusTracker />
    </div>
  );
};

export default TrackingPage;
