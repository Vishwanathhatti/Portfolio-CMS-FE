import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, GithubIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import portfolio1 from "@/assets/portfolio-2.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-2.jpg";
import portfolio4 from "@/assets/portfolio-2.jpg";
import portfolio5 from "@/assets/portfolio-2.jpg";
import portfolio6 from "@/assets/portfolio-2.jpg";

const Portfolio = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await api.getProjects();
      return response.data.data;
    },
  });

  const defaultProjects = [];

  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects;

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
          {displayProjects.map((project) => (
            <motion.div
              key={project._id || project.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.imageUrl ? `${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${project.imageUrl}` : portfolio1}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                {/* <p className="text-xs text-primary font-semibold mb-2">{project.category || project.technologies?.join(', ')}</p> */}
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{project.description?.length > 100 ? project.description.substring(0, 100) + '...' : project.description}</p>
                <p className="text-sm text-muted-foreground mb-2 "><span className="text-primary font-semibold">Technologies:</span> {project.technologies?.join(', ')}</p>
                <h5 className="text-sm text-muted-foreground mb-2"><span className="text-primary font-semibold">Features:</span></h5>
                <ul className="text-sm text-muted-foreground mb-4 list-disc list-inside">
                  {project.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm" className="rounded-full">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                       <GithubIcon/> GitHub <ArrowUpRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.url && (
                    <Button asChild variant="outline" size="sm" className="rounded-full">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Visit <ArrowUpRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
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
