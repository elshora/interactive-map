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
function App() {
  const [markers, setMarkers] = useState([]);

  // Function to clear all markers from the map
  const clearMarkers = () => {
    setMarkers([]);
  };

  return (
    <>
      <main className="home">
        <ClearButton onClick={clearMarkers}>Clear Markers</ClearButton>
        <InteractiveMap markers={markers} setMarkers={setMarkers} />
      </main>
    </>
  );
}
export default App;
