import { motion } from "framer-motion";

const Demo = () => {
  return (
    <div style={{ background: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        className="box"
        style={{ width: '100px', height: '100px', background: 'blue' }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 5
        }}
      />
    </div>
  );
}

export default Demo;
