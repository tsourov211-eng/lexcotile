'use client';

import Link from 'next/link';
import { ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function DesignTrendsPage() {
  const trends = [
    {
      title: 'Fluted & 3D Tactile Wall Tiles',
      category: 'Dimensional Surfaces',
      desc: 'Textured tiles that create subtle play of light and shadow across bathroom vanities and accent walls. From delicate reeded ribs to sculptural undulating waves.',
      filterLink: '/find-tile/?tile_style=Industrial',
      img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Warm Earth & Terracotta Revival',
      category: 'Color Palettes',
      desc: 'Moving away from sterile grays toward grounding ochre, clay, warm taupe, and deep terracotta tones that evoke Mediterranean and desert retreats.',
      filterLink: '/find-tile/tile-category/wall-tile/',
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Dramatic Marble Veining & Large Slabs',
      category: 'Statement Porcelain',
      desc: 'Bookmatched continuous veining in Calacatta Gold, Nero Marquina, and emerald onyx with minimal grout lines for unbroken monolithic luxury.',
      filterLink: '/find-tile/?tile_style=Marble',
      img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Modern Organic Subway & Zellige Glazes',
      category: 'Handcrafted Looks',
      desc: 'Subway tiles with raw edges, slight tonal variation, and lustrous undulating glaze finishes that bring soul and character to residential kitchens.',
      filterLink: '/find-tile/?tile_style=Subway',
      img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AnnouncementBar />

      <div className="pt-[105px] sm:pt-[115px] border-b border-[#e5e5e7] bg-[#fbfbfa]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-[13px] font-roboto text-[#77777b]">
            <Link href="/" className="hover:text-[#e3903f] transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-[#999999]" />
            <Link href="/tile-resources/" className="hover:text-[#e3903f] transition-colors">
              Tile Resources
            </Link>
            <ChevronRight size={13} className="text-[#999999]" />
            <span className="text-[#333333] font-medium">Design Trends</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-[850px] mb-12">
            <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
              Inspiration &amp; Styles
            </span>
            <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-4">
              Tile Design Trends
            </h1>
            <p className="font-roboto text-[16px] text-[#555555] leading-relaxed">
              Curated by the design specialists at Lexco Tile &amp; Stone, explore the key tile movements influencing residential architecture and commercial interiors this season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {trends.map((item, idx) => (
              <div
                key={idx}
                className="group border border-gray-200 bg-white hover:border-[#e3903f] hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <span className="text-[11px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-alice text-[22px] text-[#5b4b3f] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-roboto text-[14px] text-[#666666] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <Link
                    href={item.filterLink}
                    className="inline-flex items-center gap-2 text-xs font-roboto uppercase tracking-wider font-semibold text-[#e3903f] hover:text-[#5b4b3f] transition-colors"
                  >
                    <span>Browse Matching Tiles</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
