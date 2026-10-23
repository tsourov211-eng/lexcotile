'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: 'https://www.lexcotile.com/wp-content/uploads/2022/08/gems-cobalto1_0-1900.jpg',
    alt: 'Gems Cobalto Tile Collection',
  },
  {
    url: 'https://www.lexcotile.com/wp-content/uploads/2021/02/Eclettica-1.jpg',
    alt: 'Eclettica Tile Collection',
  },
  {
    url: 'https://www.lexcotile.com/wp-content/uploads/2021/02/Oro_Illusion-Bronzea.jpg',
    alt: 'Oro Illusion Bronze Tile',
  },
  {
    url: 'https://www.lexcotile.com/wp-content/uploads/2021/02/Emotive-1.jpg',
    alt: 'Emotive Tile Collection',
  },
  {
    url: 'https://www.lexcotile.com/wp-content/uploads/2021/02/I-cocci-2.jpg',
    alt: 'I Cocci Stone & Tile',
  },
  {
    url: 'https://www.lexcotile.com/wp-content/uploads/2021/02/CD-CHEVRON-II-ROOM-SCENE-WHITE-NAVY-GREIGEa.jpg',
    alt: 'Chevron II Room Scene',
  },
  {
    url: 'https://www.lexcotile.com/wp-content/uploads/2021/02/Nirvana-Beige-Room1a-1.jpg',
    alt: 'Nirvana Beige Tile',
  },
  {
    url: 'https://www.lexcotile.com/wp-content/uploads/2021/02/London-Brick-Beige-Room-1200x600a.jpg',
    alt: 'London Brick Beige',
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden pt-[68px] sm:pt-[82px] lg:pt-[105px] bg-white">
      {/* 3 parts of screen height on mobile (72vh - 75vh), min-h-[460px] */}
      <div className="relative w-full h-[72vh] sm:h-[75vh] md:h-[60vh] lg:h-auto lg:aspect-[16/7] min-h-[460px] max-h-[750px] overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Previous & Next Control Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-all backdrop-blur-sm shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-all backdrop-blur-sm shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Navigation Dot Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 sm:w-8 bg-[#e3903f]' : 'w-2 sm:w-2.5 bg-white/70 hover:bg-white'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
