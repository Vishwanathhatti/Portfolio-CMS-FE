import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import WorkProcess from "@/components/WorkProcess";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Blog from "@/components/Blog";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <SmoothCursor className="hidden md:block"/>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <WorkProcess />
      <Portfolio />
      <CTA />
      <Blog />
      <Services />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
