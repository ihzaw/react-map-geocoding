import "../App.css";
import mapboxgl from "mapbox-gl";
import { useState, useRef, useEffect } from "react";

export const Map = ({ darkMode, setDarkMode }) => {
  const lightMap = "mapbox://styles/mapbox/streets-v11";
  const darkMap = "mapbox://styles/ihzanantama/ckzh2aucc000l15o9xvf0twvs";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(106.816666);
  const [lat, setLat] = useState(-6.200000);
  const [zoom, setZoom] = useState(9);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiaWh6YW5hbnRhbWEiLCJhIjoiY2t4NW02Y3B3MDNhajJ2bzNtZzllcmhyYiJ9.keA6mU1OUSS8JqO9U9n8hg";

  // initialize map
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: lightMap,
      center: [lng, lat],
      zoom: zoom,
    });
    const marker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);
  }, []);

  // change map style
  useEffect(() => {
    darkMode ? map.current.setStyle(darkMap) : map.current.setStyle(lightMap);
  }, [darkMode]);

  return (
    <div className="flex justify-center h-[90vh] w-screen">
      <div id="map" ref={mapContainer}></div>;
      <button className="bg-blue-100 p-4 absolute">test</button>
    </div>
  );
};
