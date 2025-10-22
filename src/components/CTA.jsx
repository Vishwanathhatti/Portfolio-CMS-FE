import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="navy-bg rounded-3xl p-12 md:p-20 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Do you have Project Idea?<br />
            Let's discuss your project!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
          >
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="rounded-full px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Let's Work Together
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
