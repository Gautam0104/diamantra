export default function SectionHeading({ title, subtitle, light = false, className = "" }) {
  return (
    <div className={`text-center mb-10 ${className}`}>
      <h2
        className={`text-3xl md:text-4xl font-heading font-semibold ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-sm ${light ? "text-white/70" : "text-gray-text"}`}>
          {subtitle}
        </p>
      )}
      <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
    </div>
  );
}
