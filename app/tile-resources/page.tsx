'use client';

import Link from 'next/link';
import { ChevronRight, ArrowRight, Compass, Wrench, BookOpen, HardHat, Store } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function TileResourcesPage() {
  const resources = [
    {
      icon: Compass,
      title: 'Design Trends',
      desc: 'Discover current directions in ceramic surfaces—from Japandi earthy palettes to dramatic fluted subway tiles and terrazzo interpretations.',
      link: '/tile-resources/design-trends/',
      linkText: 'Explore Design Trends',
    },
    {
      icon: Wrench,
      title: 'Setting Materials',
      desc: 'Lexco offers a complete selection of high-performance mortars, grouts, sealers, waterproof membranes, and edge trims for any installation.',
      link: '/tile-resources/setting-materials/',
      linkText: 'View Setting Materials',
    },
    {
      icon: BookOpen,
      title: 'Guides & Tools',
      desc: 'Step-by-step guides for homeowners beginning their design journey, plus technical DCOF slip-resistance ratings and ASTM test data for trade pros.',
      link: '/tile-resources/guides-tools/',
      linkText: 'View Guides & Tools',
    },
    {
      icon: HardHat,
      title: 'Find Residential Tile Installers',
      desc: 'Are you a homeowner designing your own project? Hire an experienced, certified tile installer in your Wisconsin community.',
      link: '/tile-resources/find-installers/',
      linkText: 'Find Installers',
    },
    {
      icon: Store,
      title: 'Find Tile Dealers',
      desc: 'Lexco Tile & Stone collections are available through our trusted retail partners and kitchen & bath showrooms throughout Wisconsin and the Midwest.',
      link: '/tile-resources/find-dealers/',
      linkText: 'Find Dealers',
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
            <span className="text-[#333333] font-medium">Tile Resources</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-[850px] mb-12">
            <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
              Expertise &amp; Support
            </span>
            <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-4">
              Tile Resources
            </h1>
            <p className="font-roboto text-[16px] text-[#555555] leading-relaxed">
              Whether you are embarking on your first kitchen backsplash or drafting specification documents for a multi-story commercial development, Lexco provides the technical tools, setting supplies, and professional connections to make your project successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {resources.map((res, idx) => {
              const Icon = res.icon;
              return (
                <div
                  key={idx}
                  className="p-8 border border-gray-200 bg-white hover:border-[#e3903f] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#f8f7f5] flex items-center justify-center mb-6 text-[#e3903f]">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-alice text-[22px] text-[#5b4b3f] mb-3">
                      {res.title}
                    </h3>
                    <p className="font-roboto text-[14px] text-[#666666] leading-relaxed mb-6">
                      {res.desc}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={res.link}
                      className="inline-flex items-center gap-2 text-[13px] font-roboto uppercase tracking-wider font-semibold text-[#e3903f] hover:text-[#5b4b3f] transition-colors"
                    >
                      <span>{res.linkText}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
