import { motion } from "framer-motion";

export const PointOfInterest = ({ place, setLngLat }) => {
  return (
    <motion.div
    onClick={() => setLngLat([place.lng, place.lat])}
      whileHover={{ borderColor: "#9ca3af" }}
      className="mt-6 border-b-2 cursor-pointer"
    >
      <p>{place.name}</p>
    </motion.div>
  );
};
