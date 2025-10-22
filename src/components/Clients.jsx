import { motion } from "framer-motion";

const Clients = () => {
  const clients = ["Google", "Amazon", "LinkedIn", "Amazon", "Medium", "Spotify"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Happy Clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've had the privilege of working with amazing companies around the world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, opacity: 1, transition: { duration: 0.2 } }}
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
            >
              <span className="text-2xl font-bold text-muted-foreground">{client}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
