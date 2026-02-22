import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ARTICLES } from "@/data/articles";

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
          Stay informed with the latest research, clinical insights, and technological advancements.
        </p>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow group"
            >
              <div className="h-2 gradient-primary" />
              <div className="relative">
  <img
    src={a.coverImage}
    alt={a.coverImageAlt || a.title}
    className="w-full h-80 object-cover"
    loading="lazy"
  />
  <div className="absolute inset-0 bg-black/10" />
</div>
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