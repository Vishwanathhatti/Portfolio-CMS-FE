import { Button } from "@/components/ui/button";
import { ArrowUpRight, GithubIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ScrollProgress from "@/components/ScrollProgress";

const ProjectsPage = () => {
  const { data: projectsData, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await api.getProjects();
      return response.data.data;
    },
  });

  const defaultProjects = [];

  const projects = projectsData && projectsData.length > 0 ? projectsData : defaultProjects;

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
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <ScrollProgress />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <BackButton />
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through my complete portfolio of design and development projects.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.imageUrl ? `${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${project.imageUrl}` : "/assets/portfolio-2.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.description?.length > 100 ? project.description.substring(0, 100) + '...' : project.description}</p>
                  <p className="text-sm text-muted-foreground mb-2"><span className="text-primary font-semibold">Technologies:</span> {project.technologies?.join(', ')}</p>
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
                          <GithubIcon /> GitHub <ArrowUpRight className="ml-2 w-4 h-4" />
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
