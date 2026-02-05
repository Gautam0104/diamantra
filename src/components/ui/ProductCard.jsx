import { Heart, ShoppingCart, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="group cursor-pointer h-full flex flex-col" onClick={() => navigate(`/jewellery-details/${product.id}`)}>
      <div className="relative aspect-square bg-[#c4c4c4] rounded-xl overflow-hidden mb-3 shrink-0">
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal text-white text-[10px] font-medium px-2.5 py-1 rounded-full z-10 flex items-center gap-1">
            {product.badge}
            {product.badge === "Trending" && <Flame size={12} className="text-orange-400" />}
          </span>
        )}
        <button className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center z-10 ${product.wishlisted ? "bg-white" : "bg-charcoal"}`}>
          <Heart
            size={15}
            className={product.wishlisted ? "text-maroon fill-maroon" : "text-white"}
          />
        </button>
        <div className="w-full h-full bg-[#c4c4c4]" />
      </div>

      <h3 className="text-md font-semibold text-charcoal leading-tight line-clamp-2 mb-0.5 min-h-10">
        {product.name}
      </h3>

      <p className="text-[13px] text-gray-text leading-snug line-clamp-2 mb-2 min-h-8">
        {product.description || "\u00A0"}
      </p>

      <div className="flex items-center gap-2 mb-3 mt-auto">
        {product.originalPrice && (
          <span className="text-xs text-maroon-light line-through">
            &#8377;{product.originalPrice.toLocaleString("en-IN")}
          </span>
        )}
        <span className="text-sm font-bold text-maroon">
          &#8377;{product.price.toLocaleString("en-IN")}
        </span>
      </div>

      <button className="w-full border border-gray-300 rounded-2xl py-2 text-xs font-semibold text-charcoal flex items-center justify-center gap-1.5 hover:border-charcoal transition-colors uppercase tracking-wide">
        Add to Cart <ShoppingCart size={13} />
      </button>
    </div>
  );
}
