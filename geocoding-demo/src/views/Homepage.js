import { Nav } from "../components/NavigationBar";
import { Map } from "../components/Map";
import { LeftBar } from "../components/LeftSideBar";

export const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <Nav/>
      <Map/>
      <LeftBar />
    </div>
  );
};
