import Link from 'next/link';
import { Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer id="footer" className="bg-[#bbbbbd] text-[#333333] pt-14 pb-12 font-roboto text-[13px] leading-[1.54]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Brand Summary Column */}
            <div className="md:col-span-4 pr-0 md:pr-8">
              <div className="mb-4">
                <Link href="/">
                  <img
                    src="/logo.png"
                    alt="webnibo"
                    className="max-w-[210px] h-auto object-contain"
                  />
                </Link>
                <p className="mt-3 font-bold text-[#111821] text-[13px]">
                  webnibo Tile &amp; Architectural Surfaces
                </p>
              </div>

              <p className="text-[#222222] text-[13px] leading-relaxed mb-5">
                We offer a huge selection of tile and stone, with options for every project and budget. Our knowledgeable sales team helps you strike a balance between quality and cost.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-5">
                <Link
                  href="/about-lexco-tile-stone/"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#111821] font-roboto font-medium text-[13px] uppercase tracking-wider transition-colors"
                >
                  <span>More about us</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/careers/"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#111821] font-roboto font-medium text-[13px] uppercase tracking-wider transition-colors"
                >
                  <span>Careers</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 text-white">
                <a
                  href="https://www.facebook.com/lexcotilestone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111821] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/lexcotilestone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111821] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.pinterest.com/lexcotilestone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111821] transition-colors"
                  aria-label="Pinterest"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/lexco-tile-stone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111821] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {/* Product */}
              <div className="border-l border-[#dcdcde] pl-4 sm:pl-6">
                <h4 className="font-roboto font-light text-[15px] text-[#5b4b3f] uppercase tracking-normal mb-3 pb-2">
                  Search By Product
                </h4>
                <ul className="space-y-2 text-white">
                  <li>
                    <Link href="/find-tile/tile-category/wall-tile/" className="hover:text-[#111821] transition-colors">
                      Wall Tile
                    </Link>
                  </li>
                  <li>
                    <Link href="/find-tile/tile-category/floor-tile/" className="hover:text-[#111821] transition-colors">
                      Floor Tile
                    </Link>
                  </li>
                  <li>
                    <Link href="/find-tile/tile-category/mosaic-tile/" className="hover:text-[#111821] transition-colors">
                      Mosaic
                    </Link>
                  </li>
                  <li>
                    <Link href="/find-tile/tile-category/pavers-quarry-tile/" className="hover:text-[#111821] transition-colors">
                      Pavers &amp; Quarry
                    </Link>
                  </li>
                  <li>
                    <Link href="/find-tile/tile-category/natural-stone-tile/" className="hover:text-[#111821] transition-colors">
                      Natural Stone
                    </Link>
                  </li>
                  <li>
                    <Link href="/find-tile/tile-category/clearance-outlet-tile/" className="hover:text-[#111821] transition-colors">
                      Clearance Tiles
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Style */}
              <div className="border-l border-[#dcdcde] pl-4 sm:pl-6">
                <h4 className="font-roboto font-light text-[15px] text-[#5b4b3f] uppercase tracking-normal mb-3 pb-2">
                  Search by Style
                </h4>
                <ul className="space-y-2 text-white">
                  {['Concrete', 'Marble', 'Striated', 'Subway', 'Classic / Traditional', 'Industrial', 'Wood'].map((s) => (
                    <li key={s}>
                      <Link href={`/find-tile/?tile_style=${encodeURIComponent(s)}`} className="hover:text-[#111821] transition-colors">
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shape */}
              <div className="border-l border-[#dcdcde] pl-4 sm:pl-6">
                <h4 className="font-roboto font-light text-[15px] text-[#5b4b3f] uppercase tracking-normal mb-3 pb-2">
                  Search By Shape
                </h4>
                <ul className="space-y-2 text-white">
                  {['Chevron', 'Herringbone', 'Hexagon', 'Linear', 'Random', 'Rectangular', 'Square'].map((sh) => (
                    <li key={sh}>
                      <Link href={`/find-tile/?tile_shape=${encodeURIComponent(sh)}`} className="hover:text-[#111821] transition-colors">
                        {sh}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get Inspired & Help */}
              <div className="border-l border-[#dcdcde] pl-4 sm:pl-6">
                <h4 className="font-roboto font-light text-[15px] text-[#5b4b3f] uppercase tracking-normal mb-3 pb-2">
                  Get Inspired
                </h4>
                <ul className="space-y-2 text-white mb-6">
                  <li>
                    <Link href="/showroom/" className="hover:text-[#111821] transition-colors">
                      Showrooms
                    </Link>
                  </li>
                  <li>
                    <Link href="/tile-resources/design-trends/" className="hover:text-[#111821] transition-colors">
                      Design Trends
                    </Link>
                  </li>
                </ul>

                <h4 className="font-roboto font-light text-[15px] text-[#5b4b3f] uppercase tracking-normal mb-3 pb-2">
                  Get Help
                </h4>
                <ul className="space-y-2 text-white">
                  <li>
                    <Link href="/tile-resources/guides-tools/" className="hover:text-[#111821] transition-colors">
                      Guides &amp; Tools
                    </Link>
                  </li>
                  <li>
                    <Link href="/tile-resources/find-installers/" className="hover:text-[#111821] transition-colors">
                      Tile Installers
                    </Link>
                  </li>
                  <li>
                    <Link href="/tile-resources/find-dealers/" className="hover:text-[#111821] transition-colors">
                      Tile Dealers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/" className="hover:text-[#111821] transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Bar */}
      <section id="footer-bot" className="bg-[#77777b] text-white py-4 px-4 text-center font-roboto text-[12px] leading-relaxed">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <p>
            &copy; 2026 webnibo. All Rights Reserved.
          </p>
          <ul className="flex items-center gap-3">
            <li><span className="hidden sm:inline">|</span></li>
            <li>
              <Link href="/home/site-map/" className="hover:text-[#111821] transition-colors underline sm:no-underline">
                Site Map
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link href="/home/privacy-policy/" className="hover:text-[#111821] transition-colors underline sm:no-underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
