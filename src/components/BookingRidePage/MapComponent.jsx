import React, { useEffect } from "react";

mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_API_KEY;

const MapComponent = () => {
  useEffect(() => {
    // Create a new Mapbox map instance
    const map = new window.mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.4194, 37.7749],
      zoom: 12,
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    });

    map.addControl(directions, "top-left");

    // Clean up the map instance when the component is unmounted
    return () => map.remove();
  }, []);

  return (
    <div id="map-container" style={{ width: "100%", height: "90vh" }}></div>
  );
};

export default MapComponent;
