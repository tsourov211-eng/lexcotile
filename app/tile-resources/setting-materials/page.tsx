'use client';

import Link from 'next/link';
import { ChevronRight, Wrench, ShieldCheck, Check, Layers, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function SettingMaterialsPage() {
  const categories = [
    {
      title: 'Mortars & Polymer-Modified Thin-Sets',
      brand: 'MAPEI • TEC • Custom Building Products',
      desc: 'Formulated for standard porcelain, non-sag wall installations, and Large and Heavy Tile (LHT) floor assemblies. Superior bond strength and extended open time.',
    },
    {
      title: 'High-Performance & Epoxy Grouts',
      brand: 'MAPEI Ultracolor Plus FA • Kerapoxy',
      desc: 'Color-consistent, efflorescence-free, stain-resistant grout formulations for grout joints from 1/16" to 3/4". Zero shrinkage and antimicrobial protection.',
    },
    {
      title: 'Waterproofing & Uncoupling Membranes',
      brand: 'Schluter® Systems (DITRA & KERDI)',
      desc: 'Comprehensive shower pan waterproofing kits, vapor management sheets, and uncoupling underlayment that prevents subfloor substrate cracking from transferring into tile.',
    },
    {
      title: 'Profiles, Trims & Movement Joints',
      brand: 'Schluter® JOLLY • RONDEC • QUADEC',
      desc: 'Anodized aluminum, stainless steel, and solid brass edge protection profiles that eliminate the need for traditional ceramic bullnose trims.',
    },
    {
      title: 'Sealers, Cleaners & Stone Care',
      brand: 'Miracle Sealants • MAPEI Ultracare',
      desc: 'Deep-penetrating fluoropolymer sealers for natural stone, marble, travertine, and quarry tile, alongside everyday pH-neutral tile maintenance washes.',
    },
    {
      title: 'Heated Floor Systems',
      brand: 'Schluter® DITRA-HEAT',
      desc: 'Integrated uncoupling and electric floor warming systems that bring radiant comfort to bathroom floors, kitchens, and basements.',
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
            <span className="text-[#333333] font-medium">Setting Materials</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-[850px] mb-12">
            <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
              Installation Chemistry &amp; Systems
            </span>
            <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-4">
              Setting Materials
            </h1>
            <p className="font-roboto text-[16px] text-[#555555] leading-relaxed">
              A lasting tile installation begins beneath the surface. Lexco carries a complete, warehouse-stocked inventory of professional setting materials engineered to meet ANSI specifications and TCNA installation standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-8 border border-gray-200 bg-[#fbfbfa] hover:border-[#e3903f] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-roboto uppercase tracking-wider text-[#e3903f] font-semibold block mb-2">
                    {cat.brand}
                  </span>
                  <h3 className="font-alice text-[20px] text-[#5b4b3f] mb-3">
                    {cat.title}
                  </h3>
                  <p className="font-roboto text-[14px] text-[#666666] leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-xs font-roboto text-[#77777b] flex items-center gap-1.5">
                    <Check size={14} className="text-[#e3903f]" />
                    In stock at Milwaukee warehouse
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-[#5b4b3f] text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-alice text-2xl mb-2">Contractor &amp; Trade Pick-up</h3>
              <p className="font-roboto text-sm text-gray-200 max-w-xl">
                Tile setters, contractors, and builders can pick up setting materials directly at our Milwaukee warehouse loading dock Monday through Friday from 7:30 AM to 4:00 PM.
              </p>
            </div>
            <Link
              href="/contact/"
              className="px-6 py-3 bg-[#e3903f] text-white font-roboto uppercase tracking-wider text-xs font-semibold hover:bg-white hover:text-[#5b4b3f] transition-colors shrink-0 text-center"
            >
              Order Ahead &amp; Call Dock
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
