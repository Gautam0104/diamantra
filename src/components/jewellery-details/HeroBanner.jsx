
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="flex flex-col w-full">
      {/* Main hero content with background image */}
      <div
        className="flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 md:py-32 gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat h-[50vh] sm:h-[55vh] md:h-[65vh]"
        style={{
          backgroundImage: "url('/hero-bg/Rectangle 1.png')",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading text-white text-center leading-tight">
         Everyday Elegance,
          <br />
          Reimagined
        </h1>

        <p className="text-white text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-center">
          <Link to="/" className="font-normal transition-colors opacity-75">HOME</Link>
          {" / "}
          <Link to="/jewellery-list" className="font-normal transition-colors opacity-75">Jewelry</Link>
          {" / "}
          <span className="opacity-75">Rings</span>
           {" / "}
          <span>Endless Promise Ring</span>
        </p>
      </div>

      <div className="w-full h-8 sm:h-12 flex flex-row justify-center overflow-hidden">
        <img src="/Vector-30.png" alt="" className="h-full w-auto" />
        <img src="/Vector-29.png" alt="" className="h-full w-auto" />
      </div>
    </section>
  );
}
