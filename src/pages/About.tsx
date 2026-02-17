import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutTeam from "@/assets/about-team.jpg";
import { Play } from "lucide-react";
import TeamCarousel from "@/components/TeamCarousel";

/**
 * Replace `photo` paths with your real images (imports or URLs).
 * Example:
 *   import aref from "@/assets/team/aref.jpg";
 *   photo: aref
 */
const teamMembers = [
  { name: "Aref Yoones", role: "Graphic Designer", photo: "/Younes.jpg" },
  { name: "Allahabadi Faezeh", role: "Research Analyst", photo: "/Faezeh.jpg" },
  { name: "Alinia Meysam", role: "Industrial Designer", photo: "/Meysam.jpg" },
  { name: "Akbari Atena", role: "Accounting Manager", photo: "/Akbari.jpg" },
  { name: "Haji Abadi Hanieh", role: "Designer", photo: "/hanie.png" },
    { name: "Izadi Mohammad", role: "Prototype Fabricator ", photo: "/Ezadi.jpg" },
  { name: "Taftian pooria", role: "Back End Developer", photo: "/Taftian.jpg" },
  { name: "Mizban Erfan", role: "Full Stack Developer", photo: "/Erfan.jpg" },
  { name: "Haji Abadi Hanieh", role: "Designer", photo: "/hanie.png" },
];

const capabilities = [
  "CNC MILLING & MACHINING",
  "PLASTIC & SILICONE MOLDING",
  "3D PRINTING (FDM, SLA, SLS)",
  "LASER CUTTING & ENGRAVING",
  "3D SCANNING & REVERSE ENGINEERING",
  "PCB FABRICATION AND ASSEMBLY",
];

const stats = [
  { value: "500+", label: "Clinics Worldwide" },
  { value: "40+", label: "Countries" },
  { value: "15+", label: "Years Experience" },
  { value: "50K+", label: "Patients Helped" },
];



function IndustrialCapabilities() {
  return (
    <section className="mt-[-1.5%] mb-[10%] bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            INDUSTRIAL CAPABILITIES
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-primary" />
          <p className="mt-8 text-lg text-foreground/80 leading-relaxed">
            Unityware Solutions is equipped to support a wide range of industrial processes to accelerate
            product development:
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {capabilities.map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center shrink-0">
                <Play className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <p className="tracking-wide font-semibold text-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const About = () => (
  <div>
    {/* Hero */}
    <section className="gradient-hero py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
        >
          About Unityware Solutions
        </motion.h1>
        <p className="text-primary-foreground/70 max-w-xl">
          Pioneering foot health technology since 2010. Our mission is to empower healthcare professionals
          with the most advanced tools.
        </p>
      </div>
    </section>

    {/* Our Story (kept) */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
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
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">WHO WE ARE</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
   Unityware Solutions is a multidisciplinary product development company, dedicated to transforming ideas into innovative, market-ready solutions. From concept to manufacturing, we offer a complete, flexible pathway for bringing physical products to life.
            </p>
     
          </motion.div>
        </div>

        {/* Stats (kept) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6 bg-card rounded-xl shadow-card border border-border"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">{s.value}</div>
              <p className="text-muted-foreground text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Team slider (new, replaces Values) */}
        <section className="py-4">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center"
          >
            OUR TEAM
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center text-foreground/70 max-w-4xl mx-auto leading-relaxed"
          >
            Our team is made up of engineers, designers, and technical specialists with backgrounds in mechanical
            design, embedded systems, software development, and manufacturing. With decades of combined experience,
            we pride ourselves on solving hard problems quickly and delivering production-ready results.
          </motion.p>

  <div className="mt-20">
  <TeamCarousel items={teamMembers} autoplay />
</div>
        </section>
      </div>
    </section>

        <section className="py-0 pb-14 bg-background">
      <div className="container ">
        <div className="flex flex-col lg:flex-row gap-2 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2  flex items-end justify-start"
          >
            <img src='/SRahmanpour.jpg' alt="UnityWare Team" className="rounded-xl shadow-elevated size-[70%]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 "
          >

            <p className="text-muted-foreground text-4xl leading-relaxed mb-4">
Bringing ideas to life shouldn’t feel like a struggle. We make the R&D journey smooth, quick, and genuinely exciting — like having a co-founder who’s already done this a hundred times


            </p>

                        <h2 className="text-xl font-heading font-bold text-foreground ">Sajad Rahmanpour
</h2>
                        <h2 className="text-base font-heading font-bold text-foreground mb-6">Founder
</h2>


     
          </motion.div>
        </div>


  
      </div>
    </section>

    {/* Industrial Capabilities (new) */}
    <IndustrialCapabilities />
  </div>
);

export default About;
