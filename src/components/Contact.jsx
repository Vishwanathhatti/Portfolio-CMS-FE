import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, title: "Address", content: "Pune, Maharashtra, India" },
    { icon: Phone, title: "Phone", content: "+91-8552866007" },
    { icon: Mail, title: "Email", content: "vhatti14@gmail.com" }
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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's discuss your Project</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-2xl shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Name" className="rounded-xl" />
                <Input type="email" placeholder="Email" className="rounded-xl" />
              </div>
              <Input placeholder="Subject" className="rounded-xl" />
              <Textarea placeholder="Message" rows={6} className="rounded-xl" />
              <Button className="w-full rounded-full">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
