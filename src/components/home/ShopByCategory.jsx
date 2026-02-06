import { categories } from "../../data/mockData";
import Button from "../ui/Button";


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
          <div key={cat.name} className="relative">
            <a
              href="#"
              className="group relative block w-full cursor-pointer overflow-hidden rounded-xl"
            >
              {/* Background image - For image use  commet Gradient overlay div*/}
              <img
                src="/ring-img.jpg"
                alt={cat.name}
                className="w-full aspect-3/4 object-cover"
              />
              <div className="absolute inset-0 "></div>

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gray-border aspect-3/4"></div>


              {/* Curve on top for even cards */}
              {index % 2 === 0 && (
                <div className="absolute top-0 left-0 right-0 flex flex-row justify-center z-10">
                  <img src="/Vector.png" alt="" />
                </div>
              )}

              {/* Curve on bottom for odd cards */}
              {index % 2 !== 0 && (
                <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-center z-10">
                  <img src="/Vector.png" alt="" className="rotate-180" />
                </div>
              )}

              {/* Category name */}
              <span className="absolute bottom-0 left-0 right-0 z-10 text-white font-heading text-lg sm:text-xl lg:text-3xl px-2 pb-8 md:px-4 md:pb-16 text-center">
                {cat.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
