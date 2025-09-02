import { motion } from "framer-motion";

const MorphButton = ({ children }) => (
  <motion.button
    whileHover={{
      scale: 1.05,
      borderRadius: "50px",
      backgroundColor: "#9333ea", // Tailwind purple-600
      color: "#fff",
      boxShadow: "0px 0px 12px rgba(147, 51, 234, 0.6)",
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="px-6 py-2 border-2 border-purple-500 text-purple-700 font-semibold bg-white rounded-md transition-all duration-300"
  >
    {children}
  </motion.button>
);

export default MorphButton;