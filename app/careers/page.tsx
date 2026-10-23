'use client';

import Link from 'next/link';
import { ChevronRight, Briefcase, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function CareersPage() {
  const openings = [
    {
      title: 'Showroom Design Consultant',
      dept: 'Retail & Design Sales',
      location: 'Milwaukee / New Berlin, WI',
      type: 'Full-time',
      desc: 'Work with homeowners, interior designers, and custom builders to select ceramic, porcelain, and stone materials for upscale residential renovations.',
    },
    {
      title: 'Warehouse & Forklift Operator',
      dept: 'Logistics & Distribution',
      location: 'Milwaukee / New Berlin, WI',
      type: 'Full-time',
      desc: 'Manage warehouse inventory staging, order pulling, contractor loading dock assistance, and incoming freight from North American sister hubs.',
    },
    {
      title: 'Architectural & Commercial Sales Representative',
      dept: 'Commercial Specifications',
      location: 'Wisconsin Territory',
      type: 'Full-time',
      desc: 'Build relationships with architectural firms, hospitality groups, and general contractors to specify Olympia Tile & Lexco products in commercial bids.',
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
            <span className="text-[#333333] font-medium">Careers</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[950px] mx-auto px-4 sm:px-6">
          <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
            Join Our Team
          </span>
          <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-4">
            Careers at Lexco Tile &amp; Stone
          </h1>
          <p className="font-roboto text-[16px] text-[#555555] leading-relaxed mb-10">
            Lexco Tile &amp; Stone has been an industry leader for over 50 years. We foster a collaborative, knowledgeable work culture with comprehensive benefits, competitive pay, and ongoing opportunities for career growth.
          </p>

          <div className="space-y-6 mb-12">
            {openings.map((job, idx) => (
              <div
                key={idx}
                className="p-8 border border-gray-200 bg-[#fbfbfa] hover:border-[#e3903f] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 bg-[#f8f7f5] text-[#e3903f] font-roboto text-xs font-semibold uppercase tracking-wider">
                      {job.dept}
                    </span>
                    <span className="text-xs font-roboto text-gray-500 flex items-center gap-1">
                      <MapPin size={13} className="text-[#e3903f]" />
                      {job.location}
                    </span>
                    <span className="text-xs font-roboto text-gray-500">• {job.type}</span>
                  </div>
                  <h3 className="font-alice text-[22px] text-[#5b4b3f] mb-2">{job.title}</h3>
                  <p className="font-roboto text-[14px] text-[#666666] leading-relaxed mb-6">
                    {job.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-roboto text-gray-500">
                    Comprehensive 401(k), health, dental &amp; PTO benefits
                  </span>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-1.5 text-xs font-roboto uppercase tracking-wider font-semibold text-[#e3903f] hover:text-[#5b4b3f]"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-[#f8f7f5] border border-gray-200 text-center">
            <h3 className="font-alice text-2xl text-[#5b4b3f] mb-2">Don’t See Your Ideal Role?</h3>
            <p className="font-roboto text-sm text-[#666666] max-w-md mx-auto mb-6">
              We are always interested in connecting with passionate design professionals and experienced warehouse operators. Send us your resume!
            </p>
            <a
              href="mailto:careers@webnibo.com"
              className="inline-block px-8 py-3 bg-[#e3903f] text-white font-roboto uppercase tracking-wider text-xs font-semibold hover:bg-[#5b4b3f] transition-colors"
            >
              Email Resume to careers@webnibo.com
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
