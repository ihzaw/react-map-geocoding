import { motion } from "framer-motion";

export const PointOfInterest = () => {
    
  return (
    <motion.div whileHover={{ borderColor: "#9ca3af" }} className="mt-6 border-b-2 cursor-pointer">
      <p>Jakarta, Indonesia</p>
    </motion.div>
  );
};
