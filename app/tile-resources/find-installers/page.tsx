'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, HardHat, MapPin, Phone, Mail, CheckCircle2, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function FindInstallersPage() {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const installers = [
    {
      name: 'Badger State Tile & Stone',
      city: 'Milwaukee, WI',
      region: 'Milwaukee Metro',
      specialty: 'Custom Showers, Curbless Transitions & Heated Floors',
      phone: '(555) 019-0142',
      certified: 'CTEF Certified Tile Installer',
    },
    {
      name: 'Lakeshore Artisan Ceramic',
      city: 'Waukesha, WI',
      region: 'Milwaukee Metro',
      specialty: 'Large Format Porcelain Slabs & Kitchen Backsplashes',
      phone: '(555) 019-0189',
      certified: 'NTCA Member Contractor',
    },
    {
      name: 'Capital City Tile Works',
      city: 'Madison, WI',
      region: 'Madison & South Central',
      specialty: 'Historic Restorations & Encaustic Pattern Tile',
      phone: '(555) 019-0118',
      certified: 'CTEF Certified Tile Installer',
    },
    {
      name: 'Fox Valley Tile & Marble',
      city: 'Appleton / Green Bay, WI',
      region: 'Northeast Wisconsin',
      specialty: 'Residential Bathrooms & Commercial Hospitality',
      phone: '(555) 019-0177',
      certified: 'Schluter® Certified Master Installer',
    },
    {
      name: 'Kenosha Precision Tile',
      city: 'Racine / Kenosha, WI',
      region: 'Southeast Wisconsin',
      specialty: 'Natural Stone, Pavers & Fireplace Surrounds',
      phone: '(555) 019-0133',
      certified: 'NTCA Member Contractor',
    },
  ];

  const filtered = selectedRegion === 'All'
    ? installers
    : installers.filter((i) => i.region === selectedRegion);

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
            <span className="text-[#333333] font-medium">Find Installers</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-[850px] mb-10">
            <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
              Contractor Directory
            </span>
            <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-4">
              Find Residential Tile Installers
            </h1>
            <p className="font-roboto text-[16px] text-[#555555] leading-relaxed">
              Are you a homeowner planning a new tile installation or remodel? Proper waterproofing and substrate preparation require skilled craftsmanship. Connect with vetted, reputable tile contractors in Wisconsin.
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-gray-200">
            {['All', 'Milwaukee Metro', 'Madison & South Central', 'Northeast Wisconsin', 'Southeast Wisconsin'].map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setSelectedRegion(reg)}
                className={`px-4 py-2 font-roboto text-xs uppercase tracking-wider font-semibold transition-all ${
                  selectedRegion === reg
                    ? 'bg-[#e3903f] text-white shadow-sm'
                    : 'bg-[#f8f7f5] text-[#5b4b3f] hover:bg-gray-200'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          {/* Installers List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filtered.map((inst, idx) => (
              <div
                key={idx}
                className="p-8 border border-gray-200 bg-white hover:border-[#e3903f] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-roboto font-bold text-[#e3903f] uppercase tracking-wider mb-2">
                    <Shield size={14} />
                    <span>{inst.certified}</span>
                  </div>
                  <h3 className="font-alice text-[22px] text-[#5b4b3f] mb-2">{inst.name}</h3>
                  <p className="flex items-center gap-1.5 text-xs font-roboto text-gray-500 mb-4">
                    <MapPin size={13} className="text-[#e3903f]" />
                    {inst.city} ({inst.region})
                  </p>
                  <p className="font-roboto text-sm text-[#666666] leading-relaxed mb-6">
                    <strong>Specialties:</strong> {inst.specialty}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-roboto font-semibold text-sm text-[#333333] flex items-center gap-1.5">
                    <Phone size={14} className="text-[#e3903f]" />
                    {inst.phone}
                  </span>
                  <Link
                    href="/contact/"
                    className="text-xs font-roboto uppercase tracking-wider font-semibold text-[#e3903f] hover:underline"
                  >
                    Referral Info
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Tips for Hiring Box */}
          <div className="p-8 bg-[#f8f7f5] border border-gray-200">
            <h3 className="font-alice text-2xl text-[#5b4b3f] mb-4">
              Tips for Hiring a Tile Contractor
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-roboto text-sm text-[#666666]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#e3903f] shrink-0 mt-0.5" />
                <p><strong>Ask for recent photos:</strong> Look at grout line consistency, corner alignments, and niche details in their past work.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#e3903f] shrink-0 mt-0.5" />
                <p><strong>Confirm waterproofing method:</strong> Ensure they use continuous uncoupling and sealed membrane systems like Schluter® KERDI.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#e3903f] shrink-0 mt-0.5" />
                <p><strong>Purchase through a dealer:</strong> Your installer can coordinate directly with Lexco dealers for order staging and loading dock pickup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
