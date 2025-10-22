import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

const Experience = () => {
  const { data: experiences, isLoading } = useQuery({
    queryKey: ['experiences'],
    queryFn: async () => {
      const response = await api.getExperiences();
      return response.data.data;
    },
  });

  const defaultExperiences = [];

  const displayExperiences = experiences && experiences.length > 0 ? experiences.map(exp => ({
    _id: exp._id,
    title: exp.role,
    company: exp.companyName,
    location: "Pune, India", // Default location since not in model
    period: exp.endDate
      ? `${new Date(exp.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} – ${new Date(exp.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`
      : `${new Date(exp.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} – Present`,
    type: "work", // Default to work since not in model
    achievements: exp.desc || []
  })) : defaultExperiences;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

          {displayExperiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const Icon = exp.type === 'work' ? Briefcase : GraduationCap;

            return (
              <motion.div
                key={exp._id || index}
                variants={isLeft ? leftItemVariants : rightItemVariants}
                className={`relative mb-12 md:mb-16 flex ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-card p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-border"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-full ${
                        exp.type === 'work' ? 'bg-primary/10' : 'bg-secondary/10'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          exp.type === 'work' ? 'text-primary' : 'text-secondary'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-primary mb-1">
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{exp.location}</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements && exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-primary mt-1.5 font-bold">•</span>
                          <span className="text-muted-foreground text-sm">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  variants={dotVariants}
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-10"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
