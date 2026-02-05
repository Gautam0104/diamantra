import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../ui/Button";

const cards = [
  { hashtag: "#DiamKahani", tagline: "From desk to dinner" },
  { hashtag: "#MenOfDiamantra", tagline: "Not bling. Just balance." },
  { hashtag: "#DailyEdge", tagline: "Silver. Sharp. Statement" },
  { hashtag: "#LetsGetReal", tagline: "Lab diamonds > mined guilt." },
  { hashtag: "#MenOfDiamantra", tagline: "Not bling. Just balance." },
  { hashtag: "#DailyEdge", tagline: "Silver. Sharp. Statement" },
  { hashtag: "#DiamKahani", tagline: "From desk to dinner" },
  { hashtag: "#LetsGetReal", tagline: "Lab diamonds > mined guilt." },
];

const SLIDE_WIDTH = 260;
const TRANSLATE_MULT = 0.1;
const ROTATE_MULT = 0.01;

export default function RealPeopleSection() {
  const rootRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const calculateWheel = () => {
      const singles = root.querySelectorAll(".rp-card");
      singles.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty = Math.abs(r) * TRANSLATE_MULT - rect.width * TRANSLATE_MULT;
        if (ty < 0) ty = 0;
        const transformOrigin = r < 0 ? "left top" : "right top";
        slide.style.transform = `translate(0, ${ty}px) rotate(${-r * ROTATE_MULT}deg)`;
        slide.style.transformOrigin = transformOrigin;
      });
    };

    const loopFrame = () => {
      calculateWheel();
      rafId.current = requestAnimationFrame(loopFrame);
    };
    rafId.current = requestAnimationFrame(loopFrame);

    const onResize = () => calculateWheel();
    window.addEventListener("resize", onResize);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden max-w-480 mx-auto">
      {/* Decorative diamond shapes – top right */}
      <div className="absolute top-4 right-4 md:top-8 md:right-12 pointer-events-none select-none">

      </div>

      {/* Title */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-heading italic text-gold mb-8 sm:mb-12 md:mb-16 px-4">
        Real People. Real Shine.
      </h2>

      {/* Curved Swiper carousel */}
      <div ref={rootRef} className="relative w-full overflow-hidden">
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          loop={true}
          grabCursor={true}
          freeMode={true}
          allowTouchMove={true}
          centeredSlides={true}
          breakpoints={{
            640: { spaceBetween: 40 },
            1024: { spaceBetween: 60 },
            1536: { spaceBetween: 70 },
          }}
          className="rp-swiper"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i} style={{ width: `${SLIDE_WIDTH}px` }}>
              <div className="rp-card">
                <div className="w-full aspect-3/4 bg-[#6B6B6B] rounded-2xl p-5 flex flex-col items-center justify-between shadow-lg">
                  <span className="text-white text-xs md:text-sm font-medium tracking-wide">
                    {card.hashtag}
                  </span>
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/90" />
                  <span className="text-white text-xs md:text-sm font-medium text-center leading-tight">
                    {card.tagline}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center text-center mt-6">
        <Button text="Tag us to get featured." />
      </div>

      <style>{`
        .rp-swiper {
          padding: 3rem 0 4rem;
          overflow: visible;
        }
        .rp-card {
          position: relative;
          pointer-events: none;
          user-select: none;
          will-change: transform;
          transition: transform 0.06s linear;
        }
        @media (max-width: 768px) {
          .rp-swiper {
            padding: 1.5rem 0 2.5rem;
          }
          .rp-swiper .swiper-slide {
            width: 200px !important;
          }
        }
        @media (min-width: 1280px) {
          .rp-swiper .swiper-slide {
            width: 300px !important;
          }
        }
        @media (min-width: 1536px) {
          .rp-swiper .swiper-slide {
            width: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
