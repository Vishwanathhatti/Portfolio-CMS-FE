import { Lightbulb, Code, Palette, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const WorkProcess = () => {
  const processes = [
    {
      icon: Lightbulb,
      title: "1. Research",
      description: "We shape brands through exploration, applying in-depth research to challenge assumptions."
    },
    {
      icon: Code,
      title: "2. Design",
      description: "Our design approach is to simplify. We embrace the joy of creating something unique."
    },
    {
      icon: Palette,
      title: "3. Build",
      description: "Using modern technologies, we build with efficiency and attention to detail."
    },
    {
      icon: Rocket,
      title: "4. Launch",
      description: "We take care of all the details to ensure a successful launch and long-term success."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our process is simple, efficient and proven. We follow a systematic approach to ensure quality results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;
