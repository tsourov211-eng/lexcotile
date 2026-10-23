'use client';

import Link from 'next/link';
import { ChevronRight, Award, Compass, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function ManufacturersPage() {
  const regions = [
    {
      country: 'Italy',
      highlight: 'Sassuolo & Emilia-Romagna Ceramic Masters',
      desc: 'Italy continues to lead the global tile industry in digital printing fidelity, large format porcelain slabs, and sophisticated architectural finishes.',
    },
    {
      country: 'Spain',
      highlight: 'Castellón & Valencia Artisan Tilemakers',
      desc: 'Spanish ceramics excel in decorative wall relief, handcrafted subway glazes, encaustic hydraulic patterns, and outdoor terrace porcelain.',
    },
    {
      country: 'North America',
      highlight: 'Domestic High-Performance Porcelain',
      desc: 'Top domestic tile factories engineered for heavy commercial foot traffic, LEED-certified sustainable manufacturing, and prompt availability.',
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
            <span className="text-[#333333] font-medium">Our Manufacturers</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[950px] mx-auto px-4 sm:px-6">
          <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
            Curated Global Sources
          </span>
          <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-6">
            Our Manufacturers
          </h1>
          <p className="font-roboto text-[16px] text-[#555555] leading-relaxed mb-10">
            We partner with leading ceramic and porcelain tile factories across the world. Every collection in our catalog is rigorously vetted for dimensional precision, thermal shock resistance, glaze wear rating (PEI), and aesthetic craftsmanship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {regions.map((reg, idx) => (
              <div
                key={idx}
                className="p-6 border border-gray-200 bg-white hover:border-[#e3903f] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-bold block mb-1">
                    Origin
                  </span>
                  <h3 className="font-alice text-[24px] text-[#5b4b3f] mb-2">{reg.country}</h3>
                  <p className="font-roboto font-semibold text-[13px] text-[#333333] mb-3">
                    {reg.highlight}
                  </p>
                  <p className="font-roboto text-[13px] text-[#666666] leading-relaxed">
                    {reg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-gray-200">
            <Link
              href="/find-tile/tile-category/wall-tile/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#e3903f] text-white font-roboto text-sm uppercase tracking-wider font-medium hover:bg-[#5b4b3f] transition-colors"
            >
              Explore Our Curated Collections &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
