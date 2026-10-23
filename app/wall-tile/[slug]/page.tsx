'use client';

import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { usePathname } from 'next/navigation';
import {
  ChevronRight,
  ArrowLeft,
  FileText,
  Mail,
  Box,
  Printer,
  Bookmark,
  Share2,
  Check,
  MapPin,
  Phone,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ProductCard from '@/components/ProductCard';
import { getProductBySlug, wallTileProducts } from '@/lib/wall-tile-data';

const usageIcons: Record<string, string> = {
  Residential: 'Residential',
  Commercial: 'Commercial',
  'Exterior Walls': 'Ext Walls',
  'Interior Walls': 'Int Walls',
  'Wet Areas': 'Wet Areas',
};

const showroomLocations = [
  {
    name: 'webnibo Flagship Showroom',
    address: '123 Innovation Boulevard, Suite 400, New York, NY 10001',
    phone: '(555) 019-2834',
  },
  {
    name: 'webnibo West Coast Gallery',
    address: '456 Design District Ave, Suite 210, Los Angeles, CA 90028',
    phone: '(555) 018-9941',
  },
  {
    name: 'webnibo Metro Studio',
    address: '789 Architectural Way, Chicago, IL 60611',
    phone: '(555) 017-3320',
  },
];

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const pathname = usePathname();
  const isFloorTile = pathname.startsWith('/floor-tile/');
  const basePath = isFloorTile ? '/tile-category/floor-tile' : '/wall-tile';
  const categoryLabel = isFloorTile ? 'Floor Tile' : 'Wall Tile';
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const [activeTab, setActiveTab] = useState<'sizes' | 'usage' | 'info'>('sizes');
  const [activeColor, setActiveColor] = useState(0);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  const relatedProducts = wallTileProducts
    .filter((p) => p.slug !== slug && (p.style === product.style || p.shape === product.shape))
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AnnouncementBar />

      {/* Breadcrumb */}
      <div className="mt-[96px] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-[11px] font-lato text-gray-400">
            <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <ChevronRight size={12} className="text-gray-300" />
            <Link href="/#find-tile" className="hover:text-gray-700 transition-colors">Find Tile</Link>
            <ChevronRight size={12} className="text-gray-300" />
            <Link href={basePath} className="hover:text-gray-700 transition-colors">{categoryLabel}</Link>
            <ChevronRight size={12} className="text-gray-300" />
            <span className="text-gray-700">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product detail */}
      <section className="px-4 pt-8 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            href={basePath}
            className="inline-flex items-center gap-2 text-[11px] font-montserrat font-semibold tracking-widest text-gray-500 hover:text-[#d4874a] transition-colors uppercase mb-6"
          >
            <ArrowLeft size={14} />
            Back to {categoryLabel}
          </Link>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product images */}
            <div>
              <div className="relative overflow-hidden aspect-square bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-[#d4874a] text-white text-[10px] font-montserrat font-semibold tracking-widest px-3 py-1.5 uppercase">
                    New
                  </span>
                )}
              </div>
              <div className="mt-3 overflow-hidden aspect-[16/10] bg-gray-100">
                <img
                  src={product.roomImage}
                  alt={`${product.name} room scene`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              <h1 className="font-montserrat font-semibold text-2xl md:text-3xl text-gray-800 tracking-tight">
                {product.name}
              </h1>
              <p className="mt-3 text-[14px] font-lato text-gray-500 leading-relaxed">
                {product.longDescription}
              </p>

              {/* Color swatches */}
              <div className="mt-6">
                <h3 className="font-montserrat font-semibold text-[11px] tracking-widest text-gray-700 uppercase mb-3">
                  Colors
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.colorSwatches.map((color: { name: string; swatch: string }, i: number) => (
                    <button
                      key={color.name}
                      onClick={() => setActiveColor(i)}
                      className={`flex flex-col items-center gap-1.5 group`}
                    >
                      <span
                        className={`w-12 h-12 rounded-full border-2 transition-all ${
                          activeColor === i
                            ? 'border-[#d4874a] ring-2 ring-[#d4874a]/20 scale-105'
                            : 'border-gray-200 group-hover:border-gray-300'
                        }`}
                        style={{ backgroundColor: color.swatch }}
                      />
                      <span
                        className={`text-[10px] font-lato tracking-wide transition-colors ${
                          activeColor === i ? 'text-gray-800 font-semibold' : 'text-gray-400'
                        }`}
                      >
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick specs */}
              <div className="mt-6 grid grid-cols-2 gap-4 py-5 border-y border-gray-100">
                <div>
                  <span className="text-[10px] font-montserrat tracking-widest text-gray-400 uppercase block">Style</span>
                  <span className="text-[12px] font-lato text-gray-700 mt-1 block">{product.style}</span>
                </div>
                <div>
                  <span className="text-[10px] font-montserrat tracking-widest text-gray-400 uppercase block">Shape</span>
                  <span className="text-[12px] font-lato text-gray-700 mt-1 block">{product.shape}</span>
                </div>
                <div>
                  <span className="text-[10px] font-montserrat tracking-widest text-gray-400 uppercase block">Finish</span>
                  <span className="text-[12px] font-lato text-gray-700 mt-1 block">{product.finish}</span>
                </div>
                <div>
                  <span className="text-[10px] font-montserrat tracking-widest text-gray-400 uppercase block">Availability</span>
                  <span className="text-[12px] font-lato text-gray-700 mt-1 block">{product.availability.join(', ')}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex flex-wrap gap-2">
                <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-800 text-white text-[11px] font-montserrat font-semibold tracking-widest uppercase hover:bg-gray-700 transition-colors">
                  <FileText size={13} />
                  Visual Guide
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-[11px] font-montserrat font-semibold tracking-widest text-gray-700 uppercase hover:border-gray-400 transition-colors">
                  <Mail size={13} />
                  Request Info
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-[11px] font-montserrat font-semibold tracking-widest text-gray-700 uppercase hover:border-gray-400 transition-colors">
                  <Box size={13} />
                  Sample Request
                </button>
                <button
                  onClick={() => setSaved(!saved)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-[11px] font-montserrat font-semibold tracking-widest text-gray-700 uppercase hover:border-gray-400 transition-colors"
                >
                  {saved ? <Check size={13} className="text-[#d4874a]" /> : <Bookmark size={13} />}
                  {saved ? 'Saved' : 'Save'}
                </button>
                <button
                  onClick={() => setShared(!shared)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-[11px] font-montserrat font-semibold tracking-widest text-gray-700 uppercase hover:border-gray-400 transition-colors"
                >
                  {shared ? <Check size={13} className="text-[#d4874a]" /> : <Share2 size={13} />}
                  {shared ? 'Shared' : 'Share'}
                </button>
                <button
                  onClick={() => typeof window !== 'undefined' && window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-[11px] font-montserrat font-semibold tracking-widest text-gray-700 uppercase hover:border-gray-400 transition-colors"
                >
                  <Printer size={13} />
                  Print
                </button>
              </div>
            </div>
          </div>

          {/* Tabs section */}
          <div className="mt-12">
            <div className="flex gap-1 border-b border-gray-200">
              {[
                { key: 'sizes' as const, label: 'Sizes, Finishes, & Trims' },
                { key: 'usage' as const, label: 'Usage' },
                { key: 'info' as const, label: 'Product Information' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-3 text-[12px] font-montserrat font-semibold tracking-widest uppercase transition-colors border-b-2 -mb-px ${
                    activeTab === tab.key
                      ? 'text-[#d4874a] border-[#d4874a]'
                      : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="py-8">
              {activeTab === 'sizes' && (
                <div>
                  <h3 className="font-montserrat font-semibold text-[14px] tracking-wide text-gray-800 mb-5">
                    Sizes &amp; Finishes
                  </h3>
                  <div className="space-y-6">
                    {product.sizes.map((s: { finish: string; size: string; type: string }, i: number) => (
                      <div key={i} className="border-l-2 border-[#d4874a]/30 pl-4">
                        <h4 className="font-montserrat font-semibold text-[12px] tracking-widest text-gray-700 uppercase">
                          {s.finish}
                        </h4>
                        <p className="mt-1 text-[16px] font-lato text-gray-600">
                          {s.size}
                        </p>
                        <span className="text-[10px] font-lato text-gray-400 tracking-wide uppercase">
                          {s.type}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 border border-gray-100">
                    <h4 className="font-montserrat font-semibold text-[11px] tracking-widest text-gray-600 uppercase mb-1">
                      Coordinating Trims
                    </h4>
                    <p className="text-[12px] font-lato text-gray-400">
                      Contact your sales rep for coordinating trim options.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'usage' && (
                <div>
                  <h3 className="font-montserrat font-semibold text-[14px] tracking-wide text-gray-800 mb-5">
                    Recommended Usage
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {(['Residential', 'Commercial', 'Exterior Walls', 'Interior Walls', 'Wet Areas', 'Exterior Floors', 'Interior Floors', 'Counter Tops'] as const).map((use) => {
                      const recommended = product.usage.includes(use);
                      return (
                        <div
                          key={use}
                          className={`flex items-center gap-2 px-4 py-3 border transition-colors ${
                            recommended
                              ? 'border-[#d4874a]/30 bg-[#d4874a]/5'
                              : 'border-gray-100 bg-gray-50'
                          }`}
                        >
                          {recommended ? (
                            <Check size={14} className="text-[#d4874a] flex-shrink-0" />
                          ) : (
                            <span className="w-3.5 h-3.5 flex-shrink-0" />
                          )}
                          <span
                            className={`text-[12px] font-lato ${
                              recommended ? 'text-gray-700' : 'text-gray-300'
                            }`}
                          >
                            {use}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'info' && (
                <div>
                  <p className="text-[13px] font-lato text-gray-500 leading-relaxed mb-6">
                    This tile series belongs to the following tile categories and feature sets.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <InfoGroup label="Categories" items={product.category} />
                    <InfoGroup label="Style" items={[product.style]} />
                    <InfoGroup label="Finish" items={[product.finish]} />
                    <InfoGroup label="Color" items={product.colors} />
                    <InfoGroup label="Shape" items={[product.shape]} />
                    <InfoGroup label="Usage" items={product.usage} />
                    <InfoGroup label="Availability" items={product.availability} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Showroom contact */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-semibold text-[16px] tracking-[0.15em] text-gray-700 uppercase text-center mb-8">
            Showroom Contact Info
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {showroomLocations.map((loc) => (
              <div key={loc.name} className="bg-white border border-gray-100 p-5">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={15} className="text-[#d4874a] flex-shrink-0 mt-0.5" />
                  <h3 className="font-montserrat font-semibold text-[13px] text-gray-800">
                    {loc.name}
                  </h3>
                </div>
                <p className="text-[12px] font-lato text-gray-500 leading-relaxed ml-5">
                  {loc.address}
                </p>
                <a
                  href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                  className="mt-2 flex items-center gap-1.5 text-[12px] font-lato text-[#d4874a] hover:underline ml-5"
                >
                  <Phone size={12} />
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-200" />
              <h2 className="font-montserrat font-semibold text-[13px] tracking-[0.25em] text-gray-500 uppercase">
                You May Also Like
              </h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} hrefBase={basePath} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
      <Footer />
    </main>
  );
}

function InfoGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-montserrat font-semibold text-[11px] tracking-widest text-gray-700 uppercase mb-2">
        {label}
      </h4>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-[12px] font-lato text-gray-500">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
