import { Code, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Building robust RESTful APIs with Node.js, Express.js, and FastAPI. Experienced with MongoDB, PostgreSQL, MySQL, and Neo4j databases."
    },
    {
      icon: Palette,
      title: "Frontend Development",
      description: "Creating responsive and modern UIs using React.js, Next.js, Tailwind CSS, and Bootstrap with focus on user experience and accessibility."
    },
    {
      icon: Smartphone,
      title: "Full-Stack Solutions",
      description: "End-to-end web application development with MERN Stack, deployment on AWS & Azure, and ensuring 99% uptime in multi-environment infrastructure."
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
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What I do?</h2>
            <p className="text-muted-foreground mb-8">
              I specialize in full-stack web development, creating scalable applications with modern technologies. From frontend to backend, database design to deployment, I deliver complete solutions.
            </p>
            <Button className="rounded-full px-8">
              Say Hello!
            </Button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
