import { Nav } from "../components/NavigationBar";
import { Map } from "../components/Map";
import { LeftBar } from "../components/LeftSideBar";
import { RightBar } from "../components/RightSideBar";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Map />
      <LeftBar />
      <RightBar />
    </div>
  );
};
