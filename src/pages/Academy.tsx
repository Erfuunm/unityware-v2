import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Calendar, User, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "The Future of Custom Orthotics: 3D Printing Revolution",
    excerpt: "How 3D printing technology is transforming the orthotic industry, enabling faster production times and superior patient outcomes with personalized insole manufacturing.",
    author: "Dr. Sarah Chen",
    date: "Jan 15, 2026",
    category: "Technology",
  },
  {
    title: "Understanding Plantar Pressure Distribution in Diabetic Patients",
    excerpt: "A comprehensive review of plantar pressure patterns in diabetic neuropathy and the role of pressure mapping in preventive foot care and ulcer prevention.",
    author: "Prof. Michael Torres",
    date: "Dec 28, 2025",
    category: "Clinical Research",
  },
  {
    title: "3D Foot Scanning: Accuracy Comparison of Modern Systems",
    excerpt: "Comparative study of leading 3D foot scanning technologies, evaluating accuracy, repeatability, and clinical applicability across different patient populations.",
    author: "Dr. Emily Park",
    date: "Nov 10, 2025",
    category: "Research",
  },
  {
    title: "Gait Analysis and Its Impact on Rehabilitation Outcomes",
    excerpt: "Exploring how instrumented gait analysis using pressure platforms and motion capture can improve rehabilitation protocols for lower limb injuries.",
    author: "Dr. James Rodriguez",
    date: "Oct 22, 2025",
    category: "Rehabilitation",
  },
  {
    title: "Posture Assessment: From Manual to Digital Methods",
    excerpt: "The evolution of posture analysis from traditional visual assessment to AI-powered digital systems and their impact on diagnostic accuracy.",
    author: "Dr. Anna Schmidt",
    date: "Sep 5, 2025",
    category: "Technology",
  },
  {
    title: "Material Science in 3D Printed Insoles: A Review",
    excerpt: "Examining the latest materials used in 3D printed orthopedic insoles, including TPU variants, lattice structures, and multi-material approaches.",
    author: "Prof. David Kim",
    date: "Aug 18, 2025",
    category: "Materials",
  },
];

const Academy = () => (
  <div>
    <section className="gradient-hero py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
        >
          Academy
        </motion.h1>
        <p className="text-primary-foreground/70 max-w-xl">
          Stay informed with the latest research, clinical insights, and technological advancements in foot health and biomechanics.
        </p>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow group"
            >
              <div className="h-2 gradient-primary" />
              <div className="p-6">
                <span className="text-secondary text-xs font-semibold uppercase tracking-wider">{a.category}</span>
                <h3 className="font-heading font-semibold text-lg text-foreground mt-2 mb-3 line-clamp-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" />{a.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{a.date}</span>
                </div>
                <button className="mt-4 text-secondary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Academy;
