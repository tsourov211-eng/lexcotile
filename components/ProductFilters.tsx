'use client';

import { useState } from 'react';
import { Search, ChevronDown, Plus, Minus, X, RotateCcw } from 'lucide-react';

export type FilterState = {
  keyword: string;
  category: string[];
  style: string[];
  shape: string[];
  finish: string[];
  color: string[];
};

type ProductFiltersProps = {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  productCount: number;
};

const categoryStructure = [
  {
    id: 'wall-tile',
    label: 'Wall Tile',
    subcategories: ['Ceramic Wall Tile', 'Glass Wall Tile'],
  },
  {
    id: 'floor-tile',
    label: 'Floor Tile',
    subcategories: ['Porcelain Tile - Colored Base', 'Unglazed Porcelain Tile', 'Glazed Porcelain Tile'],
  },
  {
    id: 'mosaic-tile',
    label: 'Mosaic',
    subcategories: ['Ceramic & Porcelain Mosaic', 'Glass & Glass Blend Mosaic', 'Stone & Stone Blend Mosaic'],
  },
  {
    id: 'natural-stone-tile',
    label: 'Natural Stone',
    subcategories: ['Limestone & Travertine', 'Marble', 'Slate & Quartzite'],
  },
  {
    id: 'pavers-quarry-tile',
    label: 'Pavers & Quarry',
    subcategories: ['Quarry Tile', 'Pavers'],
  },
  {
    id: 'clearance-outlet-tile',
    label: 'Clearance Tiles',
    subcategories: [],
  },
];

const featureOptions = [
  {
    key: 'style' as const,
    label: 'Styles',
    options: [
      '3D',
      'Brick',
      'Classic / Traditional',
      'Concrete',
      'Decorative',
      'Industrial',
      'Marble',
      'Modern / Contemporary',
      'Rustic',
      'Striated',
      'Subway',
      'Wood',
    ],
  },
  {
    key: 'finish' as const,
    label: 'Finishes',
    options: ['Gloss', 'Matte', 'Polished', 'Honed', 'Textured', 'Satin'],
  },
  {
    key: 'color' as const,
    label: 'Colors',
    options: ['White', 'Gray', 'Beige', 'Blue', 'Black', 'Green', 'Brown', 'Gold'],
  },
  {
    key: 'shape' as const,
    label: 'Shapes',
    options: ['Chevron', 'Herringbone', 'Hexagon', 'Linear', 'Random', 'Rectangular', 'Square'],
  },
];

export default function ProductFilters({
  filters,
  onFilterChange,
  productCount,
}: ProductFiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedCat, setExpandedCat] = useState<string | null>('wall-tile');
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(['style', 'shape', 'finish', 'color'])
  );

  const toggleSection = (key: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const toggleCategory = (catId: string) => {
    const current = filters.category;
    const updated = current.includes(catId)
      ? current.filter((c) => c !== catId)
      : [...current, catId];
    onFilterChange({ ...filters, category: updated });
  };

  const toggleFeature = (key: keyof FilterState, value: string) => {
    const current = filters[key] as string[];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange({ ...filters, [key]: updated });
  };

  const clearAll = () => {
    onFilterChange({
      keyword: '',
      category: [],
      style: [],
      shape: [],
      finish: [],
      color: [],
    });
  };

  const activeCount =
    (filters.keyword ? 1 : 0) +
    filters.category.length +
    filters.style.length +
    filters.shape.length +
    filters.finish.length +
    filters.color.length;

  return (
    <aside className="w-full lg:w-[280px] shrink-0 font-roboto">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full bg-[#e49649] text-white py-3 px-4 flex items-center justify-between text-[14px] font-medium uppercase tracking-wider"
        >
          <span>{mobileOpen ? 'Hide Filters' : `Show Filters (${activeCount})`}</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${mobileOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <div
        className={`${
          mobileOpen ? 'block' : 'hidden'
        } lg:block bg-white border border-[#dcdcde] p-5 shadow-sm space-y-6`}
      >
        {/* Active Filters Clear Bar */}
        {activeCount > 0 && (
          <div className="flex items-center justify-between pb-3 border-b border-[#dcdcde]">
            <span className="text-[12px] text-[#5b4b3f] font-medium">
              {activeCount} filter{activeCount > 1 ? 's' : ''} applied
            </span>
            <button
              onClick={clearAll}
              className="flex items-center gap-1 text-[12px] text-[#e3903f] hover:text-[#77777b] transition-colors"
            >
              <RotateCcw size={12} />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

        {/* 1. Keyword Search */}
        <div id="sidebar-search">
          <label
            htmlFor="sidebar-keyword"
            className="block text-[14px] font-light text-[#5b4b3f] uppercase tracking-normal mb-2"
          >
            Keyword Search
          </label>
          <div className="flex items-center border border-[#dcdcde] focus-within:border-[#e3903f] transition-colors bg-white">
            <input
              id="sidebar-keyword"
              type="text"
              value={filters.keyword}
              onChange={(e) =>
                onFilterChange({ ...filters, keyword: e.target.value })
              }
              placeholder="Search series or style..."
              className="flex-1 px-3 py-2 text-[13px] text-[#333333] focus:outline-none"
            />
            {filters.keyword ? (
              <button
                type="button"
                onClick={() => onFilterChange({ ...filters, keyword: '' })}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            ) : (
              <div className="p-2 text-[#77777b]">
                <Search size={15} />
              </div>
            )}
          </div>
        </div>

        {/* 2. Filter By Category */}
        <div className="pt-2 border-t border-[#dcdcde]">
          <h4 className="font-roboto font-light text-[15px] text-[#5b4b3f] uppercase tracking-normal mb-3">
            Filter By Category
          </h4>
          <ul className="space-y-2.5">
            {categoryStructure.map((cat) => {
              const checked = filters.category.includes(cat.id);
              const isExpanded = expandedCat === cat.id;

              return (
                <li key={cat.id} className="text-[13px]">
                  <div className="flex items-center justify-between group">
                    <label className="flex items-center gap-2.5 cursor-pointer text-[#333333] hover:text-[#e49649] transition-colors select-none">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCategory(cat.id)}
                        className="w-4 h-4 rounded-none accent-[#e49649] cursor-pointer"
                      />
                      <span className={checked ? 'font-medium text-[#e49649]' : ''}>
                        {cat.label}
                      </span>
                    </label>

                    {cat.subcategories.length > 0 && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedCat(isExpanded ? null : cat.id)
                        }
                        className="text-gray-400 hover:text-[#e49649] p-1"
                      >
                        {isExpanded ? <Minus size={13} /> : <Plus size={13} />}
                      </button>
                    )}
                  </div>

                  {/* Subcategories */}
                  {isExpanded && cat.subcategories.length > 0 && (
                    <ul className="pl-6 pt-2 space-y-1.5 text-[12px] text-gray-600 border-l border-[#dcdcde] ml-2 mt-1">
                      {cat.subcategories.map((sub) => (
                        <li key={sub}>
                          <label className="flex items-center gap-2 cursor-pointer hover:text-[#e49649]">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                            <span>{sub}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* 3. Filter By Feature (Styles, Finishes, Colors, Shapes) */}
        <div className="pt-2 border-t border-[#dcdcde] space-y-4">
          <h4 className="font-roboto font-light text-[15px] text-[#5b4b3f] uppercase tracking-normal">
            Filter By Feature
          </h4>

          {featureOptions.map((group) => {
            const isOpen = openSections.has(group.key);
            const selectedInGroup = filters[group.key] as string[];

            return (
              <div key={group.key} className="border-b border-[#dcdcde] pb-3">
                <button
                  type="button"
                  onClick={() => toggleSection(group.key)}
                  className="flex items-center justify-between w-full py-1 text-[13px] font-medium text-[#5b4b3f] uppercase tracking-wider hover:text-[#e49649] transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <span>{group.label}</span>
                    {selectedInGroup.length > 0 && (
                      <span className="w-4 h-4 rounded-full bg-[#e49649] text-white text-[10px] flex items-center justify-center font-bold">
                        {selectedInGroup.length}
                      </span>
                    )}
                  </span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#e49649]' : 'text-gray-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-2.5 max-h-48 overflow-y-auto space-y-2 pr-1 scrollbar-thin">
                    {group.options.map((opt) => {
                      const isChecked = selectedInGroup.includes(opt);
                      return (
                        <label
                          key={opt}
                          className="flex items-center gap-2.5 text-[13px] text-[#333333] hover:text-[#e49649] cursor-pointer select-none transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleFeature(group.key, opt)}
                            className="w-4 h-4 rounded-none accent-[#e49649] cursor-pointer"
                          />
                          <span className={isChecked ? 'font-medium text-[#e49649]' : ''}>
                            {opt}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
