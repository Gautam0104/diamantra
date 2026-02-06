import { useState, useRef, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Minus, Plus, Star, ArrowLeft, ArrowRight, ChevronDown, Heart, X } from "lucide-react";
import NewsletterCTA from "../components/common/newsletter/NewsletterCTA";
import HeroBanner from "../components/jewellery-details/HeroBanner";
import ListProductCard from "../components/jewellery-list/ListProductCard";
import { ringProducts, featuredProducts, defaultMetalVariants, trustBadges } from "../data/mockData";
import RoundedPill from "../components/ui/RoundedPill";
import Button from "../components/ui/Button";

function SectionHeading({ children }) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <img src="/Vector-30.png" alt="" className="h-4 w-auto opacity-60" />
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal italic whitespace-nowrap">
                {children}
            </h2>
            <img src="/Vector-29.png" alt="" className="h-4 w-auto opacity-60" />
        </div>
    );
}

function StarRating({ rating, count }) {
    return (
        <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                        key={i}
                        size={14}
                        className={i <= Math.floor(rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                    />
                ))}
            </div>
            {count !== undefined && <span className="text-xs text-gray-400">({count} reviews)</span>}
        </div>
    );
}

export default function JewelleryDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [pincode, setPincode] = useState("");
    const [knowOpen, setKnowOpen] = useState(true);
    const [careOpen, setCareOpen] = useState(false);
    const [sizeChartOpen, setSizeChartOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);
    const thumbRef = useRef(null);

    const product = ringProducts.find((p) => p.id === Number(id)) || featuredProducts.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <main>
                <HeroBanner />
                <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                    <h2 className="text-2xl font-heading text-charcoal mb-4">Product Not Found</h2>
                    <p className="text-gray-text mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
                    <button onClick={() => navigate("/jewellery-list")} className="px-6 py-2.5 rounded-full bg-gold text-white text-sm font-semibold">
                        Browse All Jewellery
                    </button>
                </div>
                <NewsletterCTA />
            </main>
        );
    }

    const imagePlaceholders = Array.from({ length: product.imageCount || 9 });
    const variants = product.metalVariants || defaultMetalVariants;
    const variantGridCols = variants.map(() => "1fr").join("_2px_");

    const variantStyles = {
        silver: "border-2 border-gray-300 bg-gray-100 shadow-[0_10px_30px_8px_rgba(180,180,180,0.5)]",
        gold: "bg-amber-300 shadow-[0_10px_30px_8px_rgba(212,175,55,0.45)]",
        rose: "bg-gold shadow-[0_10px_30px_8px_rgba(220,140,60,0.45)]",
    };

    const trustBadgeIcons = {
        return: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8c0007" strokeWidth="1.5">
                <path d="M3 12a9 9 0 1 0 9-9" /><path d="M3 3v6h6" /><path d="M3 9l3-3" />
            </svg>
        ),
        exchange: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8c0007" strokeWidth="1.5">
                <path d="M7 16V4m0 0L3 8m4-4l4 4" /><path d="M17 8v12m0 0l4-4m-4 4l-4-4" />
            </svg>
        ),
        certified: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d48b00" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4" /><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
            </svg>
        ),
    };
    const sameCollection = ringProducts.filter((p) => p.collection === product.collection && p.id !== product.id);
    const otherProducts = ringProducts.filter((p) => p.collection !== product.collection && p.id !== product.id);
    const relatedProducts = [...sameCollection, ...otherProducts].slice(0, 4);
    const specs = product.specs || {};

    return (
        <main>
            <HeroBanner productName={product.name} />

            {/* Product Hero */}
            <section className="py-8 md:py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

                        {/* Left - Image Gallery */}
                        <div className="">
                            
                            {/* Main image */}
                            <div className="aspect-5/4 rounded-3xl overflow-hidden mb-3 relative">
                                {/* Background image - uncommet image and commet below div */}
                                {/* <img
                                    src="/jewellery-for-her-img.jpg"
                                    alt="Jewellery"
                                    className="absolute inset-0 w-full h-full object-cover"
                                /> */}
                                <div className="absolute inset-0 w-full h-full object-cover bg-gray-border" />
                                {/* Curve on top */}
                                <div className="absolute top-0 left-20 right-0 flex z-10">
                                    <img src="/Vector.png" alt="" />
                                </div>

                                {/* Curve on bottom */}
                                <div className="absolute bottom-0  right-20 flex z-10">
                                    <img src="/Vector.png" alt="" className="rotate-180" />
                                </div>
                            </div>

                            {/* Thumbnails row - slider */}
                            <div className="relative">
                                <div
                                    ref={thumbRef}
                                    className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
                                >
                                    {imagePlaceholders.map((_, i) => (
                                        
                                        <div
                                            key={i}
                                            className="aspect-square bg-gray-border rounded-2xl overflow-hidden shrink-0"
                                            style={{ width: "calc((100% - 0.75rem * 3) / 4)" }}
                                        >
                                            {/* <img src="/jewellery-for-her-img.jpg" alt="Jewellary" /> */}
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => thumbRef.current?.scrollBy({ left: -thumbRef.current.offsetWidth, behavior: "smooth" })}
                                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm hover:bg-gray-50 z-10"
                                >
                                    <ArrowLeft size={16} className="text-gray-400" />
                                </button>
                                <button
                                    onClick={() => thumbRef.current?.scrollBy({ left: thumbRef.current.offsetWidth, behavior: "smooth" })}
                                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm hover:bg-gray-50 z-10"
                                >
                                    <ArrowRight size={16} className="text-gray-400" />
                                </button>
                            </div>
                        </div>

                        {/* Right - Product Info */}
                        <div className="flex flex-col">
                            <h1 className="font-heading text-3xl md:text-4xl text-charcoal italic leading-tight">
                                {product.name}
                            </h1>

                            {/* Subtitle + Rating row */}
                            <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 mt-2">
                                <p className="text-[15px] font-semibold text-charcoal">{product.subtitle}</p>
                                <div className="w-px h-4 bg-gray-300" />
                                <StarRating rating={product.rating || 5} count={product.reviews || 0} />
                            </div>

                            {/* Product code */}
                            <p className="text-xs font-bold text-charcoal mt-1">{product.productCode}</p>

                            {/* Description */}
                            <p className="text-[12px] text-gray-text leading-relaxed mt-4">
                                {product.description || "This ring celebrates enduring love with its polished silver band and radiant lab-grown diamond."}
                            </p>

                            {/* Price + Size Chart */}
                            <div className="flex items-center gap-4 mt-5">
                                <p className="text-maroon font-bold text-[28px]">
                                    &#8377;{product.price.toLocaleString("en-IN")}
                                </p>
                                {product.sizeRange && (
                                    <button
                                        onClick={() => setSizeChartOpen(true)}
                                        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                                    >
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center ">
                                            <img src="/size-chart.svg" alt="Size Chart" className="w-full h-full" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[10px] font-bold text-charcoal uppercase tracking-wide">Size Chart</p>
                                            <p className="text-md font-semibold text-charcoal">
                                                {selectedSize ? `${selectedSize.size} (${selectedSize.mm}mm)` : product.sizeRange}
                                            </p>
                                        </div>
                                    </button>
                                )}
                            </div>

                            {/* Quality badges */}
                            <div
                                className="border-b-2 border-t-2 border-gray-300 mt-6"
                                style={{ display: "grid", gridTemplateColumns: variantGridCols.split("_").join(" ") }}
                            >
                                {variants.map((v, i) => (
                                    <Fragment key={v.label}>
                                        {i > 0 && <div className="bg-gray-300" />}
                                        <div className="flex flex-col items-center justify-center py-5">
                                            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${variantStyles[v.style] || "bg-gray-100"}`}>
                                                <span className="text-sm font-bold text-charcoal">{v.purity}</span>
                                            </div>
                                            <span className="text-[10px] text-gray-text mt-1.5">{v.label}</span>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>

                            {/* Certification + Pincode row */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6">
                                <div className="flex items-center gap-3 shrink-0 justify-center sm:justify-start">
                                    <img src="/trust-badge/image.svg" alt="" className="h-10 w-auto" />
                                    <div className="flex flex-col items-center">
                                        <img src="/diamond.svg" alt="" className="h-5 w-auto" />
                                        <span className="text-xs font-semibold text-gold mt-0.5">{product.certification}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 flex-1 border border-gray-300 rounded-full p-1">
                                    <input
                                        type="text"
                                        value={pincode}
                                        onChange={(e) => setPincode(e.target.value)}
                                        placeholder="Check pincode Availability"
                                        className=" px-4 py-2.5 text-xs flex-1 focus:outline-none focus:border-charcoal"
                                    />
                                    <RoundedPill text="Check" />
                                </div>
                            </div>

                            {/* Quantity + Actions */}
                            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-2.5 mt-6">
                                <div className="flex items-center border border-gray-300 rounded-3xl overflow-hidden w-full sm:w-auto sm:shrink-0">
                                    <button
                                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 border-r border-gray-300 shrink-0"
                                    >
                                        <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                    </button>
                                    <span className="flex-1 sm:flex-none sm:w-10 text-center text-xs sm:text-sm font-semibold">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity((q) => q + 1)}
                                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 border-l border-gray-300 shrink-0"
                                    >
                                        <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                    </button>
                                </div>
                                <Button text="Add to Cart" className="w-full sm:w-auto" />
                                <Button text="Whatsapp Now" bgColor="#00b242" accentColor="#67e395" className="w-full sm:w-auto" />

                                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center shrink-0 hover:bg-gray-50">
                                    <Heart size={16} color="maroon" fill="maroon" className="text-gray-400 " />
                                </button>
                            </div>

                            {/* Trust badges */}
                            <div className="grid grid-cols-[1fr_2px_1fr_2px_1fr] border-b-2 border-t-2 border-gray-300 mt-6">
                                {trustBadges.map((badge, i) => (
                                    <Fragment key={badge.icon}>
                                        {i > 0 && <div className="bg-gray-300" />}
                                        <div className="flex flex-col items-center text-center gap-1.5 py-3">
                                            <img src={badge.icon} alt="" />
                                            <span className="text-[10px] font-semibold text-charcoal leading-tight">{badge.label}</span>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Table */}
            <section className="py-10 md:py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h1 className="font-heading text-3xl md:text-4xl text-charcoal italic leading-tight mb-2">Product Detail</h1>
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                        {/* Row 1 */}
                        <div className="grid grid-cols-2 gap-px bg-gray-200 md:gap-0 md:bg-transparent md:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr]">
                            <div className="px-5 py-4 bg-white">
                                <p className="text-xs text-gray-text mb-1">Silver Weight</p>
                                <p className="text-sm font-bold text-maroon">{specs.stoneWeight}</p>
                            </div>
                            <div className="bg-gray-200 hidden md:block" />
                            <div className="px-5 py-4 bg-white">
                                <p className="text-xs text-gray-text mb-1">Dimond Type</p>
                                <p className="text-sm font-bold text-charcoal">{specs.mineralType}</p>
                            </div>
                            <div className="bg-gray-200 hidden md:block" />
                            <div className="px-5 py-4 bg-white">
                                <p className="text-xs text-gray-text mb-1">Diamond Colour</p>
                                <p className="text-sm font-bold text-maroon">{specs.diamondColour}</p>
                            </div>
                            <div className="bg-gray-200 hidden md:block" />
                            <div className="px-5 py-4 bg-white">
                                <p className="text-xs text-gray-text mb-1">Diamond Clarity</p>
                                <p className="text-sm font-bold text-maroon">{specs.diamondClarity}</p>
                            </div>
                        </div>
                        {/* Divider */}
                        <div className="h-px bg-gray-200" />
                        {/* Row 2 */}
                        <div className="grid grid-cols-2 gap-px bg-gray-200 md:gap-0 md:bg-cream md:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr]">
                            <div className="px-5 py-4 bg-cream">
                                <p className="text-xs text-gray-text mb-1">Country of Origin</p>
                                <p className="text-sm font-bold text-maroon">{specs.countryOfOrigin}</p>
                            </div>
                            <div className="bg-gray-200 hidden md:block" />
                            <div className="px-5 py-4 bg-cream">
                                <p className="text-xs text-gray-text mb-1">Diamond Shape</p>
                                <p className="text-sm font-bold text-charcoal">{specs.diamondShape}</p>
                            </div>
                            <div className="bg-gray-200 hidden md:block" />
                            <div className="px-5 py-4 bg-cream">
                                <p className="text-xs text-gray-text mb-1">Diamond Weight CT</p>
                                <p className="text-sm font-bold text-charcoal">{specs.diamondWeightCT}</p>
                            </div>
                            <div className="bg-gray-200 hidden md:block" />
                            <div className="px-5 py-4 bg-cream">
                                <p className="text-xs text-gray-text mb-1">Total Diamond Weight</p>
                                <p className="text-sm font-bold text-charcoal">{specs.totalDiamondWeight}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Know Your Jewellery */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="border-b border-gray-200 py-6">
                        <button
                            onClick={() => setKnowOpen(!knowOpen)}
                            className="flex items-center justify-between w-full"
                        >
                            <h2 className="font-heading text-2xl md:text-3xl text-charcoal italic">
                                Know Your Jewellery
                            </h2>
                            <div className="w-9 h-9 rounded-full border-2 border-gold flex items-center justify-center shrink-0">
                                <ChevronDown
                                    size={18}
                                    className={`text-gold transition-transform ${knowOpen ? "rotate-180" : ""}`}
                                />
                            </div>
                        </button>
                        {knowOpen && (
                            <p className="text-sm text-gray-text leading-relaxed mt-4">
                                Lorem Ipsum is simply dummy text of the jewellery and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Jewellery Care */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="border-b border-gray-200 py-6">
                        <button
                            onClick={() => setCareOpen(!careOpen)}
                            className="flex items-center justify-between w-full"
                        >
                            <h2 className="font-heading text-2xl md:text-3xl text-charcoal italic">
                                Jewellery Care
                            </h2>
                            <div className="w-9 h-9 rounded-full border-2 border-gold flex items-center justify-center shrink-0">
                                <ChevronDown
                                    size={18}
                                    className={`text-gold transition-transform ${careOpen ? "rotate-180" : ""}`}
                                />
                            </div>
                        </button>
                        {careOpen && (
                            <p className="text-sm text-gray-text leading-relaxed mt-4">
                                Store your jewellery in a cool, dry place away from direct sunlight. Avoid contact with perfumes, lotions, and chemicals. Clean gently with a soft cloth after each wear. For deep cleaning, use a mild soap solution and pat dry with a lint-free cloth.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Similar Designs */}
            {relatedProducts.length > 0 && (
                <section className="py-10 md:py-14 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <h1 className="font-heading text-3xl md:text-4xl text-charcoal italic leading-tight mb-4">Similar Designs</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                            {relatedProducts.map((p) => (
                                <ListProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Customer Reviews */}
            <section className="py-10 md:py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
                        <h1 className="font-heading text-3xl md:text-4xl text-charcoal italic leading-tight">Customer Reviews</h1>
                        <Button text="Write a Review" />
                    </div>
                    <div className="flex flex-col items-center gap-2 py-6">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={18} className="text-gray-300" />
                            ))}
                        </div>
                        <p className="text-xs font-semibold text-charcoal uppercase tracking-widest">There are no reviews yet.</p>
                    </div>
                </div>
            </section>

            <NewsletterCTA />

            {/* Size Chart Modal */}
            {sizeChartOpen && product.sizeRange && (() => {
                const ringSizes = [
                    { size: 1, mm: 39 }, { size: 2, mm: 40 }, { size: 3, mm: 41 },
                    { size: 4, mm: 42 }, { size: 5, mm: 43 }, { size: 6, mm: 44 },
                    { size: 7, mm: 45 }, { size: 8, mm: 46 }, { size: 9, mm: 47 },
                    { size: 10, mm: 48 }, { size: 11, mm: 49 }, { size: 12, mm: 50 },
                    { size: 13, mm: 51 }, { size: 14, mm: 52 }, { size: 15, mm: 53 },
                    { size: 16, mm: 54 }, { size: 17, mm: 55 }, { size: 18, mm: 56 },
                    { size: 19, mm: 57 }, { size: 20, mm: 58 }, { size: 21, mm: 59 },
                    { size: 22, mm: 60 }, { size: 23, mm: 61 }, { size: 24, mm: 62 },
                    { size: 25, mm: 63 }, { size: 26, mm: 64 }, { size: 27, mm: 65 },
                    { size: 28, mm: 66 }, { size: 29, mm: 67 }, { size: 30, mm: 68 },
                ];
                const match = product.sizeRange.match(/^(\d+)\s*\(.*?\)\s*-\s*(\d+)/);
                const minSize = match ? Number(match[1]) : 0;
                const maxSize = match ? Number(match[2]) : 0;

                return (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                        onClick={() => setSizeChartOpen(false)}
                    >
                        <div
                            className="bg-white rounded-2xl w-full max-w-lg max-h-[80vh] flex flex-col shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                                <div className="flex items-center gap-2">
                                    <img src="/size-chart.svg" alt="" className="w-7 h-7" />
                                    <h3 className="font-heading text-xl text-charcoal italic">Ring Size Chart</h3>
                                </div>
                                <button
                                    onClick={() => setSizeChartOpen(false)}
                                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                                >
                                    <X size={16} className="text-gray-500" />
                                </button>
                            </div>

                            {/* Available range badge */}
                            <div className="px-6 pt-4 pb-2">
                                <p className="text-xs text-gray-text">
                                    Available for this product: <span className="font-bold text-maroon">{product.sizeRange}</span>
                                </p>
                            </div>

                            {/* Table */}
                            <div className="overflow-y-auto px-6 pb-6">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="py-2.5 text-left text-xs font-bold text-charcoal uppercase tracking-wide">Size</th>
                                            <th className="py-2.5 text-left text-xs font-bold text-charcoal uppercase tracking-wide">Inner Circumference</th>
                                            <th className="py-2.5 text-left text-xs font-bold text-charcoal uppercase tracking-wide">Inner Diameter</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ringSizes.map((r) => {
                                            const inRange = r.size >= minSize && r.size <= maxSize;
                                            const isSelected = selectedSize?.size === r.size;
                                            return (
                                                <tr
                                                    key={r.size}
                                                    onClick={() => {
                                                        if (inRange) {
                                                            setSelectedSize({ size: r.size, mm: r.mm });
                                                            setSizeChartOpen(false);
                                                        }
                                                    }}
                                                    className={`border-b border-gray-100 ${
                                                        isSelected ? "bg-maroon/10 ring-1 ring-maroon" :
                                                        inRange ? "bg-gold/10 hover:bg-gold/20 cursor-pointer" :
                                                        "opacity-40"
                                                    }`}
                                                >
                                                    <td className={`py-2 font-semibold ${isSelected || inRange ? "text-maroon" : "text-charcoal"}`}>
                                                        {r.size}
                                                    </td>
                                                    <td className={`py-2 ${isSelected || inRange ? "text-maroon" : "text-gray-text"}`}>
                                                        {(r.mm * Math.PI).toFixed(1)} mm
                                                    </td>
                                                    <td className={`py-2 ${isSelected || inRange ? "text-maroon" : "text-gray-text"}`}>
                                                        {r.mm} mm
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            })()}
        </main>
    );
}
