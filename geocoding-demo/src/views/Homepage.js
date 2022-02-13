import { Nav } from "../components/NavigationBar";
import { Map } from "../components/Map";

export const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Map darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
};
