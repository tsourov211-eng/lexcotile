'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'See Design Trends',
    description: 'What’s new in tile? See the latest styles and materials.',
    image: 'https://www.lexcotile.com/wp-content/uploads/2019/07/OSSIDI-celeste_crop_low.jpg',
    href: '/tile-resources/design-trends/',
  },
  {
    title: 'Visit our Showroom',
    description: 'See our tile selection in person. Get support from a Lexco design consultant.',
    image: 'https://www.lexcotile.com/wp-content/uploads/2019/04/visit-a-showroom_crop.jpg',
    href: '/showroom/',
  },
  {
    title: 'Find Tile Resources',
    description: 'Find tile installers and retail stores that carry Lexco tiles. Get free guides for both professionals and homeowners.',
    image: 'https://www.lexcotile.com/wp-content/uploads/2017/07/Guides-Tools-Feature.png',
    href: '/tile-resources/',
  },
];

export default function FeatureBanners() {
  return (
    <section id="home-main-features" className="py-8 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-0 overflow-hidden">
          {features.map((feat, idx) => (
            <Link
              key={feat.title}
              href={feat.href}
              className={`group relative block overflow-hidden aspect-[1/1] sm:aspect-[4/3] md:aspect-[3/4] lg:aspect-square bg-gray-900 ${
                idx === 2 ? 'col-span-2 md:col-span-1 aspect-[2/1] sm:aspect-[4/3] md:aspect-[3/4] lg:aspect-square' : 'col-span-1'
              }`}
            >
              {/* Background Image with Zoom */}
              <img
                src={feat.image}
                alt={feat.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#333333]/50 group-hover:bg-[#333333]/75 transition-colors duration-500" />

              {/* Content Block */}
              <div className="absolute inset-x-0 bottom-3 sm:bottom-6 md:bottom-8 px-2 sm:px-4 md:px-6 text-center text-white flex flex-col items-center justify-end z-10 transition-all duration-500 group-hover:bottom-5 sm:group-hover:bottom-8 md:group-hover:bottom-12">
                <h2 className="font-alice text-[14px] sm:text-[20px] md:text-[26px] text-white font-normal mb-1 sm:mb-2 leading-tight">
                  {feat.title}
                </h2>

                {/* Subtitle - reduced text on mobile */}
                <p className="font-roboto text-[10px] sm:text-[12px] md:text-[13px] text-white/90 max-w-[280px] mx-auto opacity-95 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 leading-tight sm:leading-snug mb-1.5 sm:mb-3">
                  <span className="hidden sm:inline">{feat.description}</span>
                  <span className="sm:hidden">
                    {idx === 0 && 'Latest tile styles & materials.'}
                    {idx === 1 && 'See our tiles in person.'}
                    {idx === 2 && 'Guides, tools & retail dealers.'}
                  </span>
                </p>

                {/* Arrow Icon Indicator */}
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-white/60 flex items-center justify-center text-white group-hover:border-white group-hover:bg-[#e3903f] transition-all duration-300">
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
