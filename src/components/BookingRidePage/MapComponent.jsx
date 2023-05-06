import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

const center = [51.505, -0.09];

function MapComponent() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  const onMapClick = (event) => {
    const { latlng } = event;
    if (!origin) {
      setOrigin(latlng);
    } else if (!destination) {
      setDestination(latlng);
    }
  };

  const polylinePoints = origin && destination ? [origin, destination] : [];

  return (
    <MapContainer center={center} zoom={13} onClick={onMapClick}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {origin && (
        <Marker position={origin}>
          <Popup>Origin</Popup>
        </Marker>
      )}
      {destination && (
        <Marker position={destination}>
          <Popup>Destination</Popup>
        </Marker>
      )}
      {polylinePoints.length > 0 && (
        <Polyline positions={polylinePoints} color="red" />
      )}
    </MapContainer>
  );
}

export default MapComponent;
