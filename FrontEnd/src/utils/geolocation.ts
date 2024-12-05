export const simulateMovement = (latitude: number, longitude: number): { latitude: number; longitude: number } => {
    return {
      latitude: latitude + 0.0001,
      longitude: longitude + 0.0001,
    };
  };
  