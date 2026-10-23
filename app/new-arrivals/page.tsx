'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowUpDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ProductCard from '@/components/ProductCard';
import ProductFilters, { type FilterState } from '@/components/ProductFilters';
import { wallTileProducts } from '@/lib/wall-tile-data';

export default function NewArrivalsPage() {
  const [filters, setFilters] = useState<FilterState>({
    keyword: '',
    category: [],
    style: [],
    shape: [],
    finish: [],
    color: [],
  });

  const [sortBy, setSortBy] = useState('newest');

  const newProducts = useMemo(() => {
    return wallTileProducts.filter((p) => p.isNew);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = newProducts.filter((p) => {
      if (
        filters.keyword &&
        !p.name.toLowerCase().includes(filters.keyword.toLowerCase()) &&
        !p.style.toLowerCase().includes(filters.keyword.toLowerCase())
      ) {
        return false;
      }
      if (filters.style.length > 0 && !filters.style.includes(p.style)) {
        return false;
      }
      if (filters.shape.length > 0 && !filters.shape.includes(p.shape)) {
        return false;
      }
      if (filters.finish.length > 0 && !filters.finish.includes(p.finish)) {
        return false;
      }
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
    }

    return result;
  }, [newProducts, filters, sortBy]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div id="breadcrumbs" className="pt-[105px] lg:pt-[125px] pb-3 border-b border-[#dcdcde] bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center space-x-2 text-[13px] font-roboto text-[#77777b]">
            <Link href="/" className="hover:text-[#e3903f] transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#333333] font-medium">New Arrivals</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <ProductFilters
            filters={filters}
            onFilterChange={setFilters}
            productCount={filteredProducts.length}
          />

          <div className="flex-1 w-full min-w-0">
            <div className="intro-text mb-4 sm:mb-8">
              <h1 className="font-alice text-[28px] sm:text-[38px] text-[#5b4b3f] font-normal leading-tight mb-1">
                New Arrivals
              </h1>
              <h2 className="font-alice text-[18px] sm:text-[24px] text-[#666666] font-normal mb-2 sm:mb-3 hidden sm:block">
                Latest Tile Trends &amp; Innovations
              </h2>
              <p className="hidden md:block font-roboto text-[14px] text-[#333333] leading-relaxed max-w-3xl">
                Be the first to explore new tile releases, architectural patterns, and trending textures freshly curated for modern design applications.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-3 border-b border-[#dcdcde]">
              <p className="font-roboto text-[13px] text-[#77777b]">
                Showing <span className="font-medium text-[#333333]">{filteredProducts.length}</span> new collections
              </p>
              <div className="flex items-center gap-2">
                <label className="font-roboto text-[12px] text-[#77777b] uppercase tracking-wider flex items-center gap-1">
                  <ArrowUpDown size={13} />
                  <span>Sort By:</span>
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-[#dcdcde] text-[13px] font-roboto px-3 py-1.5 bg-white text-[#333333] focus:outline-none focus:border-[#e3903f] cursor-pointer"
                >
                  <option value="newest">Newest Releases</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  hrefBase="/wall-tile"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
      <AnnouncementBar />
    </main>
  );
}
