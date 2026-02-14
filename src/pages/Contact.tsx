import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: MapPin, title: "Address", detail: " 51 Clarendon Rd, Watford WD17 1HP , UK" },
  { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567" },
  { icon: Mail, title: "Email", detail: "sajad.rahmanpour@unitywaresolutions.com" },
  { icon: Clock, title: "Working Hours", detail: "Mon–Fri: 8:00 AM – 6:00 PM" },
];

// ← Replace these with YOUR values from EmailJS dashboard
const SERVICE_ID    = "service_7c2rtf1";
const TEMPLATE_ID   = "template_c34simj";
const PUBLIC_KEY    = "2XtcUHMCwFPdBEW8k";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setStatus("success");
      setMessage("Thank you! Your message has been sent.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
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
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                Get In Touch
              </h2>
              <div className="space-y-8">
                {contactInfo.map((c) => (
                  <div key={c.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">
                        {c.title}
                      </h3>
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
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-xl shadow-card space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="w-full gradient-primary text-primary-foreground font-semibold"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>

              {message && (
                <p
                  className={`text-center text-sm ${
                    status === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;