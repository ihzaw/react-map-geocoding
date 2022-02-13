import "../App.css";
import mapboxgl from "mapbox-gl";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export const Map = ({ lngLat }) => {
  const darkMode = useSelector((state) => state.darkMode);
  const lightMap = "mapbox://styles/mapbox/streets-v11";
  const darkMap = "mapbox://styles/ihzanantama/ckzh2aucc000l15o9xvf0twvs";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(106.816666);
  const [lat, setLat] = useState(-6.2);
  const [zoom, setZoom] = useState(9);
  const marker = new mapboxgl.Marker()


  mapboxgl.accessToken =
    "pk.eyJ1IjoiaWh6YW5hbnRhbWEiLCJhIjoiY2t4NW02Y3B3MDNhajJ2bzNtZzllcmhyYiJ9.keA6mU1OUSS8JqO9U9n8hg";

  // initialize map
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: localStorage.theme === "dark" ? darkMap : lightMap,
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  // change map style
  useEffect(() => {
    darkMode ? map.current.setStyle(darkMap) : map.current.setStyle(lightMap);
  }, [darkMode]);

  // jump to map location                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  useEffect(() => {
    if (lngLat[0] && lngLat[1]) {
      map.current.flyTo({
        center: [lngLat[1], lngLat[0]],
        essential: true,
      });
      marker
        .setLngLat([lngLat[1], lngLat[0]])
        .addTo(map.current);
    }
  }, [lngLat]);

  return (
    <div className="flex justify-center h-[90vh] w-screen">
      <div id="map" ref={mapContainer}></div>;
    </div>
  );
};
