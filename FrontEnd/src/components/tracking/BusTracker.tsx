import React, { useState, useEffect, useRef } from "react";
import BusMap from "./BusMap";
import { disposedError } from "ol/DataTile";

interface Waypoint {
  latitude: number;
  longitude: number;
  sequence: number;
}

interface BusRoute {
  id: number;
  start: string;
  end: string;
  waypoints: Waypoint[];
}

interface Bus {
  id: number;
  coordinates: Waypoint;
  currentSequence: number;
  direction: "forward" | "backward";
}

const BusTracker: React.FC = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [routes, setRoutes] = useState<BusRoute[]>([]);
  const busesRef = useRef<Bus[]>([]); // Mutable ref for bus state
  // Fetch routes and initialize buses
  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/routes");
        const data = await response.json();
        setRoutes(data.routes);

        // Initialize buses at the first waypoint of their respective routes
        const initializedBuses = data.routes.map((route: BusRoute) => ({
          id: route.id,
          coordinates: route.waypoints[0],
          currentSequence: 0,
          direction: "forward" as const,
        }));
        setBuses(initializedBuses);
        busesRef.current = initializedBuses; // Sync mutable ref
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };

    fetchRoutes();
  }, []);

  // Manage bus movement with intervals
  useEffect(() => {
    if (!routes.length || !buses.length) return;
    busesRef.current.forEach((bus, ind) => {
      const route = routes.find((route) => route.id === bus.id);
      if (!route) return;
      // sequence, direction, & waypoints:
      let currentSequence = bus.currentSequence;
      let direction = bus.direction;
      let waypoints = route.waypoints;

      const intervalTime = (30*60*1000) / waypoints.length; // (making sure the bus reaches its destination in 30 minutes)
      // Setting up interval:
      setInterval(() => {
        // navigation
        if (direction === "forward") {
          if (currentSequence < waypoints.length - 1) {
            currentSequence++;
          } else {
            direction = "backward";
            currentSequence--;
          }
        } else {
          if (currentSequence > 0) {
            currentSequence--;
          } else {
            currentSequence++;
            direction = "forward";
          }
        }

        // setting buses:
        const updatedBuses = busesRef.current.map((bus) => {
          if (bus.id === route.id) {
            return {
              ...bus,
              currentSequence,
              direction,
              coordinates: waypoints[currentSequence],
            };
          } else return bus;
        });
        // now here, we update the busesRef and the state:
        busesRef.current = updatedBuses;
        setBuses(updatedBuses);
      }, intervalTime);
    });
  }, [routes]);

  return (
    <div>
      <BusMap buses={buses} />
    </div>
  );
};

export default BusTracker;
