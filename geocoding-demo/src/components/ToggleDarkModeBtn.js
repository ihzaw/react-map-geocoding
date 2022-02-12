import { motion } from "framer-motion";
import { SunLogo } from "./SunLogo";
import { Moon } from "./MoonLogo";

export const ToggleDarkModeBtn = ({ darkMode, setDarkMode }) => {
  const variants = {
    toRight: { translateX: 20 },
    toLeft: { translateX: -24 }
  };
  return (
    <motion.div
      className="flex rounded-full justify-between items-center w-20 h-10 border-2 px-1 border-[#19817c] cursor-pointer"
      onClick={() => setDarkMode(darkMode ? false : true)}
    >
      <SunLogo darkMode={darkMode} />
      <Moon darkMode={darkMode} />
      <motion.div
        animate={darkMode ? "toRight" : "toLeft"}
        variants={variants}
        className="absolute left-11 bg-white border-2 rounded-full p-3"
      ></motion.div>
    </motion.div>
  );
};
