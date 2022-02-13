import { useState } from "react";
import { Menu } from "./MenuIcon";
import { motion } from "framer-motion";

export const RightBar = () => {
  const [open, setOpen] = useState(true);
  const variants = {
    close: { x: 210 },
    open: { x: 0 },
    unShowOption: { opacity: 0 },
    showOption: { opacity: 1 },
  };

  return (
    <div>
      <motion.div
        initial={false}
        variants={variants}
        animate={open ? "open" : "close"}
        className="absolute border-[#19817c] border-b border-r text-base text-[#19817c] bg-white dark:bg-slate-800 dark:text-white w-60 h-3/4 right-4 top-20 rounded-lg shadow-sm shadow-gray-700 flex-row justify-center p-4"
      >
        <div
          className="absolute left-2 top-2 w-auto h-auto cursor-pointer"
          onClick={() => (open ? setOpen(false) : setOpen(true))}
        >
          <Menu />
        </div>
      </motion.div>
    </div>
  );
};
