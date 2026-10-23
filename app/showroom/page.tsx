import Link from 'next/link';
import { MapPin, Clock, Phone, Mail, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function ShowroomPage() {
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
            <span className="text-[#333333] font-medium">Showrooms</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12">
        <div className="intro-text text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-alice text-[38px] text-[#5b4b3f] mb-2 font-normal">
            Visit Our Showroom
          </h1>
          <h2 className="font-alice text-[22px] text-[#666666] mb-4 font-normal">
            Experience Tile &amp; Stone In Person
          </h2>
          <p className="font-roboto text-[15px] text-[#333333] leading-relaxed">
            Discover full-size architectural installations, consult with our expert design team, and explore premier collections from Olympia Tile, Sonoma Tilemakers, and around the world.
          </p>
        </div>

        {/* Showroom Location Card */}
        <div className="max-w-4xl mx-auto border border-[#e49649] bg-white p-4 sm:p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center">
            <div>
              <img
                src="https://www.lexcotile.com/wp-content/uploads/2019/04/visit-a-showroom_crop.jpg"
                alt="Milwaukee Tile Showroom"
                className="w-full h-[180px] sm:h-[240px] md:h-[280px] object-cover"
              />
            </div>
            <div className="space-y-2.5 sm:space-y-4">
              <h3 className="font-alice text-[20px] sm:text-[24px] md:text-[26px] text-[#5b4b3f] font-normal">
                webnibo Design Showroom
              </h3>
              <p className="font-roboto text-[12px] sm:text-[14px] text-[#333333] flex items-start gap-2">
                <MapPin size={16} className="text-[#e3903f] shrink-0 mt-0.5" />
                <span>123 Innovation Boulevard, Suite 400, New York, NY 10001</span>
              </p>
              <p className="font-roboto text-[12px] sm:text-[14px] text-[#333333] flex items-start gap-2">
                <Clock size={16} className="text-[#e3903f] shrink-0 mt-0.5" />
                <span>Monday – Friday: 9:00am – 5:00pm</span>
              </p>
              <p className="font-roboto text-[12px] sm:text-[14px] text-[#333333] flex items-center gap-2">
                <Phone size={16} className="text-[#e3903f] shrink-0" />
                <span>(555) 019-2834</span>
              </p>
              <p className="font-roboto text-[12px] sm:text-[14px] text-[#333333] flex items-center gap-2">
                <Mail size={16} className="text-[#e3903f] shrink-0" />
                <span>info@webnibo.com</span>
              </p>

              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 bg-[#e3903f] hover:bg-[#77777b] text-white px-4 sm:px-6 py-2 sm:py-2.5 text-[12px] sm:text-[14px] font-roboto font-medium uppercase tracking-wider transition-colors"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={14} />
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
