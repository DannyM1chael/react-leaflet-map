import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import LocationMarker from "./components/LocationMarker";
import DraggableMarker from "./components/DraggableMarker";

const center = [51.505, -0.09];

const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [13, 0],
});

function App() {
  return (
    <div className="App">
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "100vh" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <DraggableMarker icon={customMarker} center={center} />
        <LocationMarker icon={customMarker} />
      </MapContainer>
    </div>
  );
}

export default App;
