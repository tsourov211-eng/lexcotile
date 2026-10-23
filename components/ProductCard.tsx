'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { WallTileProduct } from '@/lib/wall-tile-data';

export default function ProductCard({
  product,
  hrefBase = '/wall-tile',
}: {
  product: WallTileProduct;
  hrefBase?: string;
}) {
  return (
    <div className="thumb-item scroll-reveal block text-center group">
      <Link href={`${hrefBase}/${product.slug}`} className="hover-block block">
        {/* Square Image container with hover effects */}
        <div className="relative overflow-hidden aspect-square bg-[#efefef]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            loading="lazy"
          />

          {/* Dark Overlay with White Arrow on Hover */}
          <div className="absolute inset-0 bg-[#333333]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <ArrowRight size={20} />
            </div>
          </div>

          {/* Optional New badge */}
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-[#e3903f] text-white text-[10px] font-roboto font-semibold uppercase tracking-wider px-2 py-0.5 z-10">
              New
            </span>
          )}
        </div>

        {/* Product Title */}
        <div className="title pt-3 pb-4">
          <h3 className="font-roboto text-[16px] text-[#77777b] group-hover:text-[#e49649] transition-colors duration-200">
            {product.name}
          </h3>
        </div>
      </Link>
    </div>
  );
}
