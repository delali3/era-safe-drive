import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom vehicle marker icon
const vehicleIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#059669" width="32" height="32">
      <path d="M21,11H19.93C19.75,9.58 18.79,8.4 17.5,7.9V6A1,1 0 0,0 16.5,5H7.5A1,1 0 0,0 6.5,6V7.9C5.21,8.4 4.25,9.58 4.07,11H3A1,1 0 0,0 2,12A1,1 0 0,0 3,13H4.07C4.25,14.42 5.21,15.6 6.5,16.1V18A1,1 0 0,0 7.5,19H8.5A1,1 0 0,0 9.5,18V17H14.5V18A1,1 0 0,0 15.5,19H16.5A1,1 0 0,0 17.5,18V16.1C18.79,15.6 19.75,14.42 19.93,13H21A1,1 0 0,0 22,12A1,1 0 0,0 21,11M8,14A2,2 0 0,1 6,12A2,2 0 0,1 8,10A2,2 0 0,1 10,12A2,2 0 0,1 8,14M16,14A2,2 0 0,1 14,12A2,2 0 0,1 16,10A2,2 0 0,1 18,12A2,2 0 0,1 16,14Z"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

const LocationMap = ({ 
  longitude = 0, 
  latitude = 0, 
  vehicleId = 'Unknown', 
  driverName = 'Unknown Driver',
  height = '400px',
  className = '' 
}) => {
  // Safely convert and validate coordinates with comprehensive null/undefined checks
  const safeLongitude = longitude != null ? parseFloat(longitude) : 0;
  const safeLatitude = latitude != null ? parseFloat(latitude) : 0;
  // 
  // Default to London if coordinates are invalid or null
  const validLat = isNaN(safeLatitude) || safeLatitude === 0 ? 4.95097 : safeLatitude;
  const validLng = isNaN(safeLongitude) || safeLongitude === 0 ? -1.72069 : safeLongitude;

  return (
    <div className={`relative rounded-xl overflow-hidden border border-gray-200 shadow-sm ${className}`} style={{ height }}>
      <MapContainer
        center={[validLat, validLng]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[validLat, validLng]} icon={vehicleIcon}>
          <Popup>
            <div className="p-2">
              <div className="font-bold text-green-600 mb-1">{vehicleId}</div>
              <div className="text-gray-800 mb-1">Driver: {driverName}</div>
              <div className="text-sm text-gray-600">
                <div>Latitude: {(validLat || 0).toFixed(6)}°</div>
                <div>Longitude: {(validLng || 0).toFixed(6)}°</div>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* Overlay with vehicle info */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-md border border-white/50 z-10">
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-semibold text-gray-800">{vehicleId}</span>
        </div>
        <div className="text-sm text-gray-600">{driverName}</div>
        <div className="text-xs text-gray-500 mt-1">
          {(validLat || 0).toFixed(4)}°, {(validLng || 0).toFixed(4)}°
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
