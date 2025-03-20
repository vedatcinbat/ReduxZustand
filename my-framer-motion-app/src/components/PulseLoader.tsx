import { motion } from "framer-motion";

export default function PulseLoader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 10,
        marginTop: 100,
      }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            delay: i * 0.2,
          }}
          style={{
            width: 15,
            height: 15,
            backgroundColor: "#7b2cb8",
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
}
