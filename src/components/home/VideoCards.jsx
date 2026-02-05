import { Play } from "lucide-react";

export default function VideoCards() {
  const cards = [
    { title: "For Women Video Section", subtitle: "Exclusive styling & collection" },
    { title: "For Women Video Section", subtitle: "Latest trends & picks" },
  ];

  return (
    <section className="py-16 bg-white mb-8 relative">
            {/* Background graphic behind content */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-75">
        <img src="bg-graphic.png" alt="" className="h-[85vh]" />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative aspect-16/10 bg-white/50 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gray-300" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 md:w-14 md:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Play size={22} className="text-charcoal ml-0.5" fill="currentColor" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 text-center">
                <h3 className="font-heading text-xl sm:text-2xl md:text-4xl text-white font-semibold mb-2 md:mb-4">{card.title}</h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
