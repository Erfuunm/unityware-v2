import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { Building2, Users, BadgeCheck, Headphones } from "lucide-react";
import emailjs from "@emailjs/browser";

const benefits = [
  { icon: Building2, title: "Volume Discounts", desc: "Special pricing for bulk orders and multi-device purchases." },
  { icon: Users, title: "Dedicated Account Manager", desc: "A personal point of contact for all your procurement needs." },
  { icon: BadgeCheck, title: "Extended Warranty", desc: "Up to 5 years warranty coverage on all organizational purchases." },
  { icon: Headphones, title: "Priority Support", desc: "24/7 technical support with guaranteed response times." },
];

// ← Use the SAME credentials as your other forms (or create a dedicated template)
const SERVICE_ID    = "service_xxxxxxxx";     // your service ID
const TEMPLATE_ID   = "template_zzzzzzzz";    // ← preferably a new template for organizational requests
const PUBLIC_KEY    = "user_xxxxxxxxxxxxxxxxxxxxxx";

const OrganizationalPurchase = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    products: "",
    notes: "",
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
        organizationName: formData.organizationName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        products: formData.products,
        notes: formData.notes,
        reply_to: formData.email,                // ← important: allows direct reply
        // Optional extras you can add:
        // from_name: formData.contactPerson || formData.organizationName,
        // submitted_at: new Date().toLocaleString(),
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setStatus("success");
      setMessage("Request submitted successfully! Our team will respond within 24 hours.");
      
      // Reset form
      setFormData({
        organizationName: "",
        contactPerson: "",
        email: "",
        phone: "",
        products: "",
        notes: "",
      });
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
      setMessage("Failed to send request. Please try again or contact us directly.");
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
            Organizational Purchase
          </motion.h1>
          <p className="text-primary-foreground/70 max-w-xl">
            Equip your healthcare facility with the latest foot health technology. Enjoy volume discounts, extended warranties, and priority support.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <SectionHeading 
            title="Request a Quote" 
            subtitle="Fill in your details and our team will get back to you within 24 hours." 
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
                name="organizationName"
                placeholder="Organization Name"
                value={formData.organizationName}
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
            </div>

            <Textarea
              name="products"
              placeholder="Products of Interest & Quantity"
              rows={4}
              value={formData.products}
              onChange={handleChange}
              required
            />

            <Textarea
              name="notes"
              placeholder="Additional Notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
            />

            <Button
              type="submit"
              size="lg"
              disabled={status === "sending"}
              className="w-full gradient-primary text-primary-foreground font-semibold"
            >
              {status === "sending" ? "Submitting..." : "Submit Request"}
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

export default OrganizationalPurchase;