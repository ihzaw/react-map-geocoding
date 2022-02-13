import { ToggleDarkModeBtn } from "./ToggleDarkModeBtn";
import { motion } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useSelector } from "react-redux";

export const Nav = () => {
  const darkMode = useSelector((state) => state.darkMode)
  
  return (
    <>
      {!darkMode && <motion.div
        initial={false}
        className="grid grid-cols-3 h-16"
        initial={{ backgroundColor: "#0f172a" }}
        animate={{ backgroundColor: "#ffffff", transition: {duration: 0.5} }}
        exit={{ backgroundColor: "#0f172a" }}
      >
        <div className="grid grid-cols-2 col-span-2 items-center px-4 font-bold text-slate-900">
          <ToggleDarkModeBtn/>
          <LanguageSwitcher />
        </div>
      </motion.div>}
      {darkMode && <motion.div
        initial={false}
        className="grid grid-cols-3 h-16"
        initial={{ backgroundColor: "#ffffff" }}
        animate={{ backgroundColor: "#0f172a", transition: {duration: 0.5} }}
        exit={{ backgroundColor: "#ffffff" }}
      >
        <div className="grid grid-cols-2 col-span-2 items-center px-4 font-bold text-[#19817c]">
          <ToggleDarkModeBtn/>
          <LanguageSwitcher />
        </div>
      </motion.div>}
    </>
  );
};
