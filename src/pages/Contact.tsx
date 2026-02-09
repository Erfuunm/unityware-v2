import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Address", detail: "123 Medical Innovation Blvd, San Francisco, CA 94102" },
  { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567" },
  { icon: Mail, title: "Email", detail: "info@UnityWare.com" },
  { icon: Clock, title: "Working Hours", detail: "Mon–Fri: 8:00 AM – 6:00 PM" },
];

const Contact = () => (
  <div>
    <section className="gradient-hero py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
        >
          Contact Us
        </motion.h1>
        <p className="text-primary-foreground/70 max-w-xl">
          Have questions about our products or services? We'd love to hear from you.
        </p>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Get In Touch</h2>
            <div className="space-y-8">
              {contactInfo.map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{c.title}</h3>
                    <p className="text-muted-foreground text-sm">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-xl shadow-card space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="First Name" defaultValue="Jane" />
              <Input placeholder="Last Name" defaultValue="Smith" />
            </div>
            <Input type="email" placeholder="Email Address" defaultValue="jane.smith@example.com" />
            <Input placeholder="Subject" defaultValue="Product inquiry - 3D Foot Scanner" />
            <Textarea placeholder="Your Message" rows={5} defaultValue="Hello, I'd like to learn more about the 3D Foot Scanner and pricing options for a small clinic with 3 practitioners. Could you also provide information about training and installation services?" />
            <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground font-semibold">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
