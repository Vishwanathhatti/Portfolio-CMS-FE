import { useParams } from "react-router-dom";
import { Calendar, Eye, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import { api } from "@/lib/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ScrollProgress from "@/components/ScrollProgress";

const BlogDetailPage = () => {
  const { id } = useParams();

  const { data: blog, isLoading } = useQuery({
    queryKey: ['blog', id],
    queryFn: async () => {
      const response = await api.getBlog(id);
      return response.data.data;
    },
  });

  const defaultPost = {
    title: "Blog Post Not Found",
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).toUpperCase(),
    image: "/assets/blog-3.jpg",
    content: "<p>The requested blog post could not be found.</p>"
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading blog post...</p>
        </div>
      </div>
    );
  }

  const post = blog ? {
    title: blog.title,
    date: new Date(blog.createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).toUpperCase(),
    image: blog.imgUrl,
    content: blog.content,
    tags: blog.tags,
    views: blog.views || 0,
    readTime: Math.ceil(blog.content.split(' ').length / 200) // Assuming 200 words per minute
  } : defaultPost;

  return (
    <div className="min-h-screen">
      <Header />
      <ScrollProgress />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <BackButton />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video rounded-2xl overflow-hidden mb-12"
          >
            <img 
              src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${post.image}`} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
