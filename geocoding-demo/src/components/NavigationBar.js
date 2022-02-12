import { useState } from "react";
import { Moon } from "./MoonLogo";
import { SunLogo } from "./SunLogo";

export const Nav = () => {
    const [darkMode, setDarkMode] = useState(true)
  return (
    <div className="grid grid-cols-3 h-16">
      <div className="col-span-2 flex justify-start items-center px-4">
        <div className="flex rounded-full justify-between items-center w-20 h-8 border-2 px-1 border-[#19817c] cursor-pointer" onClick={() => setDarkMode(darkMode ? false : true)}>
          <SunLogo darkMode={darkMode}/>
          <Moon darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};
