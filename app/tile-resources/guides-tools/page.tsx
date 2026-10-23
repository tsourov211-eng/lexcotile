'use client';

import Link from 'next/link';
import { ChevronRight, HelpCircle, FileText, CheckCircle2, Ruler, Shield, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function GuidesToolsPage() {
  const guides = [
    {
      icon: Ruler,
      title: 'How to Measure & Calculate Tile Overage',
      desc: 'Measure length x width in feet to find net square footage. Always add 10% to 15% for pattern cuts, waste, and future attic stock repairs.',
    },
    {
      icon: Shield,
      title: 'Understanding DCOF & Slip Resistance',
      desc: 'For wet interior floors (like walk-in showers and commercial lobbies), ANSI A326.3 recommends a Dynamic Coefficient of Friction (DCOF) rating of 0.42 or greater.',
    },
    {
      icon: HelpCircle,
      title: 'Ceramic vs. Porcelain: What’s the Difference?',
      desc: 'Porcelain is fired at higher temperatures from denser clays, giving it an ultra-low water absorption rate (<0.5%), making it ideal for freeze-thaw exteriors and heavy traffic floors.',
    },
    {
      icon: FileText,
      title: 'Selecting Grout: Color & Joint Width',
      desc: 'Blending grout matches tile color for a continuous look; contrasting grout highlights tile geometry and grid shapes. Rectified tiles allow razor-thin 1/16" joints.',
    },
    {
      icon: Sparkles,
      title: 'Routine Care & Sealers for Natural Stone',
      desc: 'Porcelain requires only mild neutral pH cleaner. Natural stone (marble, limestone, slate) must be sealed upon installation and resealed every 2-3 years.',
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
            <span className="text-[#333333] font-medium">Guides &amp; Tools</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[950px] mx-auto px-4 sm:px-6">
          <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
            Technical Knowledge &amp; Advice
          </span>
          <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-4">
            Guides &amp; Tools
          </h1>
          <p className="font-roboto text-[16px] text-[#555555] leading-relaxed mb-10">
            Tile is a permanent investment in your home or commercial building. Use these practical tools and industry specifications to make informed choices from concept to final grout clean-down.
          </p>

          <div className="space-y-6 mb-12">
            {guides.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 border border-gray-200 bg-[#fbfbfa] hover:border-[#e3903f] hover:bg-white transition-all flex flex-col sm:flex-row gap-5 items-start"
                >
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-none flex items-center justify-center text-[#e3903f] shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-alice text-[20px] text-[#5b4b3f] mb-2">{item.title}</h3>
                    <p className="font-roboto text-[14px] text-[#666666] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-8 bg-[#f8f7f5] border border-gray-200 text-center">
            <h3 className="font-alice text-2xl text-[#5b4b3f] mb-2">
              Have a Specific Technical Question?
            </h3>
            <p className="font-roboto text-sm text-[#666666] max-w-md mx-auto mb-6">
              Our tile design consultants can calculate exact quantities, check manufacturer submittal sheets, and recommend appropriate mortars.
            </p>
            <Link
              href="/contact/"
              className="inline-block px-8 py-3 bg-[#e3903f] text-white font-roboto uppercase tracking-wider text-xs font-semibold hover:bg-[#5b4b3f] transition-colors"
            >
              Ask Our Specialists
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
