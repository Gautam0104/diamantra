import { categories } from "../../data/mockData";
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

export default function ShopByCategory() {
  return (
    <section className="flex flex-col py-16 md:py-20 bg-white px-4 md:px-10">
      {/* Header row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-10 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl font-heading font-semibold text-charcoal">
          Shop by Category
        </h2>
       <Button text="More Categories" />
      </div>

      {/* Category cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6 max-w-7xl mx-auto w-full">
        {categories.map((cat, index) => (
          <div key={cat.name} className="relative ">
            <a
              href="#"
              className="group flex flex-col w-full cursor-pointer"
            >
              {/* Curve on top for even cards */}
              {index % 2 === 0 && (
                <div className="flex flex-row justify-center -mb-6 w-full z-50 rounded-xl bg-[#6B6B6B] group-hover:bg-[#5a5a5a]">
                  <img src="/Vector.png" alt="" />
                </div>
              )}

              {/* Card body */}
              <div className="flex flex-col justify-end aspect-3/4 bg-[#6B6B6B] overflow-hidden group-hover:bg-[#5a5a5a] transition-colors rounded-xl">
                <span className="text-white font-heading text-lg sm:text-xl lg:text-3xl px-2 pb-8 md:px-4 md:pb-16 text-center">
                  {cat.name}
                </span>
              </div>

              {/* Curve on bottom for odd cards */}
              {index % 2 !== 0 && (
                <div className="flex flex-row justify-center -mt-6 w-full z-50 rounded-xl bg-[#6B6B6B] group-hover:bg-[#5a5a5a]">
                  <img src="/Vector.png" alt="" className="rotate-180" />
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
