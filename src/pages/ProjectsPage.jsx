import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ScrollProgress from "@/components/ScrollProgress";
import portfolio1 from "@/assets/portfolio-2.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-2.jpg";
import portfolio4 from "@/assets/portfolio-2.jpg";
import portfolio5 from "@/assets/portfolio-2.jpg";
import portfolio6 from "@/assets/portfolio-2.jpg";

const ProjectsPage = () => {
  const projects = [
    { id: 1, title: "Product Admin Dashboard", category: "UI-UX DESIGN", image: portfolio1, description: "A comprehensive dashboard for product management with advanced analytics." },
    { id: 2, title: "App Dashboard Design", category: "UI-UX DESIGN", image: portfolio2, description: "Modern and intuitive dashboard interface for mobile applications." },
    { id: 3, title: "Mobile App Landing Design", category: "UI-UX DESIGN", image: portfolio3, description: "Converting landing page design for mobile app promotion." },
    { id: 4, title: "Dashboard & Component", category: "UI-UX DESIGN", image: portfolio4, description: "Complete design system with reusable components." },
    { id: 5, title: "E-Commerce Platform", category: "UI-UX DESIGN", image: portfolio5, description: "Full-featured online shopping platform with seamless checkout." },
    { id: 6, title: "Creative Portfolio Design", category: "UI-UX DESIGN", image: portfolio6, description: "Stunning portfolio showcase for creative professionals." },
    { id: 7, title: "SaaS Application UI", category: "UI-UX DESIGN", image: portfolio1, description: "Enterprise-grade SaaS application interface design." },
    { id: 8, title: "Banking App Interface", category: "UI-UX DESIGN", image: portfolio2, description: "Secure and user-friendly banking application design." },
    { id: 9, title: "Social Media Platform", category: "UI-UX DESIGN", image: portfolio3, description: "Engaging social networking platform with modern features." }
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
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg"
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
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
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
