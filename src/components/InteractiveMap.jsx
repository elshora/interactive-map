import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../assets/icons/Marker.svg";
import { Icon } from "leaflet";

const myIcon = new Icon({
  iconUrl: markerIcon,
  iconSize: [32, 32],
});

// eslint-disable-next-line react/prop-types
const InteractiveMap = ({ markers, setMarkers }) => {
  // Handle marker drag end event
  const handleMarkerDragEnd = (index, e) => {
    const { lat, lng } = e.target.getLatLng();
    // Update the position of the dragged marker in the markers array
    // eslint-disable-next-line react/prop-types
    const updatedMarkers = markers.map((marker, i) =>
      i === index ? { lat, lng } : marker
    );
    setMarkers(updatedMarkers);
  };

  // Add marker on map click event
  const addMarker = (e) => {
    const { lat, lng } = e.latlng;
    setMarkers([...markers, { lat, lng }]);
  };

  return (
    <MapContainer
      center={[30.08367001894526, 31.252864118567768]}
      zoom={6}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerEvents addMarker={addMarker} />
      {/*  eslint-disable-next-line react/prop-types */}
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.lat, marker.lng]}
          draggable={true}
          icon={myIcon}
          eventHandlers={{
            dragend: (e) => handleMarkerDragEnd(index, e),
          }}
        >
          <Popup>{`( ${marker.lat} , ${marker.lng} )`}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

// Component to handle marker events
// eslint-disable-next-line react/prop-types
const MarkerEvents = ({ addMarker }) => {
  useMapEvents({
    click: (e) => {
      addMarker(e);
    },
  });
  return null;
};

export default InteractiveMap;
