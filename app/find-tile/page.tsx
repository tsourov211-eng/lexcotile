'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowUpDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ProductCard from '@/components/ProductCard';
import ProductFilters, { type FilterState } from '@/components/ProductFilters';
import { wallTileProducts } from '@/lib/wall-tile-data';

export default function FindTilePage() {
  const searchParams = useSearchParams();

  // Initialize filters from query parameters
  const [filters, setFilters] = useState<FilterState>({
    keyword: searchParams.get('keyword') || searchParams.get('tile_keyword') || searchParams.get('search') || '',
    category: searchParams.get('category') ? [searchParams.get('category')!] : [],
    style: searchParams.get('tile_style') ? [searchParams.get('tile_style')!] : [],
    shape: searchParams.get('tile_shape') ? [searchParams.get('tile_shape')!] : [],
    finish: [],
    color: [],
  });

  const [sortBy, setSortBy] = useState(searchParams.get('new') === 'true' ? 'newest' : 'featured');

  useEffect(() => {
    const styleParam = searchParams.get('tile_style');
    const shapeParam = searchParams.get('tile_shape');
    const keywordParam = searchParams.get('keyword') || searchParams.get('tile_keyword') || searchParams.get('search');
    const categoryParam = searchParams.get('category');
    const isNew = searchParams.get('new') === 'true';

    if (styleParam || shapeParam || keywordParam || categoryParam || isNew) {
      setFilters((prev) => ({
        ...prev,
        style: styleParam ? [styleParam] : prev.style,
        shape: shapeParam ? [shapeParam] : prev.shape,
        keyword: keywordParam || prev.keyword,
        category: categoryParam ? [categoryParam] : prev.category,
      }));
      if (isNew) setSortBy('newest');
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = wallTileProducts.filter((p) => {
      // Keyword
      if (
        filters.keyword &&
        !p.name.toLowerCase().includes(filters.keyword.toLowerCase()) &&
        !p.style.toLowerCase().includes(filters.keyword.toLowerCase())
      ) {
        return false;
      }
      // Category
      if (filters.category.length > 0) {
        const matchesCat = filters.category.some((cat) =>
          p.category.some((c) => c.toLowerCase() === cat.toLowerCase())
        );
        if (!matchesCat) return false;
      }
      // Style
      if (filters.style.length > 0 && !filters.style.includes(p.style)) {
        return false;
      }
      // Shape
      if (filters.shape.length > 0 && !filters.shape.includes(p.shape)) {
        return false;
      }
      // Finish
      if (filters.finish.length > 0 && !filters.finish.includes(p.finish)) {
        return false;
      }
      // Color
      if (
        filters.color.length > 0 &&
        !p.colors.some((c) => filters.color.includes(c))
      ) {
        return false;
      }
      return true;
    });

    if (sortBy === 'name-asc') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'newest') {
      result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [filters, sortBy]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumbs matching lexcotile */}
      <div id="breadcrumbs" className="pt-[105px] lg:pt-[125px] pb-3 border-b border-[#dcdcde] bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center space-x-2 text-[13px] font-roboto text-[#77777b]">
            <Link href="/" className="hover:text-[#e3903f] transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#333333] font-medium">Find Tile</span>
          </nav>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Sidebar Filter Column */}
          <ProductFilters
            filters={filters}
            onFilterChange={setFilters}
            productCount={filteredProducts.length}
          />

          {/* Right Product Grid Column */}
          <div className="flex-1 w-full min-w-0">
            {/* Category Intro Text */}
            <div className="intro-text mb-4 sm:mb-8">
              <h1 className="font-alice text-[28px] sm:text-[38px] text-[#5b4b3f] font-normal leading-tight mb-1">
                Find Tile Collections
              </h1>
              <h2 className="font-alice text-[18px] sm:text-[24px] text-[#666666] font-normal mb-2 sm:mb-3 hidden sm:block">
                Explore Premium Ceramic, Porcelain &amp; Natural Stone
              </h2>
              <p className="hidden md:block font-roboto text-[14px] text-[#333333] leading-relaxed max-w-3xl">
                webnibo brings millions of square feet of stocked surfaces ready for distribution. Filter by style, finish, color, and format to find the ideal match for your space.
              </p>
            </div>

            {/* Sort & Results Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-3 border-b border-[#dcdcde]">
              <p className="font-roboto text-[13px] text-[#77777b]">
                Showing <span className="font-medium text-[#333333]">{filteredProducts.length}</span> collections
              </p>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="sort-select"
                  className="font-roboto text-[12px] text-[#77777b] uppercase tracking-wider flex items-center gap-1"
                >
                  <ArrowUpDown size={13} />
                  <span>Sort By:</span>
                </label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-[#dcdcde] text-[13px] font-roboto px-3 py-1.5 bg-white text-[#333333] focus:outline-none focus:border-[#e3903f] cursor-pointer"
                >
                  <option value="featured">Featured Collections</option>
                  <option value="newest">New Arrivals</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>

            {/* Products Grid: 4 columns on desktop, 3 on tablet, 2 on mobile */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    hrefBase="/wall-tile"
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center border border-dashed border-[#dcdcde] bg-gray-50/50 p-8">
                <h3 className="font-alice text-[22px] text-[#5b4b3f] mb-2">
                  No matching tile collections found
                </h3>
                <p className="font-roboto text-[14px] text-[#77777b] mb-4">
                  Try adjusting or clearing your filters to see more results.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setFilters({
                      keyword: '',
                      category: [],
                      style: [],
                      shape: [],
                      finish: [],
                      color: [],
                    })
                  }
                  className="bg-[#e3903f] hover:bg-[#77777b] text-white px-6 py-2.5 text-[13px] font-roboto font-medium uppercase tracking-wider transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
      <AnnouncementBar />
    </main>
  );
}
