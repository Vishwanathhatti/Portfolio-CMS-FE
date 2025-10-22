import { Code2, Database, Cloud, Layout, Server, Palette } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "RESTful APIs"]
    },
    {
      icon: Layout,
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Neo4j"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "CI/CD"]
    },
    {
      icon: Code2,
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
      icon: Palette,
      title: "Tools",
      skills: ["Git", "VS Code", "Postman", "Figma"]
    }
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-accent/50 text-sm rounded-full text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
