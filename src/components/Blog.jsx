import { useState, useEffect } from "react";
import { Calendar, Eye, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { api, API_BASE_URL } from "@/lib/api";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.getBlogs();
        if (response.data.success) {
          const blogData = response.data.data.slice(0, 4).map(blog => ({
            id: blog._id,
            title: blog.title,
            date: new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }).toUpperCase(),
            image: blog.imgUrl,
            views: blog.views || 0,
            readTime: Math.ceil(blog.content.split(' ').length / 200) // Assuming 200 words per minute
          }));
          setBlogs(blogData);
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
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

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading blogs...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Link
                  to={`/blog/${blog.id}`}
                  className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer block"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${blog.image}`}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{blog.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{blog.readTime} min</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold">{blog.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

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
