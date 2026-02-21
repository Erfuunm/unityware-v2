import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    slug: "advantages-of-body-scan-with-3d-technology",
    title: "The Advantages of Body Scan with 3D Technology",
    excerpt:
      "Discover how 3D body scanning provides precise measurements, supports performance tracking, helps injury prevention, and improves overall well-being through objective insights.",
    author: "PT 3Dfit Team",
    date: "Jan 15, 2026",
    category: "Articles",
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
          Stay informed with the latest insights and technological advancements in health, fitness, and performance.
        </p>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow group"
            >
              <div className="h-2 gradient-primary" />
              <div className="p-6">
                <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
                  {a.category}
                </span>

                <h3 className="font-heading font-semibold text-lg text-foreground mt-2 mb-3 line-clamp-2">
                  {a.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {a.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {a.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {a.date}
                  </span>
                </div>

                <Link
                  to={`/academy/${a.slug}`}
                  className="mt-4 inline-flex text-secondary font-medium text-sm items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Academy;