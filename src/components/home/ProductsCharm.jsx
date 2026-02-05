import { Play } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { charmProducts } from "../../data/mockData";

export default function ProductsCharm() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="Products Charm" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
          {charmProducts.map((product) => (
            <div
              key={product.id}
              className="group relative aspect-3/4 bg-[#6B6B6B] rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center"
            >
              {/* Play button */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-5 h-5 md:w-6 md:h-6 text-[#4A4A4A] fill-[#4A4A4A] ml-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
