'use client';

import Link from 'next/link';
import { ChevronRight, Globe, Building, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function AffiliatesPage() {
  const affiliates = [
    {
      name: 'Olympia Tile (USA), Inc.',
      role: 'Parent Organization & Distribution Hub',
      desc: 'One of North America’s largest importers and distributors of ceramic and porcelain tile, natural stone, and setting materials. Headquartered with extensive distribution centers across the continent.',
    },
    {
      name: 'Kate-Lo Tile & Stone',
      role: 'Upper Midwest Sister Affiliate (Minnesota & Iowa)',
      desc: 'Our premier sister distributor serving Minneapolis/St. Paul, Plymouth, Burnsville, Roseville, Des Moines, and Omaha with expansive warehouse capacity and luxury design showrooms.',
    },
    {
      name: 'Olympia Tile International',
      role: 'Global Ceramic & Porcelain Research',
      desc: 'Direct partnerships with leading ceramic technology manufacturers across Italy, Spain, Brazil, and North America, ensuring world-class production standards.',
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
            <Link href="/about-lexco-tile-stone/" className="hover:text-[#e3903f] transition-colors">
              About
            </Link>
            <ChevronRight size={13} className="text-[#999999]" />
            <span className="text-[#333333] font-medium">Our Affiliates</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[950px] mx-auto px-4 sm:px-6">
          <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
            The Olympia Tile Network
          </span>
          <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-6">
            Our Affiliates
          </h1>
          <p className="font-roboto text-[16px] text-[#555555] leading-relaxed mb-10">
            Lexco Tile &amp; Stone is proud to be part of the Olympia Tile family. Being backed by an extensive North American network gives our Wisconsin clients huge buying power, reliable lead times, and access to exclusive collections not available elsewhere.
          </p>

          <div className="space-y-6 mb-12">
            {affiliates.map((aff, idx) => (
              <div
                key={idx}
                className="p-8 border border-gray-200 bg-[#fbfbfa] hover:border-[#e3903f] transition-all"
              >
                <div className="flex items-center gap-2 text-[#e3903f] mb-2">
                  <CheckCircle2 size={18} />
                  <span className="font-roboto text-xs uppercase tracking-wider font-semibold">
                    {aff.role}
                  </span>
                </div>
                <h3 className="font-alice text-[22px] text-[#5b4b3f] mb-2">{aff.name}</h3>
                <p className="font-roboto text-[14px] text-[#666666] leading-relaxed">
                  {aff.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#f8f7f5] border-l-4 border-[#e3903f]">
            <h4 className="font-alice text-[18px] text-[#5b4b3f] mb-2">
              Why This Matters For Your Project
            </h4>
            <p className="font-roboto text-[14px] text-[#555555] leading-relaxed">
              Because our sister warehouses in the Twin Cities and continental hubs hold vast reserves of top products, orders often arrive in days rather than waiting for transatlantic ship containers.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
