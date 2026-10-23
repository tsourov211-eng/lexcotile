'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="home-two-col" className="py-8 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="border border-[#e49649] p-3 sm:p-5 md:p-8 bg-white">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-12 items-start">
            {/* Left Feature: Supply-Ready */}
            <div className="flex flex-col space-y-1.5 sm:space-y-3 md:space-y-4">
              <div className="relative w-full aspect-video overflow-hidden bg-black/5 rounded-none">
                <iframe
                  title="Olympia Tile Stock"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/tIVVI7EKNuc"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="font-roboto text-[11px] sm:text-[13px] md:text-[14px] text-[#333333] leading-tight sm:leading-relaxed pt-1 sm:pt-2">
                <span className="hidden sm:inline">
                  Lexco is Supply-Ready with 200 million square feet of stocked tile in our North American warehouses. 1-3 week approximate lead-times.
                </span>
                <span className="sm:hidden">
                  Supply-Ready with 200M+ sq. ft. stocked tile.
                </span>
              </p>
              <div>
                <Link
                  href="/find-tile/"
                  className="inline-flex items-center gap-1 sm:gap-2 text-[#e3903f] hover:text-[#77777b] font-roboto font-medium text-[11px] sm:text-[13px] md:text-[15px] uppercase tracking-wider transition-colors group"
                >
                  <span className="hidden sm:inline">View Our Tile</span>
                  <span className="sm:inline hidden">Tile</span>
                  <span className="sm:hidden">View Tile</span>
                  <ArrowRight
                    className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Right Feature: Sonoma Tilemakers / Visit Showroom */}
            <div className="flex flex-col space-y-1.5 sm:space-y-3 md:space-y-4">
              <div className="relative w-full aspect-video overflow-hidden bg-black/5 rounded-none">
                <iframe
                  title="The Stellar Story"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/MTQVwYR5Z4A"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="font-roboto text-[11px] sm:text-[13px] md:text-[14px] text-[#333333] leading-tight sm:leading-relaxed pt-1 sm:pt-2">
                <span className="hidden sm:inline">
                  Visit our showroom to see Sonoma Tilemakers first-hand, from Stellar to Mirazur to Vihara and more.
                </span>
                <span className="sm:hidden">
                  Visit our showroom to see Sonoma Tilemakers.
                </span>
              </p>
              <div>
                <Link
                  href="/showroom/"
                  className="inline-flex items-center gap-1 sm:gap-2 text-[#e3903f] hover:text-[#77777b] font-roboto font-medium text-[11px] sm:text-[13px] md:text-[15px] uppercase tracking-wider transition-colors group"
                >
                  <span className="hidden sm:inline">Visit Our Showroom</span>
                  <span className="sm:hidden">Showroom</span>
                  <ArrowRight
                    className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
