import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { Handshake, TrendingUp, GraduationCap, Wrench } from "lucide-react";
import emailjs from "@emailjs/browser";

const perks = [
  { icon: Handshake, title: "Exclusive Territory", desc: "Secure exclusive distribution rights in your region." },
  { icon: TrendingUp, title: "Competitive Margins", desc: "Attractive profit margins with volume-based incentives." },
  { icon: GraduationCap, title: "Full Training", desc: "Comprehensive product and technical training programs." },
  { icon: Wrench, title: "Technical Support", desc: "Dedicated engineering and after-sales support." },
];

// ← Replace with YOUR actual EmailJS credentials (same service can be reused)
const SERVICE_ID    = "service_7c2rtf1";     // ← your service ID
const TEMPLATE_ID   = "template_b1hzdyu";    // ← NEW or existing template for representation applications
const PUBLIC_KEY    = "2XtcUHMCwFPdBEW8k";

const Representation = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    background: "",
    reason: "",
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
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        city: formData.city,
        background: formData.background,
        reason: formData.reason,
        reply_to: formData.email,           // ← allows you to reply directly to applicant
        // Optional: from_name: formData.contactPerson || formData.companyName,
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setStatus("success");
      setMessage("Application submitted successfully! We'll review it within 5 business days.");
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        background: "",
        reason: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setMessage("Failed to submit application. Please try again or contact us directly.");
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
            Apply for Representation
          </motion.h1>
          <p className="text-primary-foreground/70 max-w-xl">
            Become a Unityware Solutions representative and bring cutting-edge foot health technology to your region.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-card rounded-xl shadow-card"
              >
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <SectionHeading 
            title="Application Form" 
            subtitle="Tell us about your company and experience. We review applications within 5 business days." 
          />

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-card p-8 rounded-xl shadow-card space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
              <Input
                name="contactPerson"
                placeholder="Contact Person"
                value={formData.contactPerson}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                required
              />
              <Input
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <Textarea
              name="background"
              placeholder="Company Background & Experience"
              rows={4}
              value={formData.background}
              onChange={handleChange}
              required
            />

            <Textarea
              name="reason"
              placeholder="Why do you want to represent Unityware Solutions?"
              rows={3}
              value={formData.reason}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              size="lg"
              disabled={status === "sending"}
              className="w-full gradient-primary text-primary-foreground font-semibold"
            >
              {status === "sending" ? "Submitting..." : "Submit Application"}
            </Button>

            {message && (
              <p
                className={`text-center text-sm mt-4 ${
                  status === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Representation;