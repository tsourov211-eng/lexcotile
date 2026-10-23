'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Folder, Plus, Trash2, ArrowRight, CheckCircle2, Bookmark } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ProductCard from '@/components/ProductCard';
import { wallTileProducts } from '@/lib/wall-tile-data';

export default function MyProjectsPage() {
  const [activeProject, setActiveProject] = useState('Master Bathroom Renovation');
  const [projects, setProjects] = useState<string[]>([
    'Master Bathroom Renovation',
    'Kitchen Backsplash & Island',
  ]);
  const [newProjectName, setNewProjectName] = useState('');
  const [showNewModal, setShowNewModal] = useState(false);

  // Sample initial saved products
  const [savedProducts, setSavedProducts] = useState(wallTileProducts.slice(0, 4));

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProjectName.trim()) {
      setProjects([...projects, newProjectName.trim()]);
      setActiveProject(newProjectName.trim());
      setNewProjectName('');
      setShowNewModal(false);
    }
  };

  const handleRemoveItem = (slug: string) => {
    setSavedProducts(savedProducts.filter((p) => p.slug !== slug));
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
            <span className="text-[#333333] font-medium">My Projects</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-gray-200 gap-4">
            <div>
              <span className="text-[12px] font-roboto uppercase tracking-[2px] text-[#e3903f] font-semibold block mb-2">
                Project Specifier &amp; Moodboard
              </span>
              <h1 className="font-alice text-3xl sm:text-4xl text-[#5b4b3f]">
                My Projects
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowNewModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e3903f] text-white font-roboto text-xs uppercase tracking-wider font-semibold hover:bg-[#5b4b3f] transition-colors"
              >
                <Plus size={16} />
                <span>Create New Project</span>
              </button>
            </div>
          </div>

          {/* New Project Form Modal / Collapse */}
          {showNewModal && (
            <div className="mb-8 p-6 bg-[#f8f7f5] border border-gray-200">
              <h3 className="font-alice text-lg text-[#5b4b3f] mb-3">Add a New Project Board</h3>
              <form onSubmit={handleCreateProject} className="flex flex-wrap items-center gap-3">
                <input
                  type="text"
                  placeholder="e.g. Guest Suite Shower, Downtown Office Lobby..."
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="flex-1 max-w-md border border-gray-300 px-3.5 py-2 text-sm font-roboto bg-white focus:outline-none focus:border-[#e3903f]"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#5b4b3f] text-white font-roboto text-xs uppercase tracking-wider font-semibold hover:bg-[#e3903f] transition-colors"
                >
                  Save Project
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewModal(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-600 font-roboto text-xs uppercase tracking-wider"
                >
                  Cancel
                </button>
              </form>
            </div>
          )}

          {/* Project Tabs */}
          <div className="flex items-center gap-2 border-b border-gray-200 mb-8 overflow-x-auto pb-2">
            {projects.map((proj) => (
              <button
                key={proj}
                type="button"
                onClick={() => setActiveProject(proj)}
                className={`flex items-center gap-2 px-5 py-2.5 font-roboto text-sm font-medium transition-all shrink-0 border-b-2 ${
                  activeProject === proj
                    ? 'border-[#e3903f] text-[#e3903f] bg-orange-50/50'
                    : 'border-transparent text-gray-600 hover:text-[#5b4b3f]'
                }`}
              >
                <Folder size={16} className={activeProject === proj ? 'text-[#e3903f]' : 'text-gray-400'} />
                <span>{proj}</span>
              </button>
            ))}
          </div>

          {/* Project Content */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-alice text-2xl text-[#5b4b3f]">
                {activeProject} <span className="text-gray-400 font-roboto text-sm">({savedProducts.length} tiles)</span>
              </h2>

              {savedProducts.length > 0 && (
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#5b4b3f] text-white font-roboto text-xs uppercase tracking-wider font-semibold hover:bg-[#e3903f] transition-colors"
                >
                  <span>Request Samples For This Project</span>
                  <ArrowRight size={14} />
                </Link>
              )}
            </div>

            {savedProducts.length === 0 ? (
              <div className="py-16 text-center border-2 border-dashed border-gray-200 bg-[#fbfbfa] p-8">
                <Bookmark size={40} className="text-gray-300 mx-auto mb-3" />
                <h3 className="font-alice text-xl text-[#5b4b3f] mb-2">No tiles saved in this project yet</h3>
                <p className="font-roboto text-sm text-[#77777b] max-w-md mx-auto mb-6">
                  Browse our extensive wall and floor tile collections and click on any tile to explore finishes and save them to your project boards.
                </p>
                <Link
                  href="/find-tile/tile-category/wall-tile/"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#e3903f] text-white font-roboto uppercase tracking-wider text-xs font-semibold hover:bg-[#5b4b3f] transition-colors"
                >
                  <span>Browse Wall Tile Catalog</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {savedProducts.map((product) => (
                  <div key={product.slug} className="relative group">
                    <ProductCard product={product} />
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(product.slug)}
                      className="absolute top-2 right-2 z-20 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white shadow transition-all"
                      title="Remove tile from project"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
