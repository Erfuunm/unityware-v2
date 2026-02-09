import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import aboutTeam from "@/assets/about-team.jpg";
import { Target, Eye, Lightbulb, Globe } from "lucide-react";

const values = [
  { icon: Target, title: "Precision", desc: "We engineer our devices to the highest accuracy standards in the industry." },
  { icon: Eye, title: "Innovation", desc: "Continuously pushing boundaries in foot health technology research and development." },
  { icon: Lightbulb, title: "Accessibility", desc: "Making advanced foot health solutions available to clinics worldwide." },
  { icon: Globe, title: "Global Reach", desc: "Serving healthcare professionals in over 40 countries across 5 continents." },
];

const stats = [
  { value: "500+", label: "Clinics Worldwide" },
  { value: "40+", label: "Countries" },
  { value: "15+", label: "Years Experience" },
  { value: "50K+", label: "Patients Helped" },
];

const About = () => (
  <div>
    <section className="gradient-hero py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
        >
          About UnityWare
        </motion.h1>
        <p className="text-primary-foreground/70 max-w-xl">
          Pioneering foot health technology since 2010. Our mission is to empower healthcare professionals with the most advanced tools.
        </p>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img src={aboutTeam} alt="UnityWare Team" className="rounded-xl shadow-elevated w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2010, UnityWare began with a simple vision: to make advanced foot health diagnostics
              accessible to every clinic. Starting from a small lab, our team of engineers and medical professionals
              developed the first generation of affordable 3D foot scanners.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we are a global leader in podiatric technology, with a comprehensive product portfolio that
              includes 3D scanners, insole printers, pressure platforms, and AI-powered analysis systems.
              Our devices are trusted by over 500 clinics in more than 40 countries.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-card rounded-xl shadow-card"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">{s.value}</div>
              <p className="text-muted-foreground text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <SectionHeading title="Our Values" subtitle="The principles that guide everything we do." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-card text-center"
            >
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
