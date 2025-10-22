import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shakham Inc Team",
      role: "Project Lead, Shakham Inc",
      content: "Vishwanath has been an excellent addition to our team. His ability to develop full-stack solutions with FastAPI and PostgreSQL, along with his dedication to ensuring 99% uptime, has been invaluable to our projects.",
      rating: 5
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonial</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't take my word for it. Here's what my clients have to say.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 md:p-12 rounded-3xl shadow-lg"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star className="w-6 h-6 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <p className="text-lg mb-8 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
