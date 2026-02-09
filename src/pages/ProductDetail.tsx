import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero py-16">
        <div className="container">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mt-2">
              {product.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Image */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="rounded-xl overflow-hidden shadow-elevated sticky top-24">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Description */}
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed">{product.longDesc}</p>
              </div>

              {/* Specs */}
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Specifications
                </h2>
                <div className="flex flex-wrap gap-3">
                  {product.specs.map((s) => (
                    <span
                      key={s}
                      className="bg-primary/5 text-primary text-sm px-4 py-2 rounded-full font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/organizational-purchase">Organizational Purchase</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
