import Button from "../../ui/Button";
import RoundedPill from "../../ui/RoundedPill";

export default function NewsletterCTA() {
  return (
    <>
      {/* Ready to Glow Up CTA */}
      <section className="py-8 md:py-10 bg-gray-border ">
        <div className="max-w-2xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-heading text-white font-bold mb-3">
            Ready to Glow Up?
          </h2>
          <p className="text-white text-sm mb-8 max-w-lg text-center">
            Thousands already have their sparkle. Time to get yours with
            Diamantra.
          </p>
          <Button text="Shop Now" /> 
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-8 md:py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-charcoal">
          Join Our Newsletter to keep up to date with US!
        </h2>

        <div className="w-full md:w-auto">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-full border border-gray-300 px-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64 px-5 py-2.5  text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
            />
            <RoundedPill text="Subscribe" />
          </div>
          <label className="flex items-center gap-2 mt-3 text-xs text-gray-500 cursor-pointer">
            <input type="checkbox" className="accent-gold" />
            <span>
              By proceeding you agree to our{" "}
              <a href="#" className="underline text-gray-600 hover:text-charcoal">
                Platform Terms & Privacy Notice
              </a>
              .
            </span>
          </label>
        </div>
      </div>
      </section>
    </>
  );
}
