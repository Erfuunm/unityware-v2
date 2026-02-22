import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { getArticleBySlug } from "@/data/articles";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="container py-24">
        <p className="text-muted-foreground">Article not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-secondary text-xs font-semibold uppercase tracking-wider">
              {article.label}
            </div>

            <h1 className="mt-3 text-3xl md:text-5xl font-heading font-bold text-foreground">
              {article.title}
            </h1>

            <div className="mt-4 h-px w-12 bg-muted-foreground/30" />

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              {article.introParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Optional hero image */}
            {article.heroImage ? (
              <div className="mt-10">
                <img
                  src={article.heroImage}
                  alt={article.heroImageAlt || article.title}
                  className="w-full max-w-3xl mx-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            ) : null}

            <div className="mt-14 space-y-12">
              {article.sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-secondary text-xl md:text-2xl font-heading font-semibold">
                    {s.heading}
                  </h2>

                  <div className="mt-3 space-y-4 text-muted-foreground leading-relaxed">
                    {s.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {s.image ? (
                    <div className="mt-8">
                      <img
                        src={s.image}
                        alt={s.imageAlt || s.heading}
                        className={`w-full ${s.imageMaxWidth ?? "max-w-2xl"} mx-auto rounded-lg`}
                        loading="lazy"
                      />
                    </div>
                  ) : null}

                  {s.subSections?.length ? (
                    <div className="mt-8 space-y-8">
                      {s.subSections.map((sub) => (
                        <div key={sub.title}>
                          <h3 className="text-secondary font-heading font-medium text-lg">
                            {sub.title}
                          </h3>
                          <div className="mt-2 space-y-3 text-muted-foreground leading-relaxed">
                            {sub.paragraphs.map((p, idx) => (
                              <p key={idx}>{p}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-16 h-px w-12 bg-muted-foreground/20 mx-auto" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;