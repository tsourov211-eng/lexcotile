import { wallTileProducts, type WallTileProduct } from '@/lib/wall-tile-data';

export type TileCategory = {
  slug: string;
  label: string;
  eyebrow: string;
  description: string;
};

export const tileCategories: TileCategory[] = [
  {
    slug: 'wall-tile',
    label: 'Wall Tile',
    eyebrow: 'Adorn more than just the floor',
    description:
      'Elevate the look of any space with decorative wall tiles. Choose from a variety of sizes, colors and materials to complement floor tiles and décor.',
  },
  {
    slug: 'floor-tile',
    label: 'Floor Tile',
    eyebrow: 'Ground your design in beauty',
    description:
      'Create a foundation with durable porcelain, ceramic and natural-look floor tile made for spaces that need style and performance.',
  },
  {
    slug: 'mosaic-tile',
    label: 'Mosaic',
    eyebrow: 'Small format. Big impact.',
    description:
      'Add pattern, texture and personality with mosaics in glass, ceramic and stone-inspired blends.',
  },
  {
    slug: 'mosaic',
    label: 'Mosaic',
    eyebrow: 'Small format. Big impact.',
    description:
      'Add pattern, texture and personality with mosaics in glass, ceramic and stone-inspired blends.',
  },
  {
    slug: 'pavers-quarry-tile',
    label: 'Pavers & Quarry',
    eyebrow: 'Built for beautiful living',
    description:
      'Find hardwearing surfaces with natural character for patios, entries, commercial spaces and more.',
  },
  {
    slug: 'pavers-quarry',
    label: 'Pavers & Quarry',
    eyebrow: 'Built for beautiful living',
    description:
      'Find hardwearing surfaces with natural character for patios, entries, commercial spaces and more.',
  },
  {
    slug: 'natural-stone-tile',
    label: 'Natural Stone',
    eyebrow: 'Nature, thoughtfully selected',
    description:
      'Discover the timeless variation and character of stone-inspired tile for walls, floors and statement spaces.',
  },
  {
    slug: 'natural-stone',
    label: 'Natural Stone',
    eyebrow: 'Nature, thoughtfully selected',
    description:
      'Discover the timeless variation and character of stone-inspired tile for walls, floors and statement spaces.',
  },
  {
    slug: 'clearance-outlet-tile',
    label: 'Clearance Tiles',
    eyebrow: 'Exceptional value, in-stock selections',
    description:
      'Browse special opportunity lots, end-of-series overstock, and clearance tiles ready for fast delivery.',
  },
  {
    slug: 'colored-base-porcelain-floor-tile',
    label: 'Porcelain Tile - Colored Base',
    eyebrow: 'Color that lasts beautifully',
    description:
      'Explore through-body porcelain tile with rich color, reliable performance and a refined look for residential and commercial spaces.',
  },
  {
    slug: 'porcelain-tile-colored-base',
    label: 'Porcelain Tile - Colored Base',
    eyebrow: 'Color that lasts beautifully',
    description:
      'Explore through-body porcelain tile with rich color, reliable performance and a refined look for residential and commercial spaces.',
  },
  {
    slug: 'glass-wall-tile',
    label: 'Glass Wall Tile',
    eyebrow: 'Reflect light. Make a statement.',
    description:
      'Bring luminous color and dimensional sparkle to backsplashes, shower walls and feature spaces with glass tile.',
  },
  {
    slug: 'all-tile',
    label: 'All Tile',
    eyebrow: 'Find your perfect surface',
    description:
      'Browse our full selection of tile collections and find the material, color and format that fits your project.',
  },
];

export function getTileCategory(slug: string): TileCategory | undefined {
  return (
    tileCategories.find((category) => category.slug === slug) || {
      slug,
      label: slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      eyebrow: 'Distinctive Surfaces for Every Space',
      description:
        'Explore our handpicked collections offering exceptional aesthetic design and architectural durability.',
    }
  );
}

export function getCategoryProducts(category: TileCategory): WallTileProduct[] {
  const normSlug = category.slug.toLowerCase();
  if (normSlug === 'all-tile' || normSlug === 'find-tile') {
    return wallTileProducts;
  }
  const filtered = wallTileProducts.filter((p) =>
    p.category.some(
      (cat) =>
        cat.toLowerCase() === normSlug ||
        cat.toLowerCase().includes(normSlug.replace('-tile', ''))
    )
  );
  return filtered.length > 0 ? filtered : wallTileProducts.slice(0, 24);
}
