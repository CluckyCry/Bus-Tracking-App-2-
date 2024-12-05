import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

interface BusMapProps {
  latitude: number;
  longitude: number;
}

const BusMap: React.FC<BusMapProps> = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[latitude, longitude]} />
    </MapContainer>
  );
};

export default BusMap;
