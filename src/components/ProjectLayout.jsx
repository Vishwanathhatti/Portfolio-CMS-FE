import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { api, API_BASE_URL } from "@/lib/api";

const ProjectLayout = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.getProjects();
        if (response.data.success) {
          const projectData = response.data.data.slice(0, 3).map(project => ({
            id: project._id,
            title: project.title,
            category: project.category,
            image: `${project.imageUrl}`
          }));
          setProjects(projectData);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
          </div>
        ) : projects.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* Left column - 2 stacked projects */}
            <div className="grid grid-rows-2 gap-4 items-center">
              {projects.slice(0, 2).map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all aspect-video md:aspect-[21/9]"
                >
                  <img
                    src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${project.image}`}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs text-primary font-semibold mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                    <Button variant="outline" size="sm" className="rounded-full border-white text-black hover:bg-black hover:text-white hover:border-black hover:transition-all hover:duration-300">
                      Github <Github className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right column - 1 large project */}
            {projects.length >= 3 && (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all aspect-video md:aspect-[1/1]"
              >
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${projects[2].image}`}
                  alt={projects[2].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs text-primary font-semibold mb-2">{projects[2].category}</p>
                  <h3 className="text-xl font-bold mb-4">{projects[2].title}</h3>
                  <Button variant="outline" size="sm" className="rounded-full border-white text-black hover:bg-black hover:text-white hover:border-black hover:transition-all hover:duration-300">
                    Github <Github className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects available</p>
          </div>
        )}

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

export default ProjectLayout