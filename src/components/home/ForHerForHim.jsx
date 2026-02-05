import Button from "../ui/Button";

function Sparkle({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
        fill="#C9A84C"
      />
    </svg>
  );
}

const cards = [
  { title: "For Her", subtitle: "Grace with Edge", button: "Shop Now" },
  { title: "For Him", subtitle: "Grace with Edge", button: "Shop Now" },
];

export default function ForHerForHim() {
  return (
    <section className="py-4 bg-white relative">
      {/* Background graphic behind content */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-75">
        <img src="bg-graphic.png" alt="" className="h-[92vh]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div key={card.title} className="relative group cursor-pointer">
              {/* Card body */}
              <div className="relative h-64 sm:h-87.5 md:h-105 bg-[#6B6B6B] group-hover:bg-[#5a5a5a] transition-colors rounded-xl overflow-hidden">
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-10 z-10">
                  <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-1">
                    {card.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-5">{card.subtitle}</p>
                  <Button text={`${card.button}`} className="text-xs px-6 py-2.5" />
            
                </div>
              </div>

              {/* Curve on right for "For Her" (index 0) — hidden on mobile single-col */}
              {index === 0 && (
                <div className="hidden md:block absolute right-3 bottom-20 -translate-y-1/2 translate-x-1/2 z-50">
                  <img src="/Vector.png" alt="" className="rotate-90" />
                </div>
              )}

              {/* Curve on left for "For Him" (index 1) — hidden on mobile single-col */}
              {index === 1 && (
                <div className="hidden md:block absolute left-3 top-28 -translate-y-1/2 -translate-x-1/2 z-50">
                  <img src="/Vector.png" alt="" className="-rotate-90" />
                </div>
              )}

   
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
