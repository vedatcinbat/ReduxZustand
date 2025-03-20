import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PulseLoader from "./components/PulseLoader";
import WaveLoader from "./components/WaveLoader";
import RotatingSquares from "./components/RotatingSquares";
import Spinner from "./components/Spinner";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-sky-100">
        <PulseLoader />
        <WaveLoader />
        <RotatingSquares />
        <Spinner />
      </div>
    )
    
  }

  return (
    <div className="flex justify-center items-center h-screen bg-sky-100">
      {/* <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-32 h-32 bg-green-500 rounded-xl"
      >
        <h1 className="text-3xl font-bold text-center">
          Hello, Framer Motion!
        </h1>
      </motion.div>

      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
            translateY: -100,
          }}
          style={{
            width: 150,
            height: 150,
            backgroundColor: "skyblue",
            borderRadius: 20,
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5 }}
        style={{
          width: 150,
          height: 150,
          backgroundColor: "lightgreen",
          borderRadius: 20,
        }}
      /> */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 500, top: -100, bottom: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: 150,
          height: 150,
          backgroundColor: "coral",
          borderRadius: 20,
          cursor: "grab",
        }}
      />
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        style={{ listStyle: "none", padding: 0, textAlign: "center" }}
      >
        {[1, 2, 3, 4].map((number) => (
          <motion.li
            key={number}
            variants={item}
            drag
            dragConstraints={{ left: -100, right: 500, top: -100, bottom: 200 }}
            style={{
              margin: 20,
              width: 100,
              height: 100,
              backgroundColor: "tomato",
              borderRadius: 15,
              display: "inline-block",
            }}
          />
        ))}
      </motion.ul>
    </div>
  );
}

export default App;
