import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-2.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-2.jpg";
import portfolio4 from "@/assets/portfolio-2.jpg";
import portfolio5 from "@/assets/portfolio-2.jpg";
import portfolio6 from "@/assets/portfolio-2.jpg";

const Portfolio = () => {
  const projects = [
    { id: 1, title: "MyFlatBuddy", category: "MERN STACK", image: portfolio1 },
    { id: 2, title: "LegalWise", category: "MERN STACK", image: portfolio2 },
    { id: 3, title: "FastAPI Backend Services", category: "BACKEND", image: portfolio3 },
    { id: 4, title: "React Dashboard", category: "FRONTEND", image: portfolio4 },
    { id: 5, title: "E-Commerce Platform", category: "FULL-STACK", image: portfolio5 },
    { id: 6, title: "Next.js Application", category: "FULL-STACK", image: portfolio6 }
  ];

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is unique and showcases different skills and approaches.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <Button variant="outline" size="sm" className="rounded-full">
                  Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link to="/projects">
            <Button size="lg" className="rounded-full px-8">
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
