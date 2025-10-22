import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary/20"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-sm"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
