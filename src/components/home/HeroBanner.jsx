
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

export default function HeroBanner() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col w-full">
      {/* Main hero content with background image */}
      <div
        className="flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 md:py-32 gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat h-[50vh] sm:h-[55vh] md:h-[65vh]"
        style={{
          backgroundImage: "url('/hero-bg/Rectangle 1.png')",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white text-center leading-tight">
          Shine in Your Story
          <br />
          Crafted in Silver, Set in Soul.
        </h1>

        <p className="text-white text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-center">
          Lab-Grown Brilliance Meets Timeless Silver Elegance.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap mt-4">
          <Button
            text="Shop the Collection"
            bgColor="#D98E04"
            accentColor="#F5B84B"
            onClick={() => navigate('/jewellery-list')}
          />
          <Button
            text="Watch Our Story"
            bgColor="#000"
            accentColor="#b2b2b2"
            onClick={() => alert('Redirecting...')}
          />
        </div>
      </div>

      <div className="w-full h-8 sm:h-12 flex flex-row justify-center overflow-hidden">
        <img src="/Vector-30.png" alt="" className="h-full w-auto" />
        <img src="/Vector-29.png" alt="" className="h-full w-auto" />
      </div>
    </section>
  );
}
