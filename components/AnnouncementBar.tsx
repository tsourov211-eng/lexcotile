'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      id="alert"
      className="fixed bottom-0 left-0 right-0 z-[4000] bg-[#e3903f] text-white py-3.5 px-6 text-center font-roboto text-[13px] sm:text-[14px] shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300"
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2 relative pr-8">
        <span className="font-semibold uppercase tracking-wider text-[11px] sm:text-[12px] bg-black/10 px-2 py-0.5 rounded">
          NEW BUSINESS HOURS
        </span>
        <Link
          href="/about-lexco-tile-stone/company-news-announcements/"
          className="text-white underline hover:no-underline font-normal"
        >
          Starting Monday, November 3rd, 2025, webnibo will be closing at 4:00pm
        </Link>
        <button
          onClick={() => setVisible(false)}
          type="button"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:bg-black/10 p-1.5 transition-colors rounded"
          aria-label="Close Alert Bar"
        >
          <X size={17} />
        </button>
      </div>
    </div>
  );
}
