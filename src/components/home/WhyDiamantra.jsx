const values = [
  { img: "/Group-194-(1).png", title: "Certified Lab Diamonds" },
  { img: "/Group-194-(2).png", title: "Lifetime Polishing" },
  { img: "/Group-194-(3).png", title: "925 Sterling Silver" },
  { img: "/Group-194-(4).png", title: "Free Shipping & Warranty" },
];

function SparkleDecor() {
  return (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
        fill="#8B2035"
      />
    </svg>
  );
}

export default function WhyDiamantra() {
  return (
    <section className="flex flex-col py-10 sm:py-16 md:py-20 lg:py-24 bg-[#faf5f0] px-3 sm:px-6 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto w-full">
        {/* Left side - Heading */}
        <div className="flex flex-col shrink-0 md:w-2/5  items-center md:items-start">
          <img src="/Why.png" alt="Why" className="w-28 sm:w-40 md:w-48" />
          <img
            src="/Diamantra.png"
            alt="Diamantra"
            className="max-w-50 sm:max-w-70 md:max-w-75 lg:max-w-90 xl:max-w-125"
          />
        </div>

        {/* Right side - 2x2 Features grid */}
        <div className="relative grid grid-cols-2 flex-1 w-full md:w-auto">
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
              className="relative z-1 flex flex-col items-center text-center gap-1.5 sm:gap-2 md:gap-3 px-2 py-4 sm:px-4 sm:py-6 md:px-8 md:py-8 lg:px-10 lg:py-10"
            >
              <img
                src={img}
                alt={title}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
              />
              <span className="text-charcoal font-heading text-xs sm:text-sm md:text-base lg:text-lg italic leading-tight">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
