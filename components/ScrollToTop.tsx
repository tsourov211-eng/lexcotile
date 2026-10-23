'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down more than 280px
      if (window.scrollY > 280) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll page to top"
      className={`fixed z-[3500] bottom-20 right-4 sm:bottom-8 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e3903f] hover:bg-[#5b4b3f] text-white flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.25)] border-2 border-white transition-all duration-300 transform active:scale-90 hover:scale-105 cursor-pointer ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={20} className="stroke-[2.5]" />
    </button>
  );
}
