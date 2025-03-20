import { motion } from "framer-motion";

export default function RotatingSquares() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 100 }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        style={{
          width: 40,
          height: 40,
          border: "4px solid #f59e0b",
          borderRadius: "8px",
          margin: 10,
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        style={{
          width: 40,
          height: 40,
          border: "4px solid #f43f5e",
          borderRadius: "8px",
          margin: 10,
        }}
      />
    </div>
  );
}
