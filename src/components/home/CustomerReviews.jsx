import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { customerReviews } from "../../data/mockData";

export default function CustomerReviews() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector("div")?.offsetWidth || 340;
      const scrollAmount = cardWidth + 24;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header row: title left, arrows right */}
        <div className="flex items-end justify-between gap-4 mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-heading font-semibold text-charcoal">
            Proof That Real Looks This Good
          </h2>
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-charcoal/30 flex items-center justify-center hover:border-charcoal transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} className="text-charcoal" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-charcoal/30 flex items-center justify-center hover:border-charcoal transition-colors cursor-pointer"
            >
              <ArrowRight size={16} className="text-charcoal" />
            </button>
          </div>
        </div>

        {/* Horizontal scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-2"
        >
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="w-64 sm:max-w-75 md:max-w-85 bg-cream rounded-2xl p-5 md:p-6 shrink-0"
            >
              {/* Profile header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gray-text rounded-full shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-charcoal tracking-wide uppercase">
                    {review.name}, {review.age}
                  </p>
                  <p className="text-[11px] text-gray-text tracking-wider uppercase">
                    {review.title}
                  </p>
                </div>
              </div>

              <hr className="text-gray-300 mb-2"/>

              {/* Review text */}
              <p className="text-sm text-charcoal/80 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
