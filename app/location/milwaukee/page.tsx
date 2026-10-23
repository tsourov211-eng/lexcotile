import Link from 'next/link';
import { MapPin, Clock, Phone, Mail, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function MilwaukeeLocationPage() {
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
            <span className="text-[#333333] font-medium">Milwaukee, WI</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="intro-text">
            <h1 className="font-alice text-[38px] text-[#5b4b3f] font-normal leading-tight mb-2">
              Milwaukee Showroom &amp; Warehouse
            </h1>
            <p className="font-roboto text-[15px] text-[#333333] leading-relaxed">
              Our flagship regional showroom features the Upper Midwest’s most extensive selection of porcelain, ceramic, natural stone, and mosaic tile displays.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 border border-[#e49649] p-8 bg-white">
            <img
              src="https://www.lexcotile.com/wp-content/uploads/2019/04/visit-a-showroom_crop.jpg"
              alt="Milwaukee showroom"
              className="w-full h-[280px] object-cover"
            />
            <div className="space-y-4">
              <h3 className="font-alice text-[24px] text-[#5b4b3f]">Contact Information</h3>
              <p className="font-roboto text-[14px] text-[#333333] flex items-center gap-2">
                <MapPin size={18} className="text-[#e3903f]" />
                <span>123 Innovation Boulevard, Suite 400, New York, NY 10001</span>
              </p>
              <p className="font-roboto text-[14px] text-[#333333] flex items-center gap-2">
                <Phone size={18} className="text-[#e3903f]" />
                <span>(555) 019-2834</span>
              </p>
              <p className="font-roboto text-[14px] text-[#333333] flex items-center gap-2">
                <Mail size={18} className="text-[#e3903f]" />
                <span>showroom@webnibo.com</span>
              </p>
              <p className="font-roboto text-[14px] text-[#333333] flex items-center gap-2">
                <Clock size={18} className="text-[#e3903f]" />
                <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
              </p>

              <div className="pt-4">
                <Link
                  href="/contact/"
                  className="bg-[#e3903f] hover:bg-[#77777b] text-white px-6 py-2.5 text-[14px] font-roboto uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
                >
                  <span>Request an Appointment</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
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
