'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function SiteMapPage() {
  const sections = [
    {
      title: 'Find Tile (Products & Collections)',
      links: [
        { label: 'All Tile Catalog', href: '/find-tile/' },
        { label: 'Wall Tile Archives', href: '/find-tile/tile-category/wall-tile/' },
        { label: 'Floor Tile', href: '/find-tile/tile-category/floor-tile/' },
        { label: 'Mosaic Tile', href: '/find-tile/tile-category/mosaic-tile/' },
        { label: 'Pavers & Quarry Tile', href: '/find-tile/tile-category/pavers-quarry-tile/' },
        { label: 'Natural Stone', href: '/find-tile/tile-category/natural-stone-tile/' },
        { label: 'Clearance Outlet Tile', href: '/find-tile/tile-category/clearance-outlet-tile/' },
        { label: 'New Arrivals', href: '/new-arrivals/' },
      ],
    },
    {
      title: 'Search by Style & Shape',
      links: [
        { label: 'Concrete Look Tiles', href: '/find-tile/?tile_style=Concrete' },
        { label: 'Marble Look Tiles', href: '/find-tile/?tile_style=Marble' },
        { label: 'Subway Tiles', href: '/find-tile/?tile_style=Subway' },
        { label: 'Wood Look Tiles', href: '/find-tile/?tile_style=Wood' },
        { label: 'Chevron Shape', href: '/find-tile/?tile_shape=Chevron' },
        { label: 'Herringbone Shape', href: '/find-tile/?tile_shape=Herringbone' },
        { label: 'Hexagon Shape', href: '/find-tile/?tile_shape=Hexagon' },
      ],
    },
    {
      title: 'Showroom & Locations',
      links: [
        { label: 'Showroom Overview', href: '/showroom/' },
        { label: 'Milwaukee, WI Showroom', href: '/location/milwaukee/' },
        { label: 'Holiday & Seasonal Hours', href: '/locations/holiday-hours/' },
      ],
    },
    {
      title: 'Tile Resources',
      links: [
        { label: 'Tile Resources Hub', href: '/tile-resources/' },
        { label: 'Design Trends', href: '/tile-resources/design-trends/' },
        { label: 'Setting Materials', href: '/tile-resources/setting-materials/' },
        { label: 'Guides & Tools', href: '/tile-resources/guides-tools/' },
        { label: 'Find Tile Installers', href: '/tile-resources/find-installers/' },
        { label: 'Find Retail Dealers', href: '/tile-resources/find-dealers/' },
      ],
    },
    {
      title: 'About Lexco',
      links: [
        { label: 'About Us Overview', href: '/about-lexco-tile-stone/' },
        { label: 'Company History', href: '/about-lexco-tile-stone/history/' },
        { label: 'Our Affiliates (Olympia Tile)', href: '/about-lexco-tile-stone/our-affiliates/' },
        { label: 'Our Manufacturers', href: '/about-lexco-tile-stone/our-manufacturers/' },
        { label: 'Professional Associations', href: '/about-lexco-tile-stone/professional-associations/' },
        { label: 'News & Announcements', href: '/about-lexco-tile-stone/company-news-announcements/' },
        { label: 'Careers', href: '/careers/' },
      ],
    },
    {
      title: 'Customer Services',
      links: [
        { label: 'Contact Us', href: '/contact/' },
        { label: 'My Projects Specifier', href: '/my-projects/' },
        { label: 'Privacy Policy', href: '/home/privacy-policy/' },
      ],
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
            <span className="text-[#333333] font-medium">Site Map</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
            Navigation Index
          </span>
          <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-8">
            Site Map
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((sec, idx) => (
              <div key={idx} className="p-6 border border-gray-200 bg-[#fbfbfa]">
                <h3 className="font-alice text-[19px] text-[#5b4b3f] mb-4 pb-2 border-b border-gray-200">
                  {sec.title}
                </h3>
                <ul className="space-y-2.5">
                  {sec.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-roboto text-[#555555] hover:text-[#e3903f] transition-colors flex items-center gap-1.5"
                      >
                        <ChevronRight size={13} className="text-[#e3903f]" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
