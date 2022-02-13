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
        className="grid grid-cols-3 h-16 "
        initial={{ backgroundColor: "#0f172a" }}
        animate={{ backgroundColor: "#246d69", transition: {duration: 0.5} }}
        exit={{ backgroundColor: "#0f172a" }}
      >
        <div className="grid grid-cols-2 col-span-2 items-center px-4 font-bold text-[#b9d8d7]">
          <ToggleDarkModeBtn/>
          <LanguageSwitcher />
        </div>
      </motion.div>}
      {darkMode && <motion.div
        initial={false}
        className="grid grid-cols-3 h-16"
        initial={{ backgroundColor: "#246d69" }}
        animate={{ backgroundColor: "#0f172a", transition: {duration: 0.5} }}
        exit={{ backgroundColor: "#246d69" }}
      >
        <div className="grid grid-cols-2 col-span-2 items-center px-4 font-bold text-[#b9d8d7]">
          <ToggleDarkModeBtn/>
          <LanguageSwitcher />
        </div>
      </motion.div>}
    </>
  );
};
