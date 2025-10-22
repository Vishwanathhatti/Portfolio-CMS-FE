import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const { data: info, isLoading } = useQuery({
    queryKey: ['info'],
    queryFn: async () => {
      const response = await api.getInfo();
      return response.data.data;
    },
  });

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
                src={info?.aboutImgUrl ? `${import.meta.env.VITE_API_BASE_URL}/${info.aboutImgUrl}` : aboutImage}
                alt={`${info?.name} - Full Stack Developer`}
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
                <span className="text-primary">{info?.role}</span>
              </h2>
              <div className="text-muted-foreground mb-6 space-y-2">
                {info?.about?.split('\\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
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
