import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import LogoLoop from "./LogoLoop";

const Skills = () => {
  const { data: skills, isLoading } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const response = await api.getSkills();
      return response.data.data;
    },
  });

  const skillLogos = skills && skills.length > 0 ? skills.map(skill => ({
    src: `${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${skill.imgUrl}`,
    alt: skill.name,
    title: skill.name
  })) : [];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across the full development stack
          </p>
        </motion.div>

        {skillLogos.length > 0 && (
          <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={skillLogos}
              speed={90}
              direction="left"
              logoHeight={60}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ECE7F6"
              ariaLabel="Technology skills"
            />
          </div>
        )}

        {skillLogos.length > 0 && (
          <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={skillLogos}
              speed={90}
              direction="right"
              logoHeight={60}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ECE7F6"
              ariaLabel="Technology skills"
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
