import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { Handshake, TrendingUp, GraduationCap, Wrench } from "lucide-react";

const perks = [
  { icon: Handshake, title: "Exclusive Territory", desc: "Secure exclusive distribution rights in your region." },
  { icon: TrendingUp, title: "Competitive Margins", desc: "Attractive profit margins with volume-based incentives." },
  { icon: GraduationCap, title: "Full Training", desc: "Comprehensive product and technical training programs." },
  { icon: Wrench, title: "Technical Support", desc: "Dedicated engineering and after-sales support." },
];

const Representation = () => (
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
          Become a UnityWare representative and bring cutting-edge foot health technology to your region.
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

        <SectionHeading title="Application Form" subtitle="Tell us about your company and experience. We review applications within 5 business days." />

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card p-8 rounded-xl shadow-card space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Company Name" defaultValue="MedTech Distribution Co." />
            <Input placeholder="Contact Person" defaultValue="Ali Rezaei" />
            <Input type="email" placeholder="Email" defaultValue="ali@medtechdist.com" />
            <Input type="tel" placeholder="Phone" defaultValue="+98 912 345 6789" />
            <Input placeholder="Country" defaultValue="Iran" />
            <Input placeholder="City" defaultValue="Tehran" />
          </div>
          <Textarea placeholder="Company Background & Experience" rows={4} defaultValue="We have been distributing medical equipment in Iran for 8 years, with a network of 120+ clinics and hospitals. Our focus is on podiatric and orthopedic devices." />
          <Textarea placeholder="Why do you want to represent UnityWare?" rows={3} defaultValue="UnityWare's product line aligns perfectly with our existing client base. We see strong demand for 3D foot scanning and custom insole solutions in our market." />
          <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground font-semibold">
            Submit Application
          </Button>
        </motion.form>
      </div>
    </section>
  </div>
);

export default Representation;
