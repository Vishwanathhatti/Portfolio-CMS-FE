import { useParams } from "react-router-dom";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ScrollProgress from "@/components/ScrollProgress";
import blog1 from "@/assets/blog-3.jpg";
import blog2 from "@/assets/blog-3.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-3.jpg";

const BlogDetailPage = () => {
  const { id } = useParams();

  const blogPosts = {
    "1": { 
      title: "How to make web templates", 
      date: "20 JANUARY 2024", 
      image: blog1,
      content: `
        <h2>Introduction</h2>
        <p>Creating web templates is an essential skill for modern web developers and designers. In this comprehensive guide, we'll explore the fundamental principles and best practices for building beautiful, functional web templates.</p>
        
        <h2>Understanding the Basics</h2>
        <p>A web template serves as the foundation for your website's design. It includes the layout structure, color schemes, typography, and reusable components that ensure consistency across your site.</p>
        
        <h2>Key Components</h2>
        <p>Every great web template includes several key components: a responsive grid system, navigation menu, header and footer sections, and content areas that adapt to different screen sizes.</p>
        
        <h2>Design Principles</h2>
        <p>When creating templates, focus on user experience, accessibility, and maintainability. Use semantic HTML, follow design systems, and ensure your templates are mobile-first.</p>
      `
    },
    "2": { 
      title: "Design trends for 2024", 
      date: "18 JANUARY 2024", 
      image: blog2,
      content: `
        <h2>The Future of Design</h2>
        <p>As we move through 2024, several exciting design trends are shaping the digital landscape. Let's explore what's driving modern web design.</p>
        
        <h2>Minimalism Meets Maximalism</h2>
        <p>The blend of clean, minimal interfaces with bold, expressive elements creates unique user experiences that stand out.</p>
      `
    },
    "3": { 
      title: "Getting started with React", 
      date: "15 JANUARY 2024", 
      image: blog3,
      content: `
        <h2>Welcome to React</h2>
        <p>React has revolutionized how we build user interfaces. This guide will help you get started with this powerful library.</p>
        
        <h2>Core Concepts</h2>
        <p>Learn about components, props, state, and hooks - the building blocks of React applications.</p>
      `
    },
    "4": { 
      title: "UI/UX best practices", 
      date: "12 JANUARY 2024", 
      image: blog4,
      content: `
        <h2>Crafting Great User Experiences</h2>
        <p>Good UI/UX design is the difference between a successful product and one that users abandon.</p>
        
        <h2>User-Centered Design</h2>
        <p>Always put your users first. Understand their needs, behaviors, and pain points.</p>
      `
    }
  };

  const post = blogPosts[id] || blogPosts["1"];

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
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video rounded-2xl overflow-hidden mb-12"
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
