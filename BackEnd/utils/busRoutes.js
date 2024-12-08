const routes = [
    {
      id: 1,
      start: "Model Colony",
      end: "Dockyard",
      distance_km: 28,
      start_location: {
        latitude: 24.9069,
        longitude: 67.1386,
      },
      end_location: {
        latitude: 24.8081,
        longitude: 66.9893,
      },
waypoints: [
      { latitude: 24.9069, longitude: 67.1386, sequence: 1 },
      { latitude: 24.9100, longitude: 67.1400, sequence: 2 },
      { latitude: 24.9130, longitude: 67.1450, sequence: 3 },
      { latitude: 24.9150, longitude: 67.1500, sequence: 4 },
      { latitude: 24.9170, longitude: 67.1550, sequence: 5 },
      { latitude: 24.9200, longitude: 67.1600, sequence: 6 },
      { latitude: 24.9220, longitude: 67.1650, sequence: 7 },
      { latitude: 24.9240, longitude: 67.1700, sequence: 8 },
      { latitude: 24.9260, longitude: 67.1750, sequence: 9 },
      { latitude: 24.9280, longitude: 67.1800, sequence: 10 },
      { latitude: 24.9300, longitude: 67.1850, sequence: 11 },
      { latitude: 24.9320, longitude: 67.1900, sequence: 12 },
      { latitude: 24.9340, longitude: 67.1950, sequence: 13 },
      { latitude: 24.9360, longitude: 67.2000, sequence: 14 },
      { latitude: 24.9380, longitude: 67.2050, sequence: 15 },
      { latitude: 24.9400, longitude: 67.2100, sequence: 16 },
      { latitude: 24.9420, longitude: 67.2150, sequence: 17 },
      { latitude: 24.9440, longitude: 67.2200, sequence: 18 },
      { latitude: 24.9460, longitude: 67.2250, sequence: 19 },
      { latitude: 24.833093, longitude: 66.971648, sequence: 20 },
        
      ]
    },
    {
      id: 2,
      start: "Power House",
      end: "Indus Hospital",
      distance_km: 30,
      start_location: {
        latitude: 24.9565,
        longitude: 67.0649,
      },
      end_location: {
        latitude: 24.8554,
        longitude: 67.2473,
      },

        waypoints: [
      { latitude: 24.9069, longitude: 67.1386, sequence: 1 },
      { latitude: 24.9100, longitude: 67.1400, sequence: 2 },
      { latitude: 24.9130, longitude: 67.1450, sequence: 3 },
      { latitude: 24.9150, longitude: 67.1500, sequence: 4 },
      { latitude: 24.9170, longitude: 67.1550, sequence: 5 },
      { latitude: 24.9200, longitude: 67.1600, sequence: 6 },
      { latitude: 24.9220, longitude: 67.1650, sequence: 7 },
      { latitude: 24.9240, longitude: 67.1700, sequence: 8 },
      { latitude: 24.9260, longitude: 67.1750, sequence: 9 },
      { latitude: 24.9280, longitude: 67.1800, sequence: 10 },
      { latitude: 24.9300, longitude: 67.1850, sequence: 11 },
      { latitude: 24.9320, longitude: 67.1900, sequence: 12 },
      { latitude: 24.9340, longitude: 67.1950, sequence: 13 },
      { latitude: 24.9360, longitude: 67.2000, sequence: 14 },
      { latitude: 24.9380, longitude: 67.2050, sequence: 15 },
      { latitude: 24.9400, longitude: 67.2100, sequence: 16 },
      { latitude: 24.9420, longitude: 67.2150, sequence: 17 },
      { latitude: 24.9440, longitude: 67.2200, sequence: 18 },
      { latitude: 24.9460, longitude: 67.2250, sequence: 19 },
      { latitude: 24.833093, longitude: 66.971648, sequence: 20 },
    },
    {
      id: 3,
      start: "Power House",
      end: "Shaan Chowrangi",
      distance_km: 31,
      start_location: {
        latitude: 24.9565,
        longitude: 67.0649,
      },
      end_location: {
        latitude: 24.9223,
        longitude: 67.0925,
      },
    },
    {
      id: 4,
      start: "Power House",
      end: "Tower",
      distance_km: 21,
      start_location: {
        latitude: 24.9565,
        longitude: 67.0649,
      },
      end_location: {
        latitude: 24.85,
        longitude: 67.0113,
      },
    },
    {
      id: 9,
      start: "Gulshan e Hadeed",
      end: "Tower",
      distance_km: 42,
      start_location: {
        latitude: 24.7892,
        longitude: 67.2066,
      },
      end_location: {
        latitude: 24.85,
        longitude: 67.0113,
      },
    },
    {
      id: 10,
      start: "Numaish Chowrangi",
      end: "Ibrahim Hyderi",
      distance_km: 28,
      start_location: {
        latitude: 24.8738,
        longitude: 67.0365,
      },
      end_location: {
        latitude: 24.8012,
        longitude: 67.1745,
      },
    },
    {
      id: 11,
      start: "Shireen Jinnah Colony",
      end: "Miran Nakka Lyari",
      distance_km: 19,
      start_location: {
        latitude: 24.8141,
        longitude: 67.0331,
      },
      end_location: {
        latitude: 24.8724,
        longitude: 67.0101,
      },
    },
    {
      id: 12,
      start: "Khokrapar",
      end: "Lucky Star Saddar",
      distance_km: 32,
      start_location: {
        latitude: 24.8992,
        longitude: 67.1838,
      },
      end_location: {
        latitude: 24.8551,
        longitude: 67.0342,
      },
    },
  ];
  
  export function getRoutes() {
    return routes;
  }
  
  /*
  export function initializeBus(busId, startCoords, stopCoords){
      busData[busId] = {
          startingPoint: startCoords,
          endingPoint: stopCoords,
          currentLocation: startCoords
      }
  }
  
  export function updateBusData(busId, updatedProperty) {
    const bData = busData[busId]; // Accessing the data of the specific bus.
    busData[busId] = { ...bData, updatedProperty };
  }
    */
