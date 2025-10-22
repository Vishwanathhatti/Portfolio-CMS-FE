import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ScrollProgress from "@/components/ScrollProgress";
import blog1 from "@/assets/blog-3.jpg";
import blog2 from "@/assets/blog-3.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-3.jpg";

const BlogsPage = () => {
  const posts = [
    { id: 1, title: "How to make web templates", date: "20 JANUARY 2024", image: blog1, excerpt: "Learn the fundamentals of creating beautiful and functional web templates." },
    { id: 2, title: "Design trends for 2024", date: "18 JANUARY 2024", image: blog2, excerpt: "Explore the latest design trends shaping the digital landscape." },
    { id: 3, title: "Getting started with React", date: "15 JANUARY 2024", image: blog3, excerpt: "A comprehensive guide to building modern web applications with React." },
    { id: 4, title: "UI/UX best practices", date: "12 JANUARY 2024", image: blog4, excerpt: "Essential principles for creating intuitive user experiences." },
    { id: 5, title: "Building responsive layouts", date: "10 JANUARY 2024", image: blog1, excerpt: "Master the art of creating layouts that work on any device." },
    { id: 6, title: "Typography in web design", date: "8 JANUARY 2024", image: blog2, excerpt: "How to choose and use fonts effectively in your designs." },
    { id: 7, title: "Color theory basics", date: "5 JANUARY 2024", image: blog3, excerpt: "Understanding color psychology and application in design." },
    { id: 8, title: "Animation techniques", date: "2 JANUARY 2024", image: blog4, excerpt: "Bring your designs to life with smooth, purposeful animations." }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Blog Posts</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore articles about design, development, and creativity.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to={`/blog/${post.id}`}
                  className="block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
