import { useState } from "react";
import { Menu } from "./MenuIcon";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { PointOfInterest } from "./PointOfInterest";

export const LeftBar = ({ setLngLat }) => {
  const [open, setOpen] = useState(true);
  const places = useSelector((state) => state.places);
  const darkmode = useSelector((state) => state.darkmode);
  const variants = {
    close: { x: -200 },
    open: { x: 0 },
    unShowOption: { opacity: 0 },
    showOption: { opacity: 1 },
  };

  return (
    <div>
      <motion.div
        id="left-bar"
        initial={false}
        variants={variants}
        animate={open ? "open" : "close"}
        className="absolute border-[#19817c] border-b border-r text-xs text-left text-[#19817c] bg-white dark:bg-slate-800 dark:text-white w-60 h-auto left-0 top-16 rounded-lg shadow-sm shadow-gray-700 flex-row justify-center p-4"
      >
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
          {places.map((place) => {
            console.log(place.lng, place.lat);
            return (
              <PointOfInterest
                key={place.name}
                place={place}
                setLngLat={setLngLat}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};
