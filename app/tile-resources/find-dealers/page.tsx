'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Store, MapPin, Phone, Search, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function FindDealersPage() {
  const [searchCity, setSearchCity] = useState('');

  const dealers = [
    {
      name: 'Brookfield Design Tile & Bath',
      address: '18900 W Bluemound Rd, Brookfield, WI 53045',
      phone: '(555) 012-1200',
      area: 'Milwaukee / Waukesha',
      type: 'Kitchen & Bath Design Showroom',
    },
    {
      name: 'North Shore Flooring & Ceramic Gallery',
      address: '420 E Silver Spring Dr, Whitefish Bay, WI 53217',
      phone: '(555) 012-3320',
      area: 'Milwaukee North Shore',
      type: 'Full-Service Floor Covering Dealer',
    },
    {
      name: 'Madison Tile & Stone Studio',
      address: '6102 Odana Rd, Madison, WI 53719',
      phone: '(555) 012-8833',
      area: 'Madison & Dane County',
      type: 'Architectural & Residential Tile Studio',
    },
    {
      name: 'Lake Geneva Interior Surfaces',
      address: '702 S Wells St, Lake Geneva, WI 53147',
      phone: '(555) 012-6700',
      area: 'Walworth County / Southeast WI',
      type: 'Luxury Home Design Center',
    },
    {
      name: 'Fox Cities Ceramic & Flooring',
      address: '2800 W College Ave, Appleton, WI 54914',
      phone: '(555) 012-1144',
      area: 'Appleton / Fox Cities',
      type: 'Tile & Natural Stone Showroom',
    },
    {
      name: 'Green Bay Home Interiors',
      address: '2150 S Ashland Ave, Green Bay, WI 54304',
      phone: '(555) 012-5500',
      area: 'Green Bay / Brown County',
      type: 'Retail Design Partner',
    },
  ];

  const filtered = dealers.filter(
    (d) =>
      d.name.toLowerCase().includes(searchCity.toLowerCase()) ||
      d.address.toLowerCase().includes(searchCity.toLowerCase()) ||
      d.area.toLowerCase().includes(searchCity.toLowerCase())
  );

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
            <span className="text-[#333333] font-medium">Find Dealers</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-[850px] mb-10">
            <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
              Retail Partners
            </span>
            <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-4">
              Find Tile Dealers in Wisconsin
            </h1>
            <p className="font-roboto text-[16px] text-[#555555] leading-relaxed">
              Are you a homeowner looking to purchase Lexco Tile &amp; Stone products? Our tile, natural stone, and setting supplies are distributed through select authorized kitchen &amp; bath showrooms and flooring retailers across Wisconsin.
            </p>
          </div>

          {/* Search Box */}
          <div className="mb-10 max-w-[500px]">
            <div className="relative">
              <Search className="absolute left-3.5 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by city, county, or dealer name..."
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 text-sm font-roboto bg-white focus:outline-none focus:border-[#e3903f]"
              />
            </div>
          </div>

          {/* Dealer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filtered.map((dealer, idx) => (
              <div
                key={idx}
                className="p-8 border border-gray-200 bg-white hover:border-[#e3903f] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-roboto uppercase tracking-wider text-[#e3903f] font-bold block mb-1">
                    {dealer.type}
                  </span>
                  <h3 className="font-alice text-[21px] text-[#5b4b3f] mb-3">
                    {dealer.name}
                  </h3>
                  <p className="flex items-start gap-2 text-xs font-roboto text-gray-600 mb-3">
                    <MapPin size={15} className="text-[#e3903f] shrink-0 mt-0.5" />
                    <span>{dealer.address}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={`tel:${dealer.phone.replace(/[^0-9]/g, '')}`}
                    className="font-roboto font-semibold text-sm text-[#333333] hover:text-[#e3903f] flex items-center gap-1.5"
                  >
                    <Phone size={14} className="text-[#e3903f]" />
                    {dealer.phone}
                  </a>
                  <span className="text-xs font-roboto text-gray-400">{dealer.area}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Wholesale Notice */}
          <div className="p-8 bg-[#5b4b3f] text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-alice text-2xl mb-2">Want to Become a Lexco Tile Dealer?</h3>
              <p className="font-roboto text-sm text-gray-200 max-w-xl">
                We partner with premier kitchen &amp; bath showrooms, flooring dealers, and builder supply companies across the Midwest with showroom display support and wholesale terms.
              </p>
            </div>
            <Link
              href="/contact/"
              className="px-6 py-3 bg-[#e3903f] text-white font-roboto uppercase tracking-wider text-xs font-semibold hover:bg-white hover:text-[#5b4b3f] transition-colors shrink-0 text-center"
            >
              Dealer Inquiry Form
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
