'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function PrivacyPolicyPage() {
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
            <span className="text-[#333333] font-medium">Privacy Policy</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6">
          <h1 className="font-alice text-3xl sm:text-4xl text-[#5b4b3f] mb-6">
            Privacy Policy
          </h1>
          <div className="font-roboto text-sm text-[#555555] space-y-5 leading-relaxed">
            <p>
              Lexco Tile &amp; Stone (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us through our website.
            </p>
            <h2 className="font-alice text-xl text-[#5b4b3f] pt-4">Information We Collect</h2>
            <p>
              We collect information you provide directly to us when filling out our contact inquiry form, requesting tile samples, saving items to your project boards, or subscribing to our monthly design newsletter.
            </p>
            <h2 className="font-alice text-xl text-[#5b4b3f] pt-4">How We Use Your Information</h2>
            <p>
              Information collected is used solely to respond to inquiries, process sample shipments, connect you with local retail tile dealers or installers, and provide company updates. We do not sell or rent personal information to third parties.
            </p>
            <h2 className="font-alice text-xl text-[#5b4b3f] pt-4">Contact Information</h2>
            <p>
              If you have any questions regarding our privacy practices, please contact us at webnibo, 123 Innovation Boulevard, Suite 400, New York, NY 10001, by phone at (555) 019-2834, or by email at privacy@webnibo.com.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
