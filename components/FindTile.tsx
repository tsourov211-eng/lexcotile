'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    label: 'Wall Tile',
    image: 'https://www.lexcotile.com/wp-content/uploads/2021/02/Shadebrick-Wall.jpg',
    href: '/find-tile/tile-category/wall-tile/',
  },
  {
    label: 'Floor Tile',
    image: 'https://www.lexcotile.com/wp-content/uploads/2021/02/Thumbnail-450.jpg',
    href: '/find-tile/tile-category/floor-tile/',
  },
  {
    label: 'Porcelain Tile - Colored Base',
    image: 'https://www.lexcotile.com/wp-content/uploads/2021/02/Nirvana-450-x4-50.jpg',
    href: '/find-tile/tile-category/colored-base-porcelain-floor-tile/',
  },
  {
    label: 'Glass Wall Tile',
    image: 'https://www.lexcotile.com/wp-content/uploads/2021/02/Essentials-Glass-2.jpg',
    href: '/find-tile/tile-category/glass-wall-tile/',
  },
  {
    label: 'Mosaic',
    image: 'https://www.lexcotile.com/wp-content/uploads/2021/02/450x450-Mosaic.jpg',
    href: '/find-tile/tile-category/mosaic-tile/',
  },
  {
    label: 'Pavers & Quarry',
    image: 'https://www.lexcotile.com/wp-content/uploads/2021/02/450x450-Pavers.jpg',
    href: '/find-tile/tile-category/pavers-quarry-tile/',
  },
  {
    label: 'Natural Stone',
    image: 'https://www.lexcotile.com/wp-content/uploads/2021/02/450x450-Natural-Stone.jpg',
    href: '/find-tile/tile-category/natural-stone-tile/',
  },
  {
    label: 'See All Tile',
    image: null,
    href: '/find-tile/',
  },
];

export default function FindTile() {
  return (
    <section id="home-tile-cats" className="pt-16 pb-12 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Authentic Strike-through Heading */}
        <div className="mb-10">
          <h2 className="strike-through">Find Tile</h2>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat) =>
            cat.image ? (
              <Link
                key={cat.label}
                href={cat.href}
                className="group block text-center"
              >
                <div className="relative overflow-hidden aspect-square bg-[#efefef]">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  {/* Dark hover overlay with white arrow */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="pt-3 pb-4">
                  <h3 className="font-roboto text-[16px] text-[#77777b] group-hover:text-[#e49649] transition-colors duration-200">
                    {cat.label}
                  </h3>
                </div>
              </Link>
            ) : (
              <Link
                key={cat.label}
                href={cat.href}
                className="group block text-center"
              >
                <div className="relative overflow-hidden aspect-square bg-[#efefef] flex flex-col items-center justify-center p-6 border border-transparent hover:border-[#e49649] transition-all duration-300">
                  <div className="absolute inset-0 bg-[#333333]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center">
                    <span className="font-roboto font-normal text-[16px] text-white tracking-wide">
                      SEE ALL TILE
                    </span>
                    <ArrowRight size={22} className="text-[#e49649] mt-3" />
                  </div>

                  <h4 className="font-roboto font-normal text-[16px] text-[#e49649] tracking-wide mb-3 z-0">
                    SEE ALL TILE
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-[#e49649] text-white flex items-center justify-center group-hover:scale-110 transition-transform z-0">
                    <ArrowRight size={16} />
                  </div>
                </div>

                <div className="pt-3 pb-4">
                  <h3 className="font-roboto text-[16px] text-[#77777b] group-hover:text-[#e49649] transition-colors duration-200">
                    See All Tile
                  </h3>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
