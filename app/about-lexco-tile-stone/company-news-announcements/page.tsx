'use client';

import Link from 'next/link';
import { ChevronRight, Calendar, Clock, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function CompanyNewsPage() {
  const newsItems = [
    {
      date: 'Fall 2025',
      title: 'Starting Monday, November 3rd, Lexco will be closing at 4:00pm',
      tag: 'Hours Update',
      desc: 'Please note our updated weekday operating hours for both contractor pickup and showroom design consultations. Monday through Friday: 7:30am - 4:00pm.',
    },
    {
      date: 'Spring 2025',
      title: 'New European Porcelain Slab Collections Arrive at Milwaukee Showroom',
      tag: 'Product Announcement',
      desc: 'Introducing expansive 48x48 and 24x48 rectified marble and concrete-look porcelain slabs designed for seamless shower walls and modern open-concept floor plans.',
    },
    {
      date: 'Winter 2025',
      title: 'Updated Holiday Schedule for 2025 - 2026',
      tag: 'Showroom Schedule',
      desc: 'Check our full calendar of holiday showroom hours and warehouse loading dock closures to plan your installations and order pickups accordingly.',
      link: '/locations/holiday-hours/',
      linkText: 'View holiday hours',
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
            <span className="text-[#333333] font-medium">News &amp; Announcements</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[950px] mx-auto px-4 sm:px-6">
          <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
            Company Updates
          </span>
          <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-6">
            News &amp; Announcements
          </h1>
          <p className="font-roboto text-[16px] text-[#555555] leading-relaxed mb-10">
            Stay up to date with holiday hours, product arrivals, showroom events, and schedule updates at Lexco Tile &amp; Stone.
          </p>

          <div className="space-y-8 mb-12">
            {newsItems.map((item, idx) => (
              <article
                key={idx}
                className="p-8 border border-gray-200 bg-white hover:border-[#e3903f] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 bg-[#f8f7f5] text-[#e3903f] font-roboto text-xs font-semibold uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <span className="text-xs font-roboto text-[#77777b] flex items-center gap-1">
                    <Calendar size={13} />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-alice text-[22px] text-[#5b4b3f] mb-3">{item.title}</h3>
                <p className="font-roboto text-[14px] text-[#666666] leading-relaxed mb-4">
                  {item.desc}
                </p>
                {item.link && (
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-roboto uppercase tracking-wider font-semibold text-[#e3903f] hover:text-[#5b4b3f]"
                  >
                    <span>{item.linkText}</span>
                    <ChevronRight size={13} />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
