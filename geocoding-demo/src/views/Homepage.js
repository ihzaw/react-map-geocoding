import { Nav } from "../components/NavigationBar";
import { Map } from "../components/Map";
import { LeftBar } from "../components/LeftSideBar";
import { RightBar } from "../components/RightSideBar";

export const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <Nav/>
      <Map/>
      <LeftBar />
      <RightBar />
    </div>
  );
};
