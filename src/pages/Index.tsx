import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Scan, Printer, Footprints, Activity, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import productScanner from "@/assets/product-scanner.jpg";
import productPrinter from "@/assets/product-printer.jpg";
import productPressure from "@/assets/product-pressure.jpg";

const features = [
  { icon: Scan, title: "3D Scanning", desc: "Precision 3D foot and body scanning with sub-millimeter accuracy." },
  { icon: Printer, title: "Custom Insoles", desc: "3D printed medical insoles tailored to individual foot anatomy." },
  { icon: Footprints, title: "Pressure Analysis", desc: "Dynamic and static plantar pressure mapping and gait analysis." },
  { icon: Activity, title: "Posture Analysis", desc: "Comprehensive skeletal alignment and posture assessment systems." },
  { icon: Shield, title: "Clinical Grade", desc: "CE-certified medical devices for professional healthcare use." },
  { icon: Award, title: "Global Support", desc: "Worldwide distribution network with local technical support." },
];

const highlightProducts = [
  { img: productScanner, title: "3D Foot Scanner", desc: "High-precision plantar and dorsal foot scanning technology." },
  { img: productPrinter, title: "Insole 3D Printer", desc: "Medical-grade 3D printing for custom orthopedic insoles." },
  { img: productPressure, title: "Pressure Platform", desc: "Dynamic foot pressure mapping for gait analysis." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Foot health technology" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-70" />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Advanced Foot Health Technology
            </h1>
            <p className="text-lg w-[87%] text-primary-foreground/80 mb-8 leading-relaxed">
              Pioneering the future of podiatric care with cutting-edge 3D scanning,
              custom insole manufacturing, and comprehensive biomechanical analysis solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                <Link to="/products">Explore Products <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/35">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container">
          <SectionHeading title="Why Choose Unityware Solutions?" subtitle="We provide end-to-end solutions for foot health professionals worldwide." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-24 bg-card">
        <div className="container">
          <SectionHeading title="Our Products" subtitle="Discover our range of advanced medical devices for foot health professionals." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightProducts.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-xl overflow-hidden bg-background shadow-card hover:shadow-elevated transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                  <Link to="/products" className="text-secondary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Join hundreds of clinics worldwide using UnityWare technology to deliver superior patient care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                <Link to="/organizational-purchase">Organizational Purchase</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/35">
                <Link to="/representation">Apply for Representation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
