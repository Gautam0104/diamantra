import { useRef, useState } from "react";
import { MoveRight } from "lucide-react";
import { menCategories } from "../../data/mockData";
import Button from "../ui/Button";

export default function ForMenSection() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX);
  };

  return (
    <section className="py-20 md:py-28 bg-black overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">
          {/* Left Side - Text & Button */}
          <div className="shrink-0 lg:w-150 text-center flex flex-col items-center px-4 lg:px-0">
             <div className="text-start w-[90%] sm:w-[80%]">
                          <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading text-gold font-bold leading-tight">
              For Men Who
              <br />
              Move Different.
            </h2>
            <p className="text-white text-sm mt-5 max-w-md text-start">
              Handpicked sparkle from our latest drops and trending picks.
            </p>
            <div className="flex justify-start mt-4">
              <Button text="Shop Now" />
            </div>
             </div>
          </div>

          {/* Right Side - Cards with last one clipped */}
          <div className="flex-1 overflow-hidden px-4 lg:px-0">
            <div
              ref={scrollRef}
              className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide select-none"
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              {menCategories.map((cat) => (
                <a
                  key={cat.name}
                  href="#"
                  className="group shrink-0 w-40 sm:w-48 lg:w-[calc((100%-100px)/3.5)] cursor-pointer"
                >
                  <div className="bg-[#CBD5E1] rounded-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-300 flex flex-col">
                    <div className="aspect-square">
                      {cat.image && (
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-charcoal text-base font-semibold">
                        {cat.name}
                      </p>
                      <p className="text-charcoal/50 text-sm mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
