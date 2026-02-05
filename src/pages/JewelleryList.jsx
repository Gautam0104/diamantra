import { useState, useMemo, useCallback, useEffect } from "react";
import { SlidersHorizontal, X, MapPin, ChevronDown } from "lucide-react";
import NewsletterCTA from "../components/common/newsletter/NewsletterCTA";
import HeroBanner from "../components/jewellery-list/HeroBanner";
import FilterSidebar from "../components/jewellery-list/FilterSidebar";
import ListProductCard from "../components/jewellery-list/ListProductCard";
import PromoBanner from "../components/jewellery-list/PromoBanner";
import { ringProducts, priceRanges } from "../data/mockData";

const PROMO_AFTER = 9;

export default function JewelleryList() {
  const [filters, setFilters] = useState({
    selectedCategory: "Rings",
    expandedCat: "Rings",
    selectedSubcategories: ["All"],
    selectedPrices: [],
    selectedAvailability: [],
    selectedGender: [],
    selectedShapes: [],
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Lock body scroll when mobile filter drawer is open
  useEffect(() => {
    if (showMobileFilters) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showMobileFilters]);

  const handleFilterChange = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  // Count active filters (excluding defaults)
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.selectedSubcategories.length > 0 && !filters.selectedSubcategories.includes("All")) count++;
    if (filters.selectedPrices.length > 0) count += filters.selectedPrices.length;
    if (filters.selectedAvailability.length > 0) count += filters.selectedAvailability.length;
    if (filters.selectedGender.length > 0) count += filters.selectedGender.length;
    if (filters.selectedShapes.length > 0) count += filters.selectedShapes.length;
    return count;
  }, [filters]);

  const filtered = useMemo(() => {
    let items = [...ringProducts];

    // Subcategory / collection filter
    const subs = filters.selectedSubcategories;
    if (subs.length > 0 && !subs.includes("All")) {
      items = items.filter((p) => subs.includes(p.collection));
    }

    // Price range filter
    if (filters.selectedPrices.length > 0) {
      const ranges = priceRanges.filter((r) =>
        filters.selectedPrices.includes(r.label)
      );
      items = items.filter((p) =>
        ranges.some((r) => p.price >= r.min && p.price < r.max)
      );
    }

    // Availability filter
    if (filters.selectedAvailability.length > 0) {
      items = items.filter((p) => {
        if (filters.selectedAvailability.includes("In Stock") && p.inStock) return true;
        if (filters.selectedAvailability.includes("Out of Stock") && !p.inStock) return true;
        return false;
      });
    }

    // Gender filter
    if (filters.selectedGender.length > 0) {
      items = items.filter((p) => filters.selectedGender.includes(p.gender));
    }

    // Shape filter
    if (filters.selectedShapes.length > 0) {
      items = items.filter((p) => filters.selectedShapes.includes(p.shape));
    }

    return items;
  }, [filters]);

  const showPromo = filtered.length > PROMO_AFTER;
  const beforePromo = showPromo ? filtered.slice(0, PROMO_AFTER) : filtered;
  const afterPromo = showPromo ? filtered.slice(PROMO_AFTER) : [];

  return (
    <main>
      <HeroBanner />

      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">



          {/* Mobile/Tablet filter bar - visible below md */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <p className="text-sm text-gray-text">
              <span className="font-semibold text-charcoal">{filtered.length}</span> products
            </p>
            <button
              onClick={() => setShowMobileFilters(true)}
              className="flex items-center gap-1.5 text-sm font-medium text-charcoal border border-gray-300 rounded-full px-4 py-2"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-maroon text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center ml-0.5">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile filter drawer overlay */}
          {showMobileFilters && (
            <div className="md:hidden fixed inset-0 z-50 flex">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setShowMobileFilters(false)}
              />
              {/* Drawer */}
              <div className="relative w-72 max-w-[80vw] bg-white h-full overflow-y-auto shadow-xl z-10">
                {/* Drawer header */}
                <div className="sticky top-0 bg-white flex items-center justify-between px-4 py-3 border-b border-gray-200 z-10">
                  <span className="text-sm font-bold text-charcoal">Filters</span>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                  >
                    <X size={18} className="text-gray-text" />
                  </button>
                </div>
                {/* Sidebar content */}
                <div className="px-4 pb-24">
                  <FilterSidebar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                  />
                </div>
                {/* Apply button fixed at bottom */}
                <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-3">
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="w-full bg-maroon text-white text-sm font-semibold py-2.5 rounded-full"
                  >
                    Show {filtered.length} results
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar + Grid Layout */}
          <div className="flex gap-8">
            {/* Left Sidebar - desktop only */}
            <div className="hidden md:block w-56 shrink-0">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Right Content - Product Grid */}
            <div className="flex-1 min-w-0">
                          {/* Top bar - Title + Pincode + Sort */}
          <div className="flex flex-col md:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-between mb-6">
            <h2 className="text-lg font-heading font-normal text-charcoal truncate w-full">
              Rings{" "}
              <span className="text-sm font-body text-gray-400 font-normal">
                {filtered.length} Designs
              </span>
            </h2>

            <div className="w-full flex flex-row justify-between sm:justify-end items-center gap-2">
              <button className="flex items-center gap-1.5 bg-maroon text-white text-xs font-semibold px-4 py-2 rounded-lg">
                <MapPin size={14} />
                Pincode
              </button>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-8 py-2 text-xs font-semibold text-charcoal cursor-pointer focus:outline-none">
                  <option>Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-text pointer-events-none" />
              </div>
            </div>
          </div>
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {beforePromo.map((product) => (
                    <ListProductCard key={product.id} product={product} />
                  ))}

                  {showPromo && <PromoBanner />}

                  {afterPromo.map((product) => (
                    <ListProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-lg text-gray-text">
                    No products match the selected filters.
                  </p>
                  <button
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        selectedSubcategories: ["All"],
                        selectedPrices: [],
                        selectedAvailability: [],
                        selectedGender: [],
                        selectedShapes: [],
                      }))
                    }
                    className="mt-4 text-sm text-maroon font-semibold underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </main>
  );
}
