import { useState, useMemo } from "react";
import { Calendar, Search, Eye, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ScrollProgress from "@/components/ScrollProgress";
import { Input } from "@/components/ui/input";

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: blogs, isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const response = await api.getBlogs();
      return response.data.data;
    },
  });

  const defaultPosts = [];

  const allPosts = blogs && blogs.length > 0 ? blogs.map(blog => ({
    id: blog._id,
    title: blog.title,
    date: new Date(blog.createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).toUpperCase(),
    image: `${import.meta.env.VITE_API_BASE_URL.replace('/api','')}${blog.imgUrl}`,
    excerpt: blog.content.substring(0, 100) + "...",
    tags: blog.tags || [],
    views: blog.views || 0,
    readTime: Math.ceil(blog.content.split(' ').length / 200) // Assuming 200 words per minute
  })) : defaultPosts;

  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return allPosts;

    return allPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [allPosts, searchTerm]);

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
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore articles about design, development, and creativity.
            </p>

            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search blogs by title, content, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-full border-2 focus:border-primary bg-[#ffffffcd] transition-colors"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.length === 0 && searchTerm.trim() ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">No blogs found matching "{searchTerm}"</p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              filteredPosts.map((post) => (
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
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} min</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
