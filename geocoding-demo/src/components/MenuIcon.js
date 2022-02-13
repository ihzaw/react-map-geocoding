import { motion } from "framer-motion";

export const Menu = () => {
  return (
    <motion.svg
    whileHover={{ scale: 1.1 }}
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </motion.svg>
  );
};
