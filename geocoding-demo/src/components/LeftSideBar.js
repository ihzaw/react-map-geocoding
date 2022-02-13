import { useState } from "react";
import { Menu } from "./MenuIcon";
import { motion } from "framer-motion";

export const LeftBar = () => {
  const [open, setOpen] = useState(true);
  const variants = {
    close: { x: -200 },
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
        className="absolute border-[#19817c] border-b border-r text-base text-[#19817c] w-60 h-full left-0 top-16 bg-white rounded-tr-lg shadow-sm shadow-gray-700 rounded-br-lg flex-row justify-center p-4"
      >
        {/* <div>{`${open}`}</div> */}
        <div
          className="absolute right-2 top-2 w-auto h-auto cursor-pointer"
          onClick={() => (open ? setOpen(false) : setOpen(true))}
        >
          <Menu />
        </div>
        <motion.div
          variants={variants}
          animate={open ? "showOption" : "unShowOption"}
          transition={{ delay: 0.2 }}
        >
          <div className="mt-6 border-b-2">
            <p>Jakarta, Indonesia</p>
          </div>
          <div className="my-2 border-b-2">
            <p>Jakarta, Indonesia</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
