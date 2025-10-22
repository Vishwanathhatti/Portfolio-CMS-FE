import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className=" h-1 bg-primary/20 z-40"
    >
      <motion.div
        className="h-full bg-primary"
        style={{
          scaleX,
          transformOrigin: "left", // ✅ make it grow from left to right
        }}
      />
    </motion.div>
  );
};

export default ScrollProgress;
