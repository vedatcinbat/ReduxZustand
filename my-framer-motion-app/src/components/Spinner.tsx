import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      style={{
        width: 50,
        height: 50,
        border: "5px solid #e0e0e0",
        borderTop: "5px solid #3498db",
        borderRadius: "50%",
        margin: "100px auto",
      }}
    />
  );
}
