import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const { data: info, isLoading } = useQuery({
    queryKey: ['info'],
    queryFn: async () => {
      const response = await api.getInfo();
      return response.data.data;
    },
  });

  const { data: projects } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await api.getProjects();
      return response.data.data;
    },
  });

  const { data: experiences } = useQuery({
    queryKey: ['experiences'],
    queryFn: async () => {
      const response = await api.getExperiences();
      return response.data.data;
    },
  });

  const { data: testimonials } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const response = await api.getTestimonials();
      return response.data.data;
    },
  });

  // Calculate years of experience
  const calculateYearsOfExperience = () => {
    if (!experiences || experiences.length === 0) return { value: 0, unit: 'Y' };

    const earliestDate = experiences.reduce((earliest, exp) => {
      const startDate = new Date(exp.startDate);
      return startDate < earliest ? startDate : earliest;
    }, new Date());

    const totalMonths = ((new Date() - earliestDate) / (1000 * 60 * 60 * 24 * 30.44));
    const years = Math.floor(totalMonths / 12);
    const months = Math.floor(totalMonths);

    if (years >= 1) {
      return { value: years, unit: 'Yrs' };
    } else {
      return { value: months, unit: 'M' };
    }
  };

  const experienceData = calculateYearsOfExperience();

  const stats = [
    {
      value: `${experienceData.value} ${experienceData.unit}+`,
      label: "Experience"
    },
    {
      value: `${projects?.length || 0}+`,
      label: "Projects Completed"
    },
    {
      value: `${testimonials?.length || 0}+`,
      label: "Happy Clients"
    }
  ];

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
              <span className="text-primary">{info?.name}</span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg"
              variants={fadeInUp}
            >
              {info?.headerContent}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="rounded-full px-8">
                Say Hello!
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 "
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card p-6 rounded-2xl shadow-sm text-center"
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
              src={info?.headerImgUrl ? `${import.meta.env.VITE_API_BASE_URL}/${info.headerImgUrl}` : heroImage}
              alt={`${info?.name} - Full Stack Developer`}
              className="w-full max-w-md rounded-3xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
