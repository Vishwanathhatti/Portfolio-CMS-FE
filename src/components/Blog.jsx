import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blog1 from "@/assets/blog-3.jpg";
import blog2 from "@/assets/blog-3.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-3.jpg";

const Blog = () => {
  const posts = [
    { id: 1, title: "How to make web templates", date: "20 JANUARY 2024", image: blog1 },
    { id: 2, title: "How to make web templates", date: "20 JANUARY 2024", image: blog2 },
    { id: 3, title: "How to make web templates", date: "20 JANUARY 2024", image: blog3 },
    { id: 4, title: "How to make web templates", date: "20 JANUARY 2024", image: blog4 }
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my latest blog posts about design, development and creativity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Link 
                to={`/blog/${post.id}`}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer block"
              >
                <div className="aspect-square overflow-hidden">
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
                  <h3 className="text-lg font-bold">{post.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/blogs">
            <Button size="lg" className="rounded-full px-8">
              View All Blogs
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
