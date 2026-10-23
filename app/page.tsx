import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import FindTile from '@/components/FindTile';
import VideoSection from '@/components/VideoSection';
import FeatureBanners from '@/components/FeatureBanners';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroBanner />
      <FindTile />
      <VideoSection />
      <FeatureBanners />
      <Newsletter />
      <Footer />
      <AnnouncementBar />
    </main>
  );
}
