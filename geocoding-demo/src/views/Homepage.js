import { Nav } from "../components/NavigationBar";
import { Map } from "../components/Map";
import { LeftBar } from "../components/LeftSideBar";
import { RightBar } from "../components/RightSideBar";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Home = () => {
  const [lngLat, setLngLat] = useState([])

  return (
    <div className="overflow-hidden">
      <Nav />
      <Map lngLat={lngLat}/>
      <LeftBar setLngLat={setLngLat} />
      <RightBar />
    </div>
  );
};
