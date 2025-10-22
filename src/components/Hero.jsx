import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Hello, I'm<br />
              <span className="text-primary">Vishwanath Hatti</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-lg"
              variants={fadeInUp}
            >
              Full-Stack Developer with hands-on experience building scalable web applications using MERN Stack, FastAPI, and PostgreSQL. Passionate about delivering efficient, user-focused solutions and contributing to impactful projects.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="rounded-full px-8">
                Say Hello!
              </Button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { value: "1Y+", label: "Experience" },
                { value: "10+", label: "Projects Completed" },
                { value: "5+", label: "Happy Clients" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-card p-6 rounded-2xl shadow-sm"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-3xl font-bold text-primary mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={heroImage} 
              alt="Vishwanath Hatti - Full Stack Developer" 
              className="w-full max-w-md rounded-3xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
