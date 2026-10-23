'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X, ChevronDown, Folder } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/find-tile/?keyword=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? 'shadow-[0_0_20px_rgba(0,0,0,0.25)] py-2 sm:py-2.5'
            : 'shadow-[0_0_15px_rgba(0,0,0,0.15)] py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* webnibo Logo */}
            <div className="flex items-center">
              <Link href="/" className="block py-1">
                <img
                  src="/logo.png"
                  alt="webnibo"
                  className={`w-auto object-contain transition-all duration-300 ${
                    scrolled
                      ? 'h-9 sm:h-11 md:h-12'
                      : 'h-11 sm:h-14 md:h-16'
                  }`}
                />
              </Link>
            </div>

            {/* Desktop Navigation Container */}
            <div className="hidden lg:flex flex-col items-end">
              {/* Secondary Navigation (Top Bar) - Larger text */}
              <nav className="mb-2">
                <ul className="flex items-center space-x-7 text-[13px] sm:text-[14px] font-roboto font-medium tracking-wider text-[#77777b]">
                  {/* About with Dropdown */}
                  <li
                    className="relative py-1"
                    onMouseEnter={() => setActiveDropdown('about')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href="/about-lexco-tile-stone/"
                      className="hover:text-[#e3903f] uppercase transition-colors"
                    >
                      About
                    </Link>

                    {activeDropdown === 'about' && (
                      <div className="absolute right-0 top-full pt-2 z-50 w-72">
                        <div className="nav-triangle" />
                        <div className="bg-[#bbbbbd] p-6 shadow-xl text-left">
                          <ul className="space-y-3.5">
                            <li>
                              <Link
                                href="/about-lexco-tile-stone/history/"
                                className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                              >
                                History
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/about-lexco-tile-stone/our-affiliates/"
                                className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                              >
                                Our Affiliates
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/about-lexco-tile-stone/our-manufacturers/"
                                className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                              >
                                Our Manufacturers
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/about-lexco-tile-stone/professional-associations/"
                                className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                              >
                                Professional Associations
                              </Link>
                            </li>
                            <li className="pt-2 border-t border-white/40">
                              <Link
                                href="/about-lexco-tile-stone/company-news-announcements/"
                                className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                              >
                                News &amp; Announcements
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* Contact */}
                  <li>
                    <Link
                      href="/contact/"
                      className="hover:text-[#e3903f] uppercase transition-colors"
                    >
                      Contact
                    </Link>
                  </li>

                  {/* My Projects */}
                  <li>
                    <Link
                      href="/my-projects/"
                      className="flex items-center gap-2 hover:text-[#e3903f] transition-colors"
                    >
                      <Folder size={14} className="text-[#e3903f]" />
                      <span>My Projects</span>
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Primary Navigation (Main Bar) - Larger Links */}
              <nav className="flex items-center">
                <ul className="flex items-center space-x-8 text-[15px] lg:text-[16px] font-roboto font-semibold tracking-[1.1px] text-[#111821]">
                  {/* FIND TILE with Mega Menu */}
                  <li
                    className="relative py-2"
                    onMouseEnter={() => setActiveDropdown('find-tile')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href="/find-tile/"
                      className="hover:text-[#e3903f] uppercase transition-colors inline-block pb-1 hover:border-b-2 hover:border-[#e3903f]"
                    >
                      Find Tile
                    </Link>

                    {/* Mega Dropdown */}
                    {activeDropdown === 'find-tile' && (
                      <div className="absolute -right-28 top-full pt-2 z-50 w-[780px]">
                        <div className="nav-triangle" />
                        <div className="bg-[#bbbbbd] p-8 shadow-2xl text-left grid grid-cols-3 gap-7">
                          {/* Col 1: Search by Product */}
                          <div className="border-r border-white/40 pr-5">
                            <h4 className="text-[#5b4b3f] font-roboto font-normal text-[16px] uppercase tracking-normal mb-3 pb-2 border-b border-white/30">
                              Search By Product
                            </h4>
                            <ul className="space-y-3">
                              <li>
                                <Link
                                  href="/find-tile/tile-category/wall-tile/"
                                  className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                                >
                                  Wall Tile
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/find-tile/tile-category/floor-tile/"
                                  className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                                >
                                  Floor Tile
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/find-tile/tile-category/mosaic-tile/"
                                  className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                                >
                                  Mosaic
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/find-tile/tile-category/pavers-quarry-tile/"
                                  className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                                >
                                  Pavers &amp; Quarry
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/find-tile/tile-category/natural-stone-tile/"
                                  className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                                >
                                  Natural Stone
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/find-tile/tile-category/clearance-outlet-tile/"
                                  className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                                >
                                  Clearance Tiles
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* Col 2: Search by Style */}
                          <div className="border-r border-white/40 pr-5">
                            <h4 className="text-[#5b4b3f] font-roboto font-normal text-[16px] uppercase tracking-normal mb-3 pb-2 border-b border-white/30">
                              Search by Style
                            </h4>
                            <ul className="space-y-3">
                              {['Concrete', 'Marble', 'Striated', 'Subway', 'Classic / Traditional', 'Industrial', 'Wood'].map(
                                (style) => (
                                  <li key={style}>
                                    <Link
                                      href={`/find-tile/?tile_style=${encodeURIComponent(style)}`}
                                      className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                                    >
                                      {style}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* Col 3: Search by Shape */}
                          <div>
                            <h4 className="text-[#5b4b3f] font-roboto font-normal text-[16px] uppercase tracking-normal mb-3 pb-2 border-b border-white/30">
                              Search By Shape
                            </h4>
                            <ul className="space-y-3">
                              {['Chevron', 'Herringbone', 'Hexagon', 'Linear', 'Random', 'Rectangular', 'Square'].map(
                                (shape) => (
                                  <li key={shape}>
                                    <Link
                                      href={`/find-tile/?tile_shape=${encodeURIComponent(shape)}`}
                                      className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                                    >
                                      {shape}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* NEW ARRIVALS */}
                  <li className="py-2">
                    <Link
                      href="/new-arrivals/"
                      className="hover:text-[#e3903f] uppercase transition-colors inline-block pb-1 hover:border-b-2 hover:border-[#e3903f]"
                    >
                      New Arrivals
                    </Link>
                  </li>

                  {/* SHOWROOM with Dropdown */}
                  <li
                    className="relative py-2"
                    onMouseEnter={() => setActiveDropdown('showroom')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href="/showroom/"
                      className="hover:text-[#e3903f] uppercase transition-colors inline-block pb-1 hover:border-b-2 hover:border-[#e3903f]"
                    >
                      Showroom
                    </Link>

                    {activeDropdown === 'showroom' && (
                      <div className="absolute right-0 top-full pt-2 z-50 w-84">
                        <div className="nav-triangle" />
                        <div className="bg-[#bbbbbd] p-6 shadow-2xl text-left grid grid-cols-2 gap-5">
                          <div className="border-r border-white/40 pr-4">
                            <h4 className="text-[#5b4b3f] font-roboto font-normal text-[14px] uppercase tracking-normal mb-2.5">
                              Location
                            </h4>
                            <Link
                              href="/location/milwaukee/"
                              className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                            >
                              Milwaukee, WI
                            </Link>
                          </div>
                          <div>
                            <h4 className="text-[#5b4b3f] font-roboto font-normal text-[14px] uppercase tracking-normal mb-2.5">
                              Schedule
                            </h4>
                            <Link
                              href="/locations/holiday-hours/"
                              className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                            >
                              Holiday Hours
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* TILE RESOURCES with Dropdown */}
                  <li
                    className="relative py-2"
                    onMouseEnter={() => setActiveDropdown('resources')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href="/tile-resources/"
                      className="hover:text-[#e3903f] uppercase transition-colors inline-block pb-1 hover:border-b-2 hover:border-[#e3903f]"
                    >
                      Tile Resources
                    </Link>

                    {activeDropdown === 'resources' && (
                      <div className="absolute right-0 top-full pt-2 z-50 w-72">
                        <div className="nav-triangle" />
                        <div className="bg-[#bbbbbd] p-6 shadow-2xl text-left">
                          <ul className="space-y-3.5">
                            <li>
                              <Link
                                href="/tile-resources/design-trends/"
                                className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                              >
                                Design Trends
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/tile-resources/setting-materials/"
                                className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                              >
                                Setting Materials
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/tile-resources/guides-tools/"
                                className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                              >
                                Guides &amp; Tools
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/tile-resources/find-installers/"
                                className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                              >
                                Find Installers
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/tile-resources/find-dealers/"
                                className="block text-white hover:text-[#111821] text-[14px] transition-colors"
                              >
                                Find Dealers
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* Search Icon Button */}
                  <li className="pl-3">
                    <button
                      type="button"
                      onClick={() => setSearchOpen(!searchOpen)}
                      className="text-[#77777b] hover:text-[#e3903f] transition-colors p-1 flex items-center justify-center"
                      aria-label="Open search form"
                    >
                      <Search size={22} />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-[#77777b] hover:text-[#e3903f] p-1.5"
                aria-label="Search"
              >
                <Search size={24} />
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="bg-[#666666] text-white p-2.5 rounded-none hover:bg-[#e3903f] transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        {searchOpen && (
          <div className="border-t border-[#dcdcde] bg-white py-4 px-4 shadow-md transition-all">
            <form onSubmit={handleSearch} className="max-w-[750px] mx-auto flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tiles by name, series, shape or style..."
                className="flex-1 border border-[#dcdcde] px-4 py-2.5 text-[15px] font-roboto focus:outline-none focus:border-[#e3903f]"
                autoFocus
              />
              <button
                type="submit"
                className="bg-[#e3903f] text-white px-7 py-2.5 text-[15px] font-roboto uppercase tracking-wider hover:bg-[#77777b] transition-colors font-medium cursor-pointer"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[75px] sm:top-[85px] z-40 bg-white overflow-y-auto lg:hidden border-t border-[#dcdcde]">
          <div className="p-6 font-roboto">
            <ul className="divide-y divide-gray-200">
              {/* Find Tile Accordion */}
              <li className="py-3.5">
                <button
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === 'find-tile' ? null : 'find-tile')
                  }
                  className="w-full flex items-center justify-between text-left text-[17px] font-semibold text-[#111821] uppercase tracking-wider"
                >
                  <span>Find Tile</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileSubmenu === 'find-tile' ? 'rotate-180 text-[#e3903f]' : ''
                    }`}
                  />
                </button>
                {mobileSubmenu === 'find-tile' && (
                  <div className="mt-3.5 pl-4 space-y-4 text-[15px]">
                    <div>
                      <h5 className="font-semibold text-[#5b4b3f] uppercase text-[13px] mb-2">
                        Product
                      </h5>
                      <div className="grid grid-cols-2 gap-2.5 text-gray-700">
                        <Link href="/find-tile/tile-category/wall-tile/">Wall Tile</Link>
                        <Link href="/find-tile/tile-category/floor-tile/">Floor Tile</Link>
                        <Link href="/find-tile/tile-category/mosaic-tile/">Mosaic</Link>
                        <Link href="/find-tile/tile-category/pavers-quarry-tile/">Pavers</Link>
                        <Link href="/find-tile/tile-category/natural-stone-tile/">Stone</Link>
                        <Link href="/find-tile/tile-category/clearance-outlet-tile/">Clearance</Link>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#5b4b3f] uppercase text-[13px] mb-2">
                        Style
                      </h5>
                      <div className="grid grid-cols-2 gap-2.5 text-gray-700">
                        {['Concrete', 'Marble', 'Striated', 'Subway', 'Classic', 'Industrial', 'Wood'].map(
                          (s) => (
                            <Link key={s} href={`/find-tile/?tile_style=${encodeURIComponent(s)}`}>
                              {s}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* New Arrivals */}
              <li className="py-3.5">
                <Link
                  href="/new-arrivals/"
                  className="block text-[17px] font-semibold text-[#111821] uppercase tracking-wider"
                >
                  New Arrivals
                </Link>
              </li>

              {/* Showroom Accordion */}
              <li className="py-3.5">
                <button
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === 'showroom' ? null : 'showroom')
                  }
                  className="w-full flex items-center justify-between text-left text-[17px] font-semibold text-[#111821] uppercase tracking-wider"
                >
                  <span>Showroom</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileSubmenu === 'showroom' ? 'rotate-180 text-[#e3903f]' : ''
                    }`}
                  />
                </button>
                {mobileSubmenu === 'showroom' && (
                  <div className="mt-2.5 pl-4 space-y-2.5 text-[15px] text-gray-700">
                    <Link href="/location/milwaukee/" className="block">
                      Milwaukee, WI
                    </Link>
                    <Link href="/locations/holiday-hours/" className="block">
                      Holiday Hours
                    </Link>
                  </div>
                )}
              </li>

              {/* Tile Resources Accordion */}
              <li className="py-3.5">
                <button
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === 'resources' ? null : 'resources')
                  }
                  className="w-full flex items-center justify-between text-left text-[17px] font-semibold text-[#111821] uppercase tracking-wider"
                >
                  <span>Tile Resources</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileSubmenu === 'resources' ? 'rotate-180 text-[#e3903f]' : ''
                    }`}
                  />
                </button>
                {mobileSubmenu === 'resources' && (
                  <div className="mt-2.5 pl-4 space-y-2.5 text-[15px] text-gray-700">
                    <Link href="/tile-resources/design-trends/" className="block">
                      Design Trends
                    </Link>
                    <Link href="/tile-resources/setting-materials/" className="block">
                      Setting Materials
                    </Link>
                    <Link href="/tile-resources/guides-tools/" className="block">
                      Guides &amp; Tools
                    </Link>
                    <Link href="/tile-resources/find-installers/" className="block">
                      Find Installers
                    </Link>
                    <Link href="/tile-resources/find-dealers/" className="block">
                      Find Dealers
                    </Link>
                  </div>
                )}
              </li>

              {/* About */}
              <li className="py-3.5">
                <Link
                  href="/about-lexco-tile-stone/"
                  className="block text-[17px] font-semibold text-[#111821] uppercase tracking-wider"
                >
                  About
                </Link>
              </li>

              {/* Contact */}
              <li className="py-3.5">
                <Link
                  href="/contact/"
                  className="block text-[17px] font-semibold text-[#111821] uppercase tracking-wider"
                >
                  Contact
                </Link>
              </li>

              {/* My Projects */}
              <li className="py-3.5">
                <Link
                  href="/my-projects/"
                  className="flex items-center gap-2 text-[17px] font-semibold text-[#111821] tracking-wider"
                >
                  <Folder size={18} className="text-[#e3903f]" />
                  <span>My Projects</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
