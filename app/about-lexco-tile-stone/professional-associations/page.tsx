'use client';

import Link from 'next/link';
import { ChevronRight, Award, Shield, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function ProfessionalAssociationsPage() {
  const assocs = [
    {
      code: 'CTDA',
      name: 'Ceramic Tile Distributors Association',
      desc: 'The leading international association dedicated to supporting and expanding the global ceramic tile distribution industry.',
    },
    {
      code: 'ASID',
      name: 'American Society of Interior Designers',
      desc: 'Advancing the interior design profession and communicating the impact of design on the human experience.',
    },
    {
      code: 'AIA',
      name: 'American Institute of Architects (Wisconsin Chapter)',
      desc: 'Supporting architects with continuing education, specification resources, and sustainable architectural design standards.',
    },
    {
      code: 'NTCA',
      name: 'National Tile Contractors Association',
      desc: 'Dedicated to professional tile installation education, certification, and ANSI/TCNA installation method standards.',
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
            <span className="text-[#333333] font-medium">Professional Associations</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[950px] mx-auto px-4 sm:px-6">
          <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
            Industry Standards &amp; Education
          </span>
          <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-6">
            Professional Associations
          </h1>
          <p className="font-roboto text-[16px] text-[#555555] leading-relaxed mb-10">
            Lexco Tile &amp; Stone actively participates in the premier national and regional organizations that set the technical, educational, and professional standards for architecture and tile craftsmanship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {assocs.map((item, idx) => (
              <div
                key={idx}
                className="p-8 border border-gray-200 bg-[#fbfbfa] hover:border-[#e3903f] transition-all"
              >
                <div className="inline-block px-3 py-1 bg-[#5b4b3f] text-white font-roboto font-bold text-xs uppercase tracking-wider mb-3">
                  {item.code}
                </div>
                <h3 className="font-alice text-[20px] text-[#5b4b3f] mb-2">{item.name}</h3>
                <p className="font-roboto text-[14px] text-[#666666] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#f8f7f5] text-center border border-gray-200">
            <h4 className="font-alice text-[19px] text-[#5b4b3f] mb-2">
              Architectural &amp; Commercial Specifications
            </h4>
            <p className="font-roboto text-[14px] text-[#666666] max-w-xl mx-auto mb-4">
              Need technical specification sheets, slip-resistance DCOF data, or AIA continuing education credits?
            </p>
            <Link
              href="/contact/"
              className="inline-block px-6 py-2.5 bg-[#e3903f] text-white font-roboto uppercase tracking-wider text-xs font-semibold hover:bg-[#5b4b3f] transition-colors"
            >
              Contact Our Commercial Rep
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
