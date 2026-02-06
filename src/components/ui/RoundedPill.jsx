import React from 'react';

const RoundedPill = ({ 
  text = "Shop the Collection", 
  bgColor = "#D98E04", 
  accentColor = "#F5B84B",
  onClick 
}) => {
  return (
    <button 
      onClick={onClick}
      className="group relative flex items-center justify-center px-4 py-2 md:px-4  transition-transform active:scale-95"
    >
      {/* Main Button Body */}
      <div 
        className="absolute inset-0 rounded-full" 
        style={{ backgroundColor: bgColor }}
      />
      
      {/* Inner Decorative Border */}
      <div 
        className="absolute inset-1 rounded-full border-2 flex items-center justify-between"
        style={{ borderColor: `${accentColor}99` }} // Added 99 for slight transparency
      >
        {/* Left Dot */}
        <div 
          className="h-2 w-2 -ml-1 rounded-full" 
          style={{ backgroundColor: accentColor }}
        />
        
        {/* Right Dot */}
        <div 
          className="h-2 w-2 -mr-1 rounded-full" 
          style={{ backgroundColor: accentColor }}
        />
      </div>

      {/* Button Text */}
      <span className="relative z-10 text-xs md:text-lg  font-semibold text-white tracking-tight">
        {text}
      </span>
    </button>
  );
};

export default RoundedPill;