import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

export default function TeamCarousel({
  items,
  autoplay = true,
}: {
  items: TeamMember[];
  autoplay?: boolean;
}) {
  const autoplayPlugin = useMemo(
    () =>
      Autoplay(
        { delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true },
        (emblaRoot) => emblaRoot.parentElement
      ),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
      containScroll: "trimSnaps",
    },
    autoplay ? [autoplayPlugin] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <div className="relative">
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* Track */}
        <div className="flex -ml-4">
          {items.map((m, i) => (
            <div
              key={`${m.name}-${i}`}
              className="
                pl-4
                flex-[0_0_85%]
                sm:flex-[0_0_65%]
                md:flex-[0_0_50%]
                lg:flex-[0_0_38%]
                xl:flex-[0_0_33%]
              "
            >
              <div className="bg-card border border-border rounded-xl shadow-card overflow-hidden">
                <div className="h-[600px] w-full overflow-hidden">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <div className="px-4 py-3 text-center">
                  <p className="text-sm font-semibold text-foreground">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={scrollPrev}
          className="h-10 px-4 rounded-full bg-card border border-border shadow-sm hover:bg-muted transition"
          aria-label="Previous"
        >
          Prev
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              className={[
                "h-2.5 rounded-full transition-all",
                i === selectedIndex
                  ? "w-7 bg-primary"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50",
              ].join(" ")}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          className="h-10 px-4 rounded-full bg-card border border-border shadow-sm hover:bg-muted transition"
          aria-label="Next"
        >
          Next
        </button>
      </div>
    </div>
  );
}
