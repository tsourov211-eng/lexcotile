'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: 'Product Question',
    role: 'Homeowner',
    helpWith: 'Pricing',
    rep: 'Lexco Showroom Design Specialist',
    message: '',
    newsletter: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <span className="text-[#333333] font-medium">Contact</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-[850px] mb-12">
            <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
              Get In Touch
            </span>
            <h1 className="font-alice text-3xl sm:text-4xl md:text-5xl text-[#5b4b3f] mb-4">
              Contact webnibo
            </h1>
            <p className="font-roboto text-[16px] text-[#555555] leading-relaxed">
              Have questions about tile specs, pricing, sample orders, or showroom appointments? Send us a message below or call our showroom directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-[#fbfbfa] p-8 sm:p-10 border border-gray-200">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#e3903f]/10 text-[#e3903f] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-alice text-2xl text-[#5b4b3f]">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="font-roboto text-sm text-[#666666] max-w-md mx-auto">
                    We have received your message. A Lexco design specialist or commercial representative will contact you within 1 business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#e3903f] text-white font-roboto uppercase tracking-wider text-xs font-semibold hover:bg-[#5b4b3f] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-roboto uppercase tracking-wider text-[#5b4b3f] font-semibold mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full border border-gray-300 px-3.5 py-2.5 text-sm font-roboto bg-white focus:outline-none focus:border-[#e3903f]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-roboto uppercase tracking-wider text-[#5b4b3f] font-semibold mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full border border-gray-300 px-3.5 py-2.5 text-sm font-roboto bg-white focus:outline-none focus:border-[#e3903f]"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-roboto uppercase tracking-wider text-[#5b4b3f] font-semibold mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-gray-300 px-3.5 py-2.5 text-sm font-roboto bg-white focus:outline-none focus:border-[#e3903f]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-roboto uppercase tracking-wider text-[#5b4b3f] font-semibold mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-300 px-3.5 py-2.5 text-sm font-roboto bg-white focus:outline-none focus:border-[#e3903f]"
                      />
                    </div>
                  </div>

                  {/* Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-roboto uppercase tracking-wider text-[#5b4b3f] font-semibold mb-1.5">
                        I am a: *
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full border border-gray-300 px-3.5 py-2.5 text-sm font-roboto bg-white focus:outline-none focus:border-[#e3903f]"
                      >
                        <option value="Homeowner">Homeowner</option>
                        <option value="Contractor">Contractor / Tile Setter</option>
                        <option value="Design Pro">Interior Designer / Architect</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-roboto uppercase tracking-wider text-[#5b4b3f] font-semibold mb-1.5">
                        I need help with: *
                      </label>
                      <select
                        value={formData.helpWith}
                        onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
                        className="w-full border border-gray-300 px-3.5 py-2.5 text-sm font-roboto bg-white focus:outline-none focus:border-[#e3903f]"
                      >
                        <option value="Pricing">Tile Pricing &amp; Stock Availability</option>
                        <option value="Samples">Order Tile Samples</option>
                        <option value="Tech Info">Technical Specs / DCOF / CAD</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-roboto uppercase tracking-wider text-[#5b4b3f] font-semibold mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your room, square footage, tile series of interest, or timeline..."
                      className="w-full border border-gray-300 px-3.5 py-2.5 text-sm font-roboto bg-white focus:outline-none focus:border-[#e3903f]"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                      className="w-4 h-4 text-[#e3903f] border-gray-300 rounded focus:ring-[#e3903f]"
                    />
                    <label htmlFor="newsletter" className="text-xs font-roboto text-[#666666]">
                      Yes, subscribe me to the Lexco Tile monthly design newsletter.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#e3903f] text-white font-roboto uppercase tracking-widest text-sm font-semibold hover:bg-[#5b4b3f] transition-colors cursor-pointer"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Showroom & Location Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 border border-gray-200 bg-white">
                <span className="text-[11px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-bold block mb-1">
                  Visit Us
                </span>
                <h3 className="font-alice text-2xl text-[#5b4b3f] mb-4">
                  Milwaukee Showroom &amp; Warehouse
                </h3>

                <ul className="space-y-4 text-sm font-roboto text-[#666666]">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#e3903f] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#333333]">webnibo Studio &amp; Showroom</strong>
                      123 Innovation Boulevard, Suite 400<br />
                      New York, NY 10001
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-[#e3903f] shrink-0" />
                    <div>
                      <a href="tel:5550192834" className="hover:text-[#e3903f] text-[#333333] font-medium">
                        (555) 019-2834
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-[#e3903f] shrink-0" />
                    <div>
                      <a href="mailto:contact@webnibo.com" className="hover:text-[#e3903f] text-[#333333] font-medium">
                        contact@webnibo.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-[#e3903f] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#333333]">Showroom Hours:</strong>
                      Monday - Friday: 9:00 AM – 5:00 PM<br />
                      Saturday &amp; Sunday: Closed
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-2.5">
                  <Link
                    href="/showroom/"
                    className="inline-flex items-center justify-center py-2.5 border border-[#5b4b3f] text-[#5b4b3f] font-roboto uppercase tracking-wider text-xs font-semibold hover:bg-[#5b4b3f] hover:text-white transition-colors"
                  >
                    Showroom Details &amp; Directions
                  </Link>
                  <Link
                    href="/tile-resources/find-dealers/"
                    className="inline-flex items-center justify-center py-2.5 bg-[#f8f7f5] text-[#5b4b3f] font-roboto uppercase tracking-wider text-xs font-semibold hover:bg-[#e3903f] hover:text-white transition-colors"
                  >
                    Find Retail Tile Dealers
                  </Link>
                </div>
              </div>

              {/* Trade Professional Box */}
              <div className="p-6 bg-[#f8f7f5] border-l-4 border-[#e3903f]">
                <h4 className="font-alice text-[18px] text-[#5b4b3f] mb-1">
                  Are You An Architect or Commercial Specifier?
                </h4>
                <p className="font-roboto text-[13px] text-[#666666] leading-relaxed mb-3">
                  Connect directly with our Architectural Representative team for binder samples, high-volume project submittals, and CEU sessions.
                </p>
                <a
                  href="mailto:commercial@webnibo.com?subject=Commercial%20Specification%20Inquiry"
                  className="text-xs font-roboto uppercase tracking-wider font-semibold text-[#e3903f] hover:underline"
                >
                  Email Architectural Rep &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
