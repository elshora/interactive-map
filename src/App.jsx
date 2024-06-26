import styled from "styled-components";
import InteractiveMap from "./components/InteractiveMap";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

// Styled clear button component located on the top right of the page
const ClearButton = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  z-index: 5000;
  &:hover {
    background-color: #0056b3;
  }
`;
const Notification = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  z-index: 5000;
`;
function App() {
  const [markers, setMarkers] = useState([]);

  // Function to clear all markers from the map
  const clearMarkers = () => {
    setMarkers([]);
  };

  return (
    <>
      <main className="home">
        {markers.length > 0 ? (
          <ClearButton onClick={clearMarkers}>Clear Markers</ClearButton>
        ) : (
          <Notification>Click on the map to add a marker</Notification>
        )}
        <InteractiveMap markers={markers} setMarkers={setMarkers} />
      </main>
    </>
  );
}
export default App;
