import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function HolidayHoursPage() {
  const holidays = [
    { name: "New Year's Day", date: 'January 1', status: 'Closed' },
    { name: 'Memorial Day', date: 'Last Monday in May', status: 'Closed' },
    { name: 'Independence Day (4th of July)', date: 'July 4', status: 'Closed' },
    { name: 'Labor Day', date: 'First Monday in September', status: 'Closed' },
    { name: 'Thanksgiving Day', date: 'Fourth Thursday in November', status: 'Closed' },
    { name: 'Day After Thanksgiving', date: 'Friday following Thanksgiving', status: 'Closed' },
    { name: 'Christmas Eve', date: 'December 24', status: 'Closed at 12:00 PM' },
    { name: 'Christmas Day', date: 'December 25', status: 'Closed' },
    { name: "New Year's Eve", date: 'December 31', status: 'Closed at 12:00 PM' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div id="breadcrumbs" className="pt-[105px] lg:pt-[125px] pb-3 border-b border-[#dcdcde] bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center space-x-2 text-[13px] font-roboto text-[#77777b]">
            <Link href="/" className="hover:text-[#e3903f] transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/showroom/" className="hover:text-[#e3903f] transition-colors">
              Showrooms
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#333333] font-medium">Holiday Hours</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="intro-text mb-8 text-center">
            <h1 className="font-alice text-[38px] text-[#5b4b3f] font-normal leading-tight mb-2">
              Holiday Hours &amp; Schedule
            </h1>
            <p className="font-roboto text-[15px] text-[#333333] leading-relaxed">
              Please note our upcoming holiday showroom schedules and warehouse shipping closures.
            </p>
          </div>

          <div className="border border-[#e49649] bg-white p-6 md:p-8 shadow-sm">
            <h3 className="font-alice text-[22px] text-[#5b4b3f] mb-4 pb-2 border-b border-[#dcdcde] flex items-center gap-2">
              <Calendar size={20} className="text-[#e3903f]" />
              <span>Observed Holiday Closures</span>
            </h3>

            <div className="divide-y divide-[#dcdcde]">
              {holidays.map((h) => (
                <div key={h.name} className="py-3.5 flex items-center justify-between font-roboto text-[14px]">
                  <div>
                    <span className="font-medium text-[#111821] block">{h.name}</span>
                    <span className="text-gray-500 text-[13px]">{h.date}</span>
                  </div>
                  <span className="bg-red-50 text-red-700 px-3 py-1 text-[12px] font-medium uppercase tracking-wider rounded">
                    {h.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
      <AnnouncementBar />
    </main>
  );
}
