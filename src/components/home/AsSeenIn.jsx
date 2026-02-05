import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";


const magazineCards = [
  {
    name: "GRAZIA",
    nameClass: "font-heading text-2xl md:text-3xl text-charcoal italic",
    description:
      "Diamantra nails the Gen Z brief with modern silhouettes, gender-inclusive styles, and conscious luxury designed for now.",
  },
  {
    name: "FEMINA",
    nameClass: "font-heading text-2xl md:text-3xl font-bold text-[#D6006E]",
    description:
      "With its blend of affordable elegance and lab-grown diamond purity, Diamantra is fast becoming the go-to brand for young Indians seeking meaningful jewellery.",
  },
  {
    name: "VOGUE",
    nameClass: "font-heading text-2xl md:text-3xl font-bold text-charcoal tracking-wider",
    description:
      "Diamantra is redefining modern luxury for a new generation blending lab-grown brilliance with sleek silver artistry that feels fresh, wearable, and unapologetically personal.",
  },
  {
    name: "BAZAAR",
    nameClass: "font-heading text-2xl md:text-3xl font-semibold text-charcoal tracking-widest",
    description:
      "Minimal yet expressive, Diamantra's pieces speak directly to the style-forward woman who loves her jewellery clean, conscious, and contemporary.",
  },
  {
    name: "ELLE",
    nameClass: "font-heading text-2xl md:text-3xl font-bold text-charcoal tracking-[0.3em]",
    description:
      "From everyday studs to bold statement pieces, Diamantra champions a new movement in ethical sparkle with effortless aesthetics.",
  },
  {
    name: "GRAZIA",
    nameClass: "font-heading text-2xl md:text-3xl text-charcoal italic",
    description:
      "Diamantra nails the Gen Z brief with modern silhouettes, gender-inclusive styles, and conscious luxury designed for now.",
  },
  {
    name: "FEMINA",
    nameClass: "font-heading text-2xl md:text-3xl font-bold text-[#D6006E]",
    description:
      "With its blend of affordable elegance and lab-grown diamond purity, Diamantra is fast becoming the go-to brand for young Indians seeking meaningful jewellery.",
  },
  {
    name: "VOGUE",
    nameClass: "font-heading text-2xl md:text-3xl font-bold text-charcoal tracking-wider",
    description:
      "Diamantra is redefining modern luxury for a new generation blending lab-grown brilliance with sleek silver artistry that feels fresh, wearable, and unapologetically personal.",
  },
  {
    name: "BAZAAR",
    nameClass: "font-heading text-2xl md:text-3xl font-semibold text-charcoal tracking-widest",
    description:
      "Minimal yet expressive, Diamantra's pieces speak directly to the style-forward woman who loves her jewellery clean, conscious, and contemporary.",
  },
  {
    name: "ELLE",
    nameClass: "font-heading text-2xl md:text-3xl font-bold text-charcoal tracking-[0.3em]",
    description:
      "From everyday studs to bold statement pieces, Diamantra champions a new movement in ethical sparkle with effortless aesthetics.",
  },

];

export default function AsSeenIn() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="bg-[#111118] relative overflow-hidden pt-14 md:pt-20 pb-0">
      {/* Title */}
      <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-[2.75rem] font-heading italic text-gold leading-snug mb-8 sm:mb-14 md:mb-20 px-4">
        As Seen In Leading Fashion
        <br />
        &amp; Lifestyle Magazines
      </h2>

      {/* All 5 cards visible — center card lifted */}
      <div className="relative w-full overflow-hidden">
        <Swiper
          slidesPerView={5}
          slidesPerGroup={1}
          spaceBetween={24}
          initialSlide={2}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          onSwiper={setSwiperInstance}
          breakpoints={{
            0: {
              slidesPerView: 1.4,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 2.2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          className="asi-swiper"
        >
          {magazineCards.map((mag, i) => (
            <SwiperSlide key={i} className="asi-slide">
              <div className="asi-card">
                <div className="w-[90%] bg-white rounded-l-lg rounded-r-2xl p-4 sm:p-5 md:p-7 flex flex-col gap-4 sm:gap-8 shadow-2xl min-h-48 sm:min-h-60 md:min-h-70">
                  <h3 className={mag.nameClass}>{mag.name}</h3>
                  <p className="text-gray-text text-xs md:text-sm leading-relaxed mt-4">
                    {mag.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom frame with perspective grid */}
      <div className="relative -mt-10 sm:-mt-16 md:-mt-24">
        <img
          src="/as-seen-in/Frame.png"
          alt=""
          className="w-full h-auto block"
          draggable={false}
        />
        {/* Navigation arrows centered over the frame */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 mt-0 sm:mt-24 md:mt-40">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/50 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-colors cursor-pointer bg-transparent"
          >
           <ArrowLeft color="white"/>
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/50 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-colors cursor-pointer bg-transparent"
          >
           <ArrowRight color="white" />
          </button>
        </div>
      </div>

      <style>{`
        .asi-swiper {
          padding: 2rem 0 4rem;
          overflow: visible;
        }
        .asi-card {
          transition: transform 0.4s ease;
          transform: translateY(0);
        }
        .asi-card h3{
         transition: opacity 0.4s ease;
          opacity: 0.75;
        }
        .asi-card p {
          transition: opacity 0.4s ease;
          opacity: 0.75;
          color: #000;
        }
        .swiper-slide-active .asi-card {
          transform: translateY(-30px);
        }
        .swiper-slide-active .asi-card h3,
        .swiper-slide-active .asi-card p {
          opacity: 1;
          font-weight:600;
        
        }
        @media (max-width: 768px) {
          .asi-swiper {
            padding: 1rem 0 3rem;
          }
          .swiper-slide-active .asi-card {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
