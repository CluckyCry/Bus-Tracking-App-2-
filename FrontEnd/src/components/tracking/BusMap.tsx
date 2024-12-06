import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import Feature from 'ol/Feature';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Point } from 'ol/geom';

interface BusMapProps {
  latitude: number;
  longitude: number;
}

const BusMap: React.FC<BusMapProps> = ({ latitude, longitude }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const busIconUrl = 'images/redbusicon.png'; // Path to your bus icon

  useEffect(() => {
    if (mapRef.current) {
      // Create a new map
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new VectorLayer({
            source: new VectorSource({
              features: [
                new Feature({
                  geometry: new Point(fromLonLat([longitude, latitude])),
                }),
              ],
            }),
            style: new Style({
              image: new Icon({
                src: busIconUrl,
                scale: 0.1, // Adjust the scale as needed
              }),
            }),
          }),
        ],
        view: new View({
          center: fromLonLat([longitude, latitude]),
          zoom: 15,
        }),
      });

      // Clean up on unmount
      return () => map.setTarget(undefined);
    }
  }, [latitude, longitude]);

  return (
    <div
      ref={mapRef}
      style={{ height: '100%', width: '100%' }}
    />
  );
};

export default BusMap;