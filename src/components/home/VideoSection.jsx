import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden cursor-pointer group">
          {/* Placeholder */}
          <div className="absolute inset-0 bg-gray-300" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play size={32} className="text-charcoal ml-1 hidden md:block" fill="currentColor" />
              <Play size={22} className="text-charcoal ml-0.5 md:hidden" fill="currentColor" />
            </div>
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-center">

            <h3 className="font-heading text-lg sm:text-xl md:text-4xl text-white mb-4 md:mb-10">
              3d Product Video Section -- exclusive collection
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
