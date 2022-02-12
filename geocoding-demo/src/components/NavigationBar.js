import { ToggleDarkModeBtn } from "./ToggleDarkModeBtn";
import { motion } from "framer-motion";

export const Nav = ({ darkMode, setDarkMode }) => {
  return (
    <>
      {!darkMode && <motion.div
        initial={false}
        className="grid grid-cols-3 h-16"
        initial={{ backgroundColor: "#0f172a" }}
        animate={{ backgroundColor: "#ffffff", transition: {duration: 0.5} }}
        exit={{ backgroundColor: "#0f172a" }}
      >
        <div className="col-span-2 flex justify-start items-center px-4">
          <ToggleDarkModeBtn setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
      </motion.div>}
      {darkMode && <motion.div
        initial={false}
        className="grid grid-cols-3 h-16"
        initial={{ backgroundColor: "#ffffff" }}
        animate={{ backgroundColor: "#0f172a", transition: {duration: 0.5} }}
        exit={{ backgroundColor: "#ffffff" }}
      >
        <div className="col-span-2 flex justify-start items-center px-4">
          <ToggleDarkModeBtn setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
      </motion.div>}
    </>
  );
};
