'use client';

import Link from 'next/link';
import { ChevronRight, Calendar, Building2, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function HistoryPage() {
  const milestones = [
    {
      year: '1970s',
      title: 'Foundation of Lexco Tile & Stone',
      desc: 'Lexco was founded in Wisconsin to supply architects, interior designers, and tile contractors with high-grade European ceramic, quarry, and natural stone tiles.',
    },
    {
      year: '1990s',
      title: 'Joining Olympia Tile USA',
      desc: 'Lexco became an affiliate of the Olympia Tile family, gaining direct access to one of North America’s largest warehousing and import supply chains.',
    },
    {
      year: '2010s',
      title: 'Showroom Expansion in Milwaukee',
      desc: 'Modernized our flagship design showroom to give homeowners, trade pros, and commercial builders an immersive hands-on sampling and specification experience.',
    },
    {
      year: 'Today',
      title: '50+ Years of Excellence',
      desc: 'With over half a century of expertise, Lexco continues to lead the Upper Midwest in residential, commercial, and hospitality tile innovation.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AnnouncementBar />

      {/* Breadcrumbs */}
      <div className="pt-[105px] sm:pt-[115px] border-b border-[#e5e5e7] bg-[#fbfbfa]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-[13px] font-roboto text-[#77777b]">
            <Link href="/" className="hover:text-[#e3903f] transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-[#999999]" />
            <Link href="/about-lexco-tile-stone/" className="hover:text-[#e3903f] transition-colors">
              About
            </Link>
            <ChevronRight size={13} className="text-[#999999]" />
            <span className="text-[#333333] font-medium">History</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[950px] mx-auto px-4 sm:px-6">
          <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
            Heritage &amp; Experience
          </span>
          <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-6">
            Our History
          </h1>
          <p className="font-roboto text-[16px] text-[#555555] leading-relaxed mb-10">
            For more than 50 years, Lexco Tile &amp; Stone has been a benchmark in Midwestern tile distribution. Our story is rooted in deep customer relationships, an unwavering standard for product durability, and a dedication to timeless design aesthetics.
          </p>

          {/* Timeline */}
          <div className="relative border-l-2 border-[#e3903f]/30 ml-4 pl-8 space-y-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#e3903f] border-4 border-white shadow" />
                <span className="inline-block px-3 py-1 bg-[#f8f7f5] text-[#e3903f] font-roboto font-bold text-xs uppercase tracking-wider mb-2">
                  {m.year}
                </span>
                <h3 className="font-alice text-[22px] text-[#5b4b3f] mb-2">{m.title}</h3>
                <p className="font-roboto text-[14px] text-[#666666] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
            <Link
              href="/about-lexco-tile-stone/our-affiliates/"
              className="px-6 py-3 bg-[#e3903f] text-white font-roboto text-sm uppercase tracking-wider font-medium hover:bg-[#5b4b3f] transition-colors"
            >
              Our Affiliates &rarr;
            </Link>
            <Link
              href="/find-tile/tile-category/wall-tile/"
              className="px-6 py-3 border border-gray-300 text-[#5b4b3f] font-roboto text-sm uppercase tracking-wider font-medium hover:border-[#e3903f] hover:text-[#e3903f] transition-colors"
            >
              Browse Wall Tile &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
