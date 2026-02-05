import { ChevronDown, ChevronUp } from "lucide-react";
import {
  filterCategories,
  priceRanges,
  availabilityOptions,
  genderOptions,
  shapeOptions,
} from "../../data/mockData";

function FilterSection({ title, children }) {
  return (
    <div className=" ">
      {/* Title with red left accent */}
      <div className="flex flex-row items-center gap-2 mb-4">
        <div className="w-0.5 h-6 bg-maroon rounded-full" />
        <div className=""><h3 className="font-heading text-[22px] text-charcoal italic">{title}</h3></div>
              {/* Divider line */}
      <div className="w-full h-px bg-gray-200" ></div>
      </div>

      {children}
    </div>
  );
}

function Checkbox({ label, count, checked, onChange }) {
  return (
    <div
      className="flex items-center gap-2.5 py-1.5 cursor-pointer group"
      onClick={onChange}
      role="checkbox"
      aria-checked={checked}
    >
      <div
        className={`w-3.75 h-3.75 rounded-[3px] border-[1.5px] flex items-center justify-center shrink-0 transition-colors ${
          checked
            ? "bg-maroon border-maroon"
            : "border-gray-300 group-hover:border-gray-400"
        }`}
      >
        {checked && (
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path
              d="M1 3.5L3.25 5.75L8 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="text-[13px] text-charcoal leading-none select-none">
        {label}
        {count !== undefined && (
          <span className="text-gray-400 ml-0.5">({count})</span>
        )}
      </span>
    </div>
  );
}

function CategoryItem({ cat, isSelected, onSelect, expandedCat, onToggleExpand, selectedSubs, onToggleSub }) {
  const hasSubcategories = cat.subcategories && cat.subcategories.length > 0;
  const isExpanded = expandedCat === cat.name;

  return (
    <div>
      <div className="flex items-center justify-between">
        <Checkbox
          label={cat.name}
          checked={isSelected}
          onChange={onSelect}
        />
        {hasSubcategories && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpand(cat.name);
            }}
            className="p-1 text-gray-400 hover:text-gray-600"
          >
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}
        {!hasSubcategories && (
          <button
            onClick={(e) => e.stopPropagation()}
            className="p-1 text-gray-400"
          >
            <ChevronDown size={14} />
          </button>
        )}
      </div>

      {/* Subcategories */}
      {isSelected && hasSubcategories && isExpanded && (
        <div className="ml-6 mt-0.5 space-y-0">
          {cat.subcategories.map((sub) => (
            <Checkbox
              key={sub}
              label={sub}
              checked={selectedSubs.includes(sub)}
              onChange={() => onToggleSub(sub)}
            />
          ))}
          <button className="text-maroon text-xs font-semibold mt-1.5 ml-6">
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default function FilterSidebar({ filters, onFilterChange }) {
  const {
    selectedCategory,
    expandedCat,
    selectedSubcategories,
    selectedPrices,
    selectedAvailability,
    selectedGender,
    selectedShapes,
  } = filters;

  const toggleArray = (key, value) => {
    const current = filters[key];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange(key, updated);
  };

  const handleCategorySelect = (catName) => {
    onFilterChange("selectedCategory", catName);
    onFilterChange("expandedCat", catName);
    onFilterChange("selectedSubcategories", []);
  };

  const handleToggleExpand = (catName) => {
    onFilterChange("expandedCat", expandedCat === catName ? null : catName);
  };

  return (
    <aside className="w-full">
      {/* Category */}
      <FilterSection title="Category">
        <div className="space-y-0">
          {filterCategories.map((cat) => (
            <CategoryItem
              key={cat.name}
              cat={cat}
              isSelected={selectedCategory === cat.name}
              onSelect={() => handleCategorySelect(cat.name)}
              expandedCat={expandedCat}
              onToggleExpand={handleToggleExpand}
              selectedSubs={selectedSubcategories}
              onToggleSub={(sub) => toggleArray("selectedSubcategories", sub)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Price */}
      <FilterSection title="Price">
        <div className="space-y-0">
          {priceRanges.map((range) => (
            <Checkbox
              key={range.label}
              label={range.label}
              count={range.count}
              checked={selectedPrices.includes(range.label)}
              onChange={() => toggleArray("selectedPrices", range.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Availability */}
      <FilterSection title="Availability">
        <div className="space-y-0">
          {availabilityOptions.map((opt) => (
            <Checkbox
              key={opt.label}
              label={opt.label}
              count={opt.count}
              checked={selectedAvailability.includes(opt.label)}
              onChange={() => toggleArray("selectedAvailability", opt.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Gender */}
      <FilterSection title="Gender">
        <div className="space-y-0">
          {genderOptions.map((g) => (
            <Checkbox
              key={g}
              label={g}
              checked={selectedGender.includes(g)}
              onChange={() => toggleArray("selectedGender", g)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Shape */}
      <FilterSection title="Shape">
        <div className="space-y-0">
          {shapeOptions.map((s) => (
            <Checkbox
              key={s}
              label={s}
              checked={selectedShapes.includes(s)}
              onChange={() => toggleArray("selectedShapes", s)}
            />
          ))}
        </div>
        <button className="text-maroon text-xs font-semibold mt-2 ml-6">
          Show More
        </button>
      </FilterSection>
    </aside>
  );
}
