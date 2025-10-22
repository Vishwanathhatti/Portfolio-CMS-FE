import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl shadow-lg p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={aboutImage} 
                alt="Vishwanath Hatti - Full Stack Developer" 
                className="w-full max-w-sm rounded-2xl object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                I am a Professional<br />
                <span className="text-primary">Full-Stack Developer</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                I develop scalable web applications using MERN Stack, FastAPI, and PostgreSQL. Skilled in developing responsive UIs, designing RESTful APIs, and deploying applications on cloud platforms like AWS and Azure.
              </p>
              <p className="text-muted-foreground mb-8">
                Currently pursuing Master's in Computer Application and working as a Full Stack Development Intern at Shakham Inc, Pune. I have successfully contributed to real-world projects, demonstrating strong problem-solving skills and collaborative teamwork.
              </p>
              <Button className="rounded-full px-8">
                My Project
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
