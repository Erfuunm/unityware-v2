import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

const Products = () => (
  <div>
    <section className="gradient-hero py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
        >
          Our Products
        </motion.h1>
        <p className="text-primary-foreground/70 max-w-xl">
          Comprehensive range of medical-grade devices for foot health assessment, custom manufacturing, and biomechanical analysis.
        </p>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container space-y-16">
        {products.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
          >
            <div className="lg:w-1/2">
              <Link to={`/products/${p.slug}`} className="block rounded-xl overflow-hidden shadow-elevated group">
                <img src={p.img} alt={p.title} className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">{p.category}</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2 mb-4">{p.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {p.specs.map((s) => (
                  <span key={s} className="bg-primary/5 text-primary text-sm px-4 py-2 rounded-full font-medium">{s}</span>
                ))}
              </div>
              <Link
                to={`/products/${p.slug}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Products;
