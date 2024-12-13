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
      { latitude: 24.833730, longitude: 67.2200, sequence: 18 },  
      { latitude: 24.833392, longitude: 66.971837, sequence: 19 },  
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
          { 
            "sequence": 1, 
            "name": "Nagan Chowrangi", 
            "latitude": 24.9645, 
            "longitude": 67.0671 
          },
          { 
            "sequence": 2, 
            "name": "Shafiq Morr", 
            "latitude": 24.9609, 
            "longitude": 67.0514 
          },
          { 
            "sequence": 3, 
            "name": "Sohrab Goth", 
            "latitude": 24.9043, 
            "longitude": 67.0803 
          },
          { 
            "sequence": 4, 
            "name": "Gulshan Chowrangi", 
            "latitude": 24.9378, 
            "longitude": 67.0737 
          },
          { 
            "sequence": 5, 
            "name": "NIPA", 
            "latitude": 24.9307, 
            "longitude": 67.0865 
          },
          { 
            "sequence": 6, 
            "name": "Johar Morr", 
            "latitude": 24.9184, 
            "longitude": 67.0807 
          },
          { 
            "sequence": 7, 
            "name": "COD", 
            "latitude": 24.8697, 
            "longitude": 67.0291 
          },
          { 
            "sequence": 8, 
            "name": "Drigh Road Station", 
            "latitude": 24.9130, 
            "longitude": 67.0628 
          },
          { 
            "sequence": 9, 
            "name": "Colony Gate", 
            "latitude": 24.8795, 
            "longitude": 67.0526 
          },
          { 
            "sequence": 10, 
            "name": "Shah Faisal Colony", 
            "latitude": 24.8729, 
            "longitude": 67.0950 
          },
          { 
            "sequence": 11, 
            "name": "Singer Chowrangi", 
            "latitude": 24.9309, 
            "longitude": 67.0937 
          },
          { 
            "sequence": 12, 
            "name": "Landhi Road", 
            "latitude": 24.8604, 
            "longitude": 67.1330 
          }
        ]
      ,
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
      end: "Keamari",
      distance_km: 20,
      start_location: { 
        latitude: 24.985407,
        longitude:  67.065983,
      },
      end_location: {  
        latitude: 24.818550,
        longitude: 66.974947,
      },

      waypoints: [
        { "sequence": 1, "latitude": 24.979338, "longitude":67.066192 }, 
        { "sequence": 2, "latitude": 24.972355, "longitude": 67.066637 }, 
        { "sequence": 3, "latitude": 24.964742, "longitude":  67.067523 },
        { "sequence": 4, "latitude": 24.960424,"longitude": 67.073109 }, 
        { "sequence": 5, "latitude": 24.955526, "longitude": 67.077350}, 
        { "sequence": 6, "latitude":24.951272, "longitude": 67.080294}, 
        { "sequence": 7, "latitude": 24.946245, "longitude":  67.083461 }, 
        { "sequence": 8, "latitude": 24.943334, "longitude":  67.084180 },
        { "sequence": 9, "latitude": 24.938887, "longitude":  67.078808 },
        { "sequence": 10, "latitude": 24.930869, "longitude":  67.068618},

        { "sequence": 11, "latitude": 24.924817,  "longitude": 67.061026},
        { "sequence": 12, "latitude": 24.920398,"longitude": 67.055560 },
        { "sequence": 13, "latitude": 24.911876, "longitude":  67.050420},
        { "sequence": 14, "latitude": 24.903761, "longitude":  67.046834},
        { "sequence": 15, "latitude": 24.882003, "longitude": 67.039763}, 
        { "sequence": 16, "latitude": 24.868133,"longitude":  67.029931 },
        { "sequence": 17, "latitude": 24.844696, "longitude": 66.992091}, 
        { "sequence": 18, "latitude": 24.831620, "longitude": 66.983087}, 
        { "sequence": 19, "latitude": 24.818550, "longitude": 66.974947 }
      ]
    },
    {
      id: 9,
      start: "Gulshan e Hadeed",
      end: "Tower",
      distance_km: 42,
      start_location: { 
        latitude: 24.871035,
        longitude:  67.372195,
      },
      end_location: {  
        latitude: 24.846993,
        longitude: 66.993904,
      },
      
      waypoints: [
        { "sequence": 1, "latitude": 24.864258,  "longitude": 67.349962 },
        { "sequence": 2, "latitude":  24.860168, "longitude":  67.334441 },
        { "sequence": 3, "latitude": 24.859249, "longitude":  67.272122 }, 
        { "sequence": 4, "latitude": 24.854074,"longitude":  67.244323}, 
        { "sequence": 5, "latitude": 24.858811, "longitude": 67.208417},  
        { "sequence": 6, "latitude":24.869619, "longitude": 67.200188},  
        { "sequence": 7, "latitude": 24.884510, "longitude":  67.175418},  
        { "sequence": 8, "latitude": 24.887104, "longitude":  67.130080 }, 
        { "sequence": 9, "latitude": 24.884176, "longitude": 67.116339 }, 
        { "sequence": 10, "latitude": 24.876553, "longitude":   67.101895},

        { "sequence": 11, "latitude": 24.873596,  "longitude":  67.093605},
        { "sequence": 12, "latitude": 24.869579,"longitude": 67.087442 }, 
        { "sequence": 13, "latitude": 24.865899, "longitude":   67.079926},
        { "sequence": 14, "latitude":24.861293, "longitude": 67.067092}, 
        { "sequence": 15, "latitude":24.859234,  "longitude":67.052472}, 
        { "sequence": 16, "latitude": 24.855335,"longitude":  67.038675 },
        { "sequence": 17, "latitude": 24.849693, "longitude": 67.030386},  
        { "sequence": 18, "latitude": 24.853717, "longitude": 67.026373}, 
        { "sequence": 19, "latitude": 24.849999, "longitude": 67.010076 },
        { "sequence": 20, "latitude": 24.846993, "longitude": 66.993904 } 

      ]
    
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

      waypoints: [
        { "sequence": 1, "name": "Numaish", "latitude": 24.8619, "longitude": 67.0228 },
        { "sequence": 2, "name": "Taj Complex", "latitude": 24.8604, "longitude": 67.0293 },
        { "sequence": 3, "name": "Capri Cinema", "latitude": 24.8601, "longitude": 67.0276 },
        { "sequence": 4, "name": "Mobile Market", "latitude": 24.8616, "longitude": 67.0229 },
        { "sequence": 5, "name": "Regal", "latitude": 24.8612, "longitude": 67.0315 },
        { "sequence": 6, "name": "Abdullah Haroon", "latitude": 24.8608, "longitude": 67.0299 },
        { "sequence": 7, "name": "Zainab Market", "latitude": 24.8593, "longitude": 67.0269 },
        { "sequence": 8, "name": "Fawara Chowk", "latitude": 24.8590, "longitude": 67.0271 },
        { "sequence": 9, "name": "Metropole", "latitude": 24.8559, "longitude": 67.0292 },
        { "sequence": 10, "name": "Frere Hall", "latitude": 24.8603, "longitude": 67.0304 },
        { "sequence": 11, "name": "PSO Head Office", "latitude": 24.8529, "longitude": 67.0431 },
        { "sequence": 12, "name": "3 Talwar", "latitude": 24.8069, "longitude": 67.0562 },
        { "sequence": 13, "name": "Ocean Mall", "latitude": 24.8181, "longitude": 67.0492 },
        { "sequence": 14, "name": "2 Talwar", "latitude": 24.8090, "longitude": 67.0566 },
        { "sequence": 15, "name": "Abdullah Shah Ghazi Mazar", "latitude": 24.8196, "longitude": 67.0437 },
        { "sequence": 16, "name": "Bagh Ibn E Qasim", "latitude": 24.8057, "longitude": 67.0473 },
        { "sequence": 17, "name": "Dolmen Mall Clifton", "latitude": 24.8062, "longitude": 67.0385 },
        { "sequence": 18, "name": "Seaview Clock Tower", "latitude": 24.8056, "longitude": 67.0390 },
        { "sequence": 19, "name": "Khayaban e Ittehad", "latitude": 24.8032, "longitude": 67.0625 },
        { "sequence": 20, "name": "DHA Phase 7", "latitude": 24.8215, "longitude": 67.0711 },
        { "sequence": 21, "name": "DHA Phase 6", "latitude": 24.8309, "longitude": 67.0672 },
        { "sequence": 22, "name": "DHA Phase 2", "latitude": 24.8554, "longitude": 67.0430 },
        { "sequence": 23, "name": "KPT Interchange", "latitude": 24.8141, "longitude": 67.0426 },
        { "sequence": 24, "name": "Korangi Crossing", "latitude": 24.8324, "longitude": 67.1582 },
        { "sequence": 25, "name": "Indus Hospital", "latitude": 24.8610, "longitude": 67.1403 },
        { "sequence": 26, "name": "CBM University", "latitude": 24.8833, "longitude": 67.1052 },
        { "sequence": 27, "name": "PARCO", "latitude": 24.8281, "longitude": 67.0703 },
        { "sequence": 28, "name": "Ibrahim Hyderi", "latitude": 24.8421, "longitude": 67.1712 }
      ]
    },
    {
      id: 11,
      start: "Shireen Jinnah Colony", 
      end: "Miran Nakka Lyari",
      distance_km: 19,
      start_location: {
        latitude:24.8172752,  
        longitude: 67.0071251,
      },
      end_location: {
        latitude: 24.878276,  
        longitude: 66.995147,
      },
      waypoints: [
        { "sequence": 1, "latitude": 24.817107,  "longitude": 67.015543 },
        { "sequence": 2, "latitude":  24.815229, "longitude":  67.021209}, 
        { "sequence": 3, "latitude": 24.813011, "longitude":  67.027805}, 
        { "sequence": 4, "latitude":24.809143,"longitude":  67.034351}, 
        { "sequence": 5, "latitude": 24.805423, "longitude": 67.040354},  
        { "sequence": 6, "latitude":24.812640, "longitude":   67.047289}, 
        { "sequence": 7, "latitude":  24.816828,"longitude":  67.051319},  
        { "sequence": 8, "latitude": 24.819784, "longitude":  67.047677 }, 
        { "sequence": 9, "latitude": 24.824053, "longitude": 67.044553},  
        { "sequence": 10, "latitude": 24.829756, "longitude":    67.041225},

        { "sequence": 11, "latitude": 24.835425,  "longitude":  67.037237}, 
        { "sequence": 12, "latitude": 24.841348,"longitude": 67.032253}, 
        { "sequence": 13, "latitude": 24.846713,  "longitude":   67.024883},
        { "sequence": 14, "latitude":24.843135, "longitude": 67.011805},  
        { "sequence": 15, "latitude":24.845110,  "longitude":66.998538},  
        { "sequence": 16, "latitude": 24.852196,"longitude":  66.987981 }, 
        { "sequence": 17, "latitude":24.861798, "longitude": 66.987074},  
        { "sequence": 18, "latitude": 24.867333,  "longitude": 66.981986},
        { "sequence": 19, "latitude": 24.873815, "longitude":  66.982412 },
        { "sequence": 20, "latitude": 24.877492, "longitude": 66.990998 },
        { "sequence": 21, "latitude": 24.878276, "longitude": 66.995147 }  


      ]
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
      waypoints: [
    { "sequence": 1, "name": "Naddi Kinara", "latitude": 24.8729, "longitude": 67.1052 },
    { "sequence": 2, "name": "Khokhrapar", "latitude": 24.8660, "longitude": 67.1233 },
    { "sequence": 3, "name": "Saudabad Chowrangi", "latitude": 24.8645, "longitude": 67.1473 },
    { "sequence": 4, "name": "RCD Ground", "latitude": 24.8282, "longitude": 67.1490 },
    { "sequence": 5, "name": "Kalaboard", "latitude": 24.8650, "longitude": 67.1435 },
    { "sequence": 6, "name": "Malir 15", "latitude": 24.8689, "longitude": 67.1514 },
    { "sequence": 7, "name": "Malir Mandir", "latitude": 24.8584, "longitude": 67.1568 },
    { "sequence": 8, "name": "Malir Session Court", "latitude": 24.8561, "longitude": 67.1582 },
    { "sequence": 9, "name": "Murghi Khana", "latitude": 24.8493, "longitude": 67.1690 },
    { "sequence": 10, "name": "Quaidabad", "latitude": 24.8277, "longitude": 67.1516 },
    { "sequence": 11, "name": "Dawood Chowrangi", "latitude": 24.8362, "longitude": 67.1609 },
    { "sequence": 12, "name": "Babar Market", "latitude": 24.8482, "longitude": 67.1619 },
    { "sequence": 13, "name": "Landhi Road", "latitude": 24.8270, "longitude": 67.1750 },
    { "sequence": 14, "name": "Nasir Jump", "latitude": 24.8420, "longitude": 67.1763 },
    { "sequence": 15, "name": "Indus Hospital", "latitude": 24.8610, "longitude": 67.1403 },
    { "sequence": 16, "name": "Korangi Crossing", "latitude": 24.8324, "longitude": 67.1582 },
    { "sequence": 17, "name": "Qayyumabad", "latitude": 24.8289, "longitude": 67.1660 },
    { "sequence": 18, "name": "Defence Mor", "latitude": 24.8069, "longitude": 67.0562 },
    { "sequence": 19, "name": "National Medical Center", "latitude": 24.8328, "longitude": 67.0653 },
    { "sequence": 20, "name": "Gora Qabristan", "latitude": 24.8060, "longitude": 67.0472 },
    { "sequence": 21, "name": "FTC", "latitude": 24.8614, "longitude": 67.0322 },
    { "sequence": 22, "name": "Jutt Land", "latitude": 24.8276, "longitude": 67.1432 },
    { "sequence": 23, "name": "Lines Area", "latitude": 24.8612, "longitude": 67.0212 },
    { "sequence": 24, "name": "Army Public School", "latitude": 24.8651, "longitude": 67.0241 },
    { "sequence": 25, "name": "Lucky Star Saddar", "latitude": 24.8602, "longitude": 67.0217 }
  ]
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
