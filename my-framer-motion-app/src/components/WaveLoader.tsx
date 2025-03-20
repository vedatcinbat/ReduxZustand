import { motion } from "framer-motion";

export default function WaveLoader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 100 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={{ y: ["0%", "-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            delay: i * 0.1,
          }}
          style={{
            width: 12,
            height: 12,
            backgroundColor: "#22c55e",
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
}
