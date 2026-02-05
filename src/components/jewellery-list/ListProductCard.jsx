import { useNavigate } from "react-router-dom";
import { Heart, Play } from "lucide-react";

export default function ListProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="group cursor-pointer flex flex-col"
      onClick={() => navigate(`/jewellery-details/${product.id}`)}
    >
      
      {/* Image area wrapper - relative so ribbon + fold can sit outside overflow */}
      <div className="relative">
        {/* Card with border and rounded corners */}
        <div className="border-2 border-gray-border rounded-2xl overflow-hidden bg-white">
          {/* Heart / wishlist icon - top left */}
          <button
            className="absolute top-3 left-3 w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart size={14} className="text-gray-400" />
          </button>

          {/* Product image placeholder */}
          <div className="aspect-5/4 bg-white flex items-center justify-center">
            {product.hasVideo && (
              <button className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center z-10">
                <Play size={20} className="text-white ml-0.5" fill="white" />
              </button>
            )}
          </div>
        </div>

        {/* Gold ribbon tag - positioned outside overflow container */}
        <div className="absolute top-3 -right-1.5 z-10 flex flex-col items-end">
          {/* Ribbon body */}
          <div
            className="bg-linear-to-r from-amber-500 to-amber-600 text-white text-[12px] font-semibold py-2 pl-5 pr-2.5 tracking-wide"
            style={{
              clipPath: "polygon(8% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            20% off on Making Charge
          </div>
          {/* Ribbon fold - dark triangle underneath */}
          <div
            className="w-1.5 h-0 mr-0"
            style={{
              borderLeft: "6px solid #92400e",
              borderBottom: "5px solid transparent",
            }}
          />
        </div>
      </div>

      {/* Product info - below card */}
      <div className="pt-2.5 px-1">
        <h3 className="font-heading text-[24px] font-normal text-charcoal leading-tight italic">
          {product.name}
        </h3>
        <p className="text-[14px] text-gray-400 mt-0.5 leading-snug">
          {product.subtitle}
        </p>
        <p className="text-maroon font-bold text-[22px] mt-1">
          &#8377;{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  );
}
