'use client';

import Link from 'next/link';
import { ChevronRight, ArrowRight, Award, ShieldCheck, Truck, Sparkles, Users, Store } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function AboutPage() {
  const pillars = [
    {
      icon: Sparkles,
      title: 'A Huge Selection of Tile',
      desc: 'As an affiliate of the Olympia Tile network, it enables us to stock a tremendous amount of tile and stone products at incredible prices.',
      link: '/find-tile/',
      linkText: 'Explore tile',
    },
    {
      icon: ShieldCheck,
      title: 'Unsurpassed Quality & Value',
      desc: 'We offer a vast selection of tile and stone, with options for every project and budget. We work with you to strike a balance between quality and cost.',
      link: '/contact/',
      linkText: 'Ask our team',
    },
    {
      icon: Truck,
      title: 'Quick, Affordable Delivery',
      desc: 'Need tile soon? We have a huge stock of tile at our Minnesota affiliate and ship most of our other products within North America, cutting delivery from months to days.',
      link: '/find-tile/tile-category/wall-tile/',
      linkText: 'In-stock wall tiles',
    },
    {
      icon: Award,
      title: 'Cutting-Edge Style',
      desc: 'Want to know what’s new in tile around the world? Lexco helps you stay on top of tile design trends, so you can create up-to-the-minute tiled spaces.',
      link: '/tile-resources/design-trends/',
      linkText: 'View design trends',
    },
    {
      icon: Users,
      title: 'Outstanding Customer Service',
      desc: 'Choosing tile for your project is a big decision. Whether you’re a professional designer looking for advice from another pro, or a homeowner new to tile, we’re always glad to help.',
      link: '/contact/',
      linkText: 'Contact us',
    },
    {
      icon: Store,
      title: 'Visit Our Showroom',
      desc: 'Explore our wide selection of tile in person at our Milwaukee showroom. Talk to a design consultant about your project and view full-scale installations.',
      link: '/location/milwaukee/',
      linkText: 'Showroom Location',
    },
  ];

  const subPages = [
    { title: 'History', href: '/about-lexco-tile-stone/history/', desc: 'Over 50 years of Midwestern tile distribution heritage.' },
    { title: 'Our Affiliates', href: '/about-lexco-tile-stone/our-affiliates/', desc: 'Part of the premier Olympia Tile USA international network.' },
    { title: 'Our Manufacturers', href: '/about-lexco-tile-stone/our-manufacturers/', desc: 'Sourcing the finest Italian, Spanish, and domestic ceramics.' },
    { title: 'Professional Associations', href: '/about-lexco-tile-stone/professional-associations/', desc: 'Proud members of ASID, AIA, CTDA, and NTCA.' },
    { title: 'News & Announcements', href: '/about-lexco-tile-stone/company-news-announcements/', desc: 'Latest showroom hours, seasonal updates, and tile events.' },
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
            <span className="text-[#333333] font-medium">About</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
          <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
            Lexco Tile &amp; Stone
          </span>
          <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-6">
            About Us
          </h1>
          <p className="font-roboto text-[16px] sm:text-[18px] text-[#333333] leading-relaxed max-w-[850px] mx-auto">
            Lexco Tile &amp; Stone is a leading distributor of tile and natural stone in Wisconsin, and an affiliate of Olympia Tile USA, one of the largest tile distributors in North America. For over 50 years, we’ve been offering our clients exceptional tile at a great value.
          </p>
        </div>
      </section>

      {/* Subpage navigation pills */}
      <section className="py-8 bg-[#f8f7f5] border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {subPages.map((sp) => (
              <Link
                key={sp.href}
                href={sp.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#dcdcde] text-[13px] font-roboto font-medium text-[#5b4b3f] hover:border-[#e3903f] hover:text-[#e3903f] shadow-sm transition-all"
              >
                <span>{sp.title}</span>
                <ChevronRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-alice text-2xl sm:text-3xl text-[#5b4b3f] mb-3">
              When you work with Lexco, you can count on:
            </h2>
            <div className="w-16 h-0.5 bg-[#e3903f] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 border border-gray-200 bg-white hover:border-[#e3903f] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#f8f7f5] flex items-center justify-center mb-6 text-[#e3903f]">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-alice text-[20px] text-[#5b4b3f] mb-3">
                      {item.title}
                    </h3>
                    <p className="font-roboto text-[14px] text-[#666666] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 text-[13px] font-roboto uppercase tracking-wider font-semibold text-[#e3903f] hover:text-[#5b4b3f] transition-colors"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dealer & Homeowner Banner */}
      <section className="py-14 bg-[#5b4b3f] text-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-alice text-2xl sm:text-3xl mb-4">
            Are you a homeowner looking to buy tile?
          </h2>
          <p className="font-roboto text-[15px] text-gray-200 max-w-[650px] mx-auto mb-8">
            Lexco Tile &amp; Stone products are available for purchase through our authorized retail partners and tile dealers throughout Wisconsin and the Midwest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tile-resources/find-dealers/"
              className="px-8 py-3 bg-[#e3903f] text-white font-roboto uppercase tracking-wider text-[14px] font-medium hover:bg-white hover:text-[#5b4b3f] transition-colors"
            >
              Find a Dealer
            </Link>
            <Link
              href="/showroom/"
              className="px-8 py-3 border border-white text-white font-roboto uppercase tracking-wider text-[14px] font-medium hover:bg-white hover:text-[#5b4b3f] transition-colors"
            >
              Visit Showroom
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
