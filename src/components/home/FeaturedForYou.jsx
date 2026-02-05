import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, Flame } from "lucide-react";
import ProductCard from "../ui/ProductCard";
import { featuredProducts } from "../../data/mockData";
import Button from "../ui/Button";

export default function FeaturedForYou() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-8 md:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <h2 className="text-2xl md:text-4xl font-heading font-semibold text-charcoal italic align-middle">
              Featured for you
            </h2>
            <div className="hidden sm:block w-px h-3 bg-gray-text mt-2" />
            <p className="text-xs sm:text-sm text-maroon align-middle sm:mt-2">
              Handpicked sparkle from our latest drops and trending picks.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button className="featured-prev w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-charcoal transition-colors cursor-pointer">
              <ArrowLeft size={18} />
            </button>
            <button className="featured-next w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-charcoal transition-colors cursor-pointer">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".featured-prev", nextEl: ".featured-next" }}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1100: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-end gap-3 sm:gap-4 mt-8 md:mt-10">
          <div className="flex items-center gap-2 text-sm text-gray-text">
            <Flame size={16} className="text-orange-500" />
            <span className="font-medium">23 people bought this this week.</span>
          </div>
          <Button text="More Product" />
        </div>
      </div>
    </section>
  );
}
