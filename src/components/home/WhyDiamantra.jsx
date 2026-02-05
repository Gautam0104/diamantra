const values = [
  { img: "/Group-194-(1).png", title: "Certified Lab Diamonds" },
  { img: "/Group-194-(2).png", title: "Lifetime Polishing" },
  { img: "/Group-194-(3).png", title: "925 Sterling Silver" },
  { img: "/Group-194-(4).png", title: "Free Shipping & Warranty" },
];

function SparkleDecor() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
        fill="#8B2035"
      />
    </svg>
  );
}

export default function WhyDiamantra() {
  return (
    <section className="flex flex-col py-16 md:py-24 bg-[#faf5f0] px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-7xl mx-auto w-full">
        {/* Left side - Heading */}
        <div className="flex flex-col shrink-0 md:w-2/5 items-center md:items-start">
          <img src="/Why.png" alt="Why" className="w-40 sm:w-60" />
          <img src="/Diamantra.png" alt="Diamantra" className="max-w-70 sm:max-w-none" />
        </div>

        {/* Right side - 2x2 Features grid */}
        <div className="relative grid grid-cols-2 flex-1">
          {/* Vertical dashed line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-gray-300 -translate-x-1/2 z-0" />
          {/* Horizontal dashed line */}
          <div className="absolute top-1/2 left-0 right-0 h-px border-t border-gray-300 -translate-y-1/2 z-0" />
          {/* Sparkle at center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#faf5f0] p-0">
            <SparkleDecor />
          </div>

          {values.map(({ img, title }) => (
            <div
              key={title}
              className="relative z-1 flex flex-col items-center text-center gap-2 sm:gap-3 px-3 py-5 sm:px-6 sm:py-8 md:px-10 md:py-10"
            >
              <img src={img} alt={title} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              <span className="text-charcoal font-heading text-sm md:text-lg italic">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
