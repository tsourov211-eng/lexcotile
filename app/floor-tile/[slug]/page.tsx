'use client';

import ProductDetailPage from '@/app/wall-tile/[slug]/page';

export default function FloorTileProductPage({ params }: { params: { slug: string } }) {
  return <ProductDetailPage params={params} />;
}
