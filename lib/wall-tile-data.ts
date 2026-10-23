export type TileColor = {
  name: string;
  swatch: string;
};

export type TileSize = {
  finish: string;
  size: string;
  type: 'Nominal' | 'Rectified';
};

export type WallTileProduct = {
  name: string;
  slug: string;
  image: string;
  roomImage: string;
  description: string;
  longDescription: string;
  style: string;
  shape: string;
  finish: string;
  colors: string[];
  colorSwatches: TileColor[];
  sizes: TileSize[];
  usage: string[];
  availability: string[];
  category: string[];
  isNew?: boolean;
};

export const wallTileProducts: WallTileProduct[] = [
  {
    "name": "3D",
    "slug": "3d-glazed-wall-tile",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/11/3D-Blanco-Bowtie-Olympia-Tile-Bright-450x450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/11/3D-Blanco-Bowtie-Olympia-Tile-Bright-450x450.jpg",
    "description": "3D wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium 3D collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "3D",
    "shape": "Rectangular",
    "finish": "Gloss",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "mosaic-tile",
      "natural-stone-tile",
      "pavers-quarry-tile",
      "clearance-outlet-tile"
    ],
    "isNew": true
  },
  {
    "name": "Abacus",
    "slug": "abacus",
    "image": "https://www.lexcotile.com/wp-content/uploads/2023/05/450-2.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2023/05/450-2.jpg",
    "description": "Abacus wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Abacus collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "3D",
    "shape": "Chevron",
    "finish": "Polished",
    "colors": [
      "Gray",
      "Blue"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": true
  },
  {
    "name": "Acanto",
    "slug": "acanto",
    "image": "https://www.lexcotile.com/wp-content/uploads/2026/01/450-2.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2026/01/450-2.jpg",
    "description": "Acanto wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Acanto collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Marble",
    "shape": "Random",
    "finish": "Textured",
    "colors": [
      "Beige",
      "Black"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": true
  },
  {
    "name": "Accent Bleu",
    "slug": "accent-bleu",
    "image": "https://www.lexcotile.com/wp-content/uploads/2024/08/450-1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2024/08/450-1.jpg",
    "description": "Accent Bleu wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Accent Bleu collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Concrete",
    "shape": "Hexagon",
    "finish": "Gloss",
    "colors": [
      "Blue",
      "Green",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": true
  },
  {
    "name": "Ainslee Park",
    "slug": "porcelain-tile-ainslee-park",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/08/Breccia-Mist-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/08/Breccia-Mist-450.jpg",
    "description": "Ainslee Park wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Ainslee Park collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Classic / Traditional",
    "shape": "Linear",
    "finish": "Polished",
    "colors": [
      "Black",
      "Brown"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": true
  },
  {
    "name": "Alpes",
    "slug": "alpes",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/11/450x450-Photo-Template-19.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/11/450x450-Photo-Template-19.jpg",
    "description": "Alpes wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Alpes collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Industrial",
    "shape": "Square",
    "finish": "Textured",
    "colors": [
      "Green",
      "Gold"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "mosaic-tile"
    ],
    "isNew": true
  },
  {
    "name": "Amplify",
    "slug": "amplify",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/06/Thumbnail-7.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/06/Thumbnail-7.jpg",
    "description": "Amplify wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Amplify collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Striated",
    "shape": "Herringbone",
    "finish": "Gloss",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": true
  },
  {
    "name": "Apuano Oro",
    "slug": "apuano-oro",
    "image": "https://www.lexcotile.com/wp-content/uploads/2024/05/450-1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2024/05/450-1.jpg",
    "description": "Apuano Oro wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Apuano Oro collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Marble",
    "shape": "Rectangular",
    "finish": "Polished",
    "colors": [
      "Gold",
      "Gray"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "natural-stone-tile"
    ],
    "isNew": true
  },
  {
    "name": "Arc",
    "slug": "arc",
    "image": "https://www.lexcotile.com/wp-content/uploads/2017/09/Arc-Room-Scene_thumb.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2017/09/Arc-Room-Scene_thumb.jpg",
    "description": "Arc wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Arc collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Brick",
    "shape": "Chevron",
    "finish": "Textured",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": true
  },
  {
    "name": "Artistic Impressions",
    "slug": "artistic-impressions",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/09/ANTHAIH_habitat02-450x450-1.webp",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/09/ANTHAIH_habitat02-450x450-1.webp",
    "description": "Artistic Impressions wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Artistic Impressions collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Modern / Contemporary",
    "shape": "Random",
    "finish": "Gloss",
    "colors": [
      "Gray",
      "Blue",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": true
  },
  {
    "name": "Blanco & Wave",
    "slug": "blanco-wave",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/06/Thumbnail-2.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/06/Thumbnail-2.jpg",
    "description": "Blanco & Wave wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Blanco & Wave collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Rustic",
    "shape": "Hexagon",
    "finish": "Polished",
    "colors": [
      "Beige",
      "Black"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "mosaic-tile"
    ],
    "isNew": true
  },
  {
    "name": "Boutique Sleek",
    "slug": "boutique-sleek",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/08/Boutique-sleek-thumbnail_ANTHBSSG_04.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/08/Boutique-sleek-thumbnail_ANTHBSSG_04.jpg",
    "description": "Boutique Sleek wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Boutique Sleek collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Subway",
    "shape": "Linear",
    "finish": "Textured",
    "colors": [
      "Blue",
      "Green"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "pavers-quarry-tile"
    ],
    "isNew": true
  },
  {
    "name": "Burlingstone",
    "slug": "burlingstone-marble-porcelain",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/06/Image-Thumbnail-1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/06/Image-Thumbnail-1.jpg",
    "description": "Burlingstone wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Burlingstone collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "3D",
    "shape": "Square",
    "finish": "Gloss",
    "colors": [
      "Black",
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Calema",
    "slug": "calema",
    "image": "https://www.lexcotile.com/wp-content/uploads/2025/10/450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2025/10/450.jpg",
    "description": "Calema wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Calema collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Marble",
    "shape": "Herringbone",
    "finish": "Polished",
    "colors": [
      "Green",
      "Gold"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "clearance-outlet-tile"
    ],
    "isNew": false
  },
  {
    "name": "Callisto",
    "slug": "callisto",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/11/450x450-Photo-Template-7.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/11/450x450-Photo-Template-7.jpg",
    "description": "Callisto wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Callisto collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Concrete",
    "shape": "Rectangular",
    "finish": "Textured",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "natural-stone-tile"
    ],
    "isNew": false
  },
  {
    "name": "Candy",
    "slug": "candy",
    "image": "https://www.lexcotile.com/wp-content/uploads/2026/07/450-3.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2026/07/450-3.jpg",
    "description": "Candy wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Candy collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Classic / Traditional",
    "shape": "Chevron",
    "finish": "Gloss",
    "colors": [
      "Gold",
      "Gray",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Casablanca",
    "slug": "casablanca",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/10/ANTHCAJA_Jardin-Anthology-Natural-Stone-450x450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/10/ANTHCAJA_Jardin-Anthology-Natural-Stone-450x450.jpg",
    "description": "Casablanca wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Casablanca collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Industrial",
    "shape": "Random",
    "finish": "Polished",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "CD Modular",
    "slug": "cd-modular",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/01/CD-Modular-Arctic-White-4x24-Ceramic-Wall-Tile-matte-450x450-1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/01/CD-Modular-Arctic-White-4x24-Ceramic-Wall-Tile-matte-450x450-1.jpg",
    "description": "CD Modular wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium CD Modular collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Striated",
    "shape": "Hexagon",
    "finish": "Textured",
    "colors": [
      "Gray",
      "Blue"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Chic",
    "slug": "chic",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/09/Chic_Room_450_450_ANTHCHTA_02.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/09/Chic_Room_450_450_ANTHCHTA_02.jpg",
    "description": "Chic wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Chic collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Wood",
    "shape": "Linear",
    "finish": "Gloss",
    "colors": [
      "Beige",
      "Black",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "City",
    "slug": "city",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/02/City-Lt-Grey-Room-Scene.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/02/City-Lt-Grey-Room-Scene.jpg",
    "description": "City wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium City collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Brick",
    "shape": "Square",
    "finish": "Polished",
    "colors": [
      "Blue",
      "Green"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Clay",
    "slug": "clay-2",
    "image": "https://www.lexcotile.com/wp-content/uploads/2026/10/450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2026/10/450.jpg",
    "description": "Clay wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Clay collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Modern / Contemporary",
    "shape": "Herringbone",
    "finish": "Textured",
    "colors": [
      "Black",
      "Brown"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Color Brick",
    "slug": "color-brick",
    "image": "https://www.lexcotile.com/wp-content/uploads/2024/06/450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2024/06/450.jpg",
    "description": "Color Brick wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Color Brick collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Brick",
    "shape": "Rectangular",
    "finish": "Gloss",
    "colors": [
      "Green",
      "Gold",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "natural-stone-tile"
    ],
    "isNew": false
  },
  {
    "name": "Cristallo Glass",
    "slug": "cristallo-glass",
    "image": "https://www.lexcotile.com/wp-content/uploads/2017/10/Cristallo-thumb.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2017/10/Cristallo-thumb.jpg",
    "description": "Cristallo Glass wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Cristallo Glass collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Subway",
    "shape": "Chevron",
    "finish": "Polished",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "pavers-quarry-tile"
    ],
    "isNew": false
  },
  {
    "name": "Cubics",
    "slug": "cubics",
    "image": "https://www.lexcotile.com/wp-content/uploads/2024/07/450-2.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2024/07/450-2.jpg",
    "description": "Cubics wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Cubics collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "3D",
    "shape": "Random",
    "finish": "Textured",
    "colors": [
      "Gold",
      "Gray"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "D-Lux Pearl",
    "slug": "d-lux-pearl",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/09/ANTHDLPAW_ADLEY-WHITE-450x450-1.webp",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/09/ANTHDLPAW_ADLEY-WHITE-450x450-1.webp",
    "description": "D-Lux Pearl wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium D-Lux Pearl collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Marble",
    "shape": "Hexagon",
    "finish": "Gloss",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Dalia",
    "slug": "dalia",
    "image": "https://www.lexcotile.com/wp-content/uploads/2018/07/Dalia-Nero-Room-Scene-450x450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2018/07/Dalia-Nero-Room-Scene-450x450.jpg",
    "description": "Dalia wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Dalia collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Concrete",
    "shape": "Linear",
    "finish": "Polished",
    "colors": [
      "Gray",
      "Blue"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Dazzle",
    "slug": "dazzle",
    "image": "https://www.lexcotile.com/wp-content/uploads/2021/03/450x450-Photo-Template-3.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2021/03/450x450-Photo-Template-3.jpg",
    "description": "Dazzle wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Dazzle collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Classic / Traditional",
    "shape": "Square",
    "finish": "Textured",
    "colors": [
      "Beige",
      "Black"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "clearance-outlet-tile"
    ],
    "isNew": false
  },
  {
    "name": "Duomo",
    "slug": "duomo",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/08/450x450-Photo-Template.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/08/450x450-Photo-Template.jpg",
    "description": "Duomo wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Duomo collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Industrial",
    "shape": "Herringbone",
    "finish": "Gloss",
    "colors": [
      "Blue",
      "Green",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Elegant Elements",
    "slug": "elegant-elements",
    "image": "https://www.lexcotile.com/wp-content/uploads/2021/09/SC-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2021/09/SC-450.jpg",
    "description": "Elegant Elements wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Elegant Elements collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Striated",
    "shape": "Rectangular",
    "finish": "Polished",
    "colors": [
      "Black",
      "Brown"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "natural-stone-tile"
    ],
    "isNew": false
  },
  {
    "name": "Emersyn Lane",
    "slug": "emersyn-lane",
    "image": "https://www.lexcotile.com/wp-content/uploads/2024/10/450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2024/10/450.jpg",
    "description": "Emersyn Lane wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Emersyn Lane collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Wood",
    "shape": "Chevron",
    "finish": "Textured",
    "colors": [
      "Green",
      "Gold"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Emotive",
    "slug": "emotive-florida-tile",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/08/450x450-Photo-Template-1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/08/450x450-Photo-Template-1.jpg",
    "description": "Emotive wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Emotive collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Brick",
    "shape": "Random",
    "finish": "Gloss",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Essential Brick",
    "slug": "essential-brick",
    "image": "https://www.lexcotile.com/wp-content/uploads/2024/07/450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2024/07/450.jpg",
    "description": "Essential Brick wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Essential Brick collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Brick",
    "shape": "Hexagon",
    "finish": "Polished",
    "colors": [
      "Gold",
      "Gray"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Essentials",
    "slug": "essentials-glass",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/11/ANTHESMI312_Mist-3x12-Glass-Essentials-Anthology-rs1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/11/ANTHESMI312_Mist-3x12-Glass-Essentials-Anthology-rs1.jpg",
    "description": "Essentials wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Essentials collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Rustic",
    "shape": "Linear",
    "finish": "Textured",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Euphoria",
    "slug": "euphoria",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/10/ANTHEUMR_Euphoria-Mystic-Rain-Anthology-Glass-450x450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/10/ANTHEUMR_Euphoria-Mystic-Rain-Anthology-Glass-450x450.jpg",
    "description": "Euphoria wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Euphoria collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Subway",
    "shape": "Square",
    "finish": "Gloss",
    "colors": [
      "Gray",
      "Blue",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "pavers-quarry-tile"
    ],
    "isNew": false
  },
  {
    "name": "Fabrique & Nature",
    "slug": "fabrique-nature-recycled-glass",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/11/Willow-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/11/Willow-450.jpg",
    "description": "Fabrique & Nature wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Fabrique & Nature collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "3D",
    "shape": "Herringbone",
    "finish": "Polished",
    "colors": [
      "Beige",
      "Black"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Fantasy",
    "slug": "fantasy",
    "image": "https://www.lexcotile.com/wp-content/uploads/2021/03/450x450-Photo-Template-4.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2021/03/450x450-Photo-Template-4.jpg",
    "description": "Fantasy wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Fantasy collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Marble",
    "shape": "Rectangular",
    "finish": "Textured",
    "colors": [
      "Blue",
      "Green"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "mosaic-tile",
      "natural-stone-tile"
    ],
    "isNew": false
  },
  {
    "name": "Fifth Avenue",
    "slug": "fifth-avenue-dimension-ceramic",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/11/ANTHFIMD_Manhattan-Dove-Fifth-Avenue-Anthology-Ceramic-Tile.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/11/ANTHFIMD_Manhattan-Dove-Fifth-Avenue-Anthology-Ceramic-Tile.jpg",
    "description": "Fifth Avenue wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Fifth Avenue collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Concrete",
    "shape": "Chevron",
    "finish": "Gloss",
    "colors": [
      "Black",
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Fluent",
    "slug": "fluent",
    "image": "https://www.lexcotile.com/wp-content/uploads/2023/08/450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2023/08/450.jpg",
    "description": "Fluent wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Fluent collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Classic / Traditional",
    "shape": "Random",
    "finish": "Polished",
    "colors": [
      "Green",
      "Gold"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Formaviva",
    "slug": "formaviva",
    "image": "https://www.lexcotile.com/wp-content/uploads/2026/07/450-2.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2026/07/450-2.jpg",
    "description": "Formaviva wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Formaviva collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Industrial",
    "shape": "Hexagon",
    "finish": "Textured",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Foundations",
    "slug": "foundations",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/02/450-Thumbnail.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/02/450-Thumbnail.jpg",
    "description": "Foundations wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Foundations collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Striated",
    "shape": "Linear",
    "finish": "Gloss",
    "colors": [
      "Gold",
      "Gray",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "clearance-outlet-tile"
    ],
    "isNew": false
  },
  {
    "name": "Gazelle",
    "slug": "gazelle",
    "image": "https://www.lexcotile.com/wp-content/uploads/2026/07/450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2026/07/450.jpg",
    "description": "Gazelle wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Gazelle collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Wood",
    "shape": "Square",
    "finish": "Polished",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Gem",
    "slug": "gem",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/08/gems-bianco-4-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/08/gems-bianco-4-450.jpg",
    "description": "Gem wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Gem collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Brick",
    "shape": "Herringbone",
    "finish": "Textured",
    "colors": [
      "Gray",
      "Blue"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Genesis",
    "slug": "genesis",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/02/GENESIS_TAUPE-DECOR-ROOM-SCENE.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/02/GENESIS_TAUPE-DECOR-ROOM-SCENE.jpg",
    "description": "Genesis wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Genesis collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Modern / Contemporary",
    "shape": "Rectangular",
    "finish": "Gloss",
    "colors": [
      "Beige",
      "Black",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "natural-stone-tile"
    ],
    "isNew": false
  },
  {
    "name": "Graffiti",
    "slug": "grafitti",
    "image": "https://www.lexcotile.com/wp-content/uploads/2024/04/AMB_GREEN_HD-450X450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2024/04/AMB_GREEN_HD-450X450.jpg",
    "description": "Graffiti wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Graffiti collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Rustic",
    "shape": "Chevron",
    "finish": "Polished",
    "colors": [
      "Blue",
      "Green"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Lighthouse",
    "slug": "lighthouse",
    "image": "https://www.lexcotile.com/wp-content/uploads/2024/05/450-3.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2024/05/450-3.jpg",
    "description": "Lighthouse wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Lighthouse collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Subway",
    "shape": "Random",
    "finish": "Textured",
    "colors": [
      "Black",
      "Brown"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "pavers-quarry-tile"
    ],
    "isNew": false
  },
  {
    "name": "Lindt",
    "slug": "lindt-wall-tile",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/01/LINDT-MATTE-BLACK-3D-Olympia-Glazed-Wall-Tile-450X450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/01/LINDT-MATTE-BLACK-3D-Olympia-Glazed-Wall-Tile-450X450.jpg",
    "description": "Lindt wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Lindt collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "3D",
    "shape": "Hexagon",
    "finish": "Gloss",
    "colors": [
      "Green",
      "Gold",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Madison",
    "slug": "madison",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/06/Madison-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/06/Madison-450.jpg",
    "description": "Madison wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Madison collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Marble",
    "shape": "Linear",
    "finish": "Polished",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Mat & More",
    "slug": "mat-more",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/08/450x450-Photo-Template-2.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/08/450x450-Photo-Template-2.jpg",
    "description": "Mat & More wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Mat & More collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Concrete",
    "shape": "Square",
    "finish": "Textured",
    "colors": [
      "Gold",
      "Gray"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Memorie",
    "slug": "memorie",
    "image": "https://www.lexcotile.com/wp-content/uploads/2024/05/450-2.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2024/05/450-2.jpg",
    "description": "Memorie wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Memorie collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Classic / Traditional",
    "shape": "Herringbone",
    "finish": "Gloss",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Metallica",
    "slug": "metallica",
    "image": "https://www.lexcotile.com/wp-content/uploads/2023/05/450-1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2023/05/450-1.jpg",
    "description": "Metallica wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Metallica collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Industrial",
    "shape": "Rectangular",
    "finish": "Polished",
    "colors": [
      "Gray",
      "Blue"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "natural-stone-tile"
    ],
    "isNew": false
  },
  {
    "name": "Metro Brix",
    "slug": "metro-brix",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/07/Metro-Brix-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/07/Metro-Brix-450.jpg",
    "description": "Metro Brix wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Metro Brix collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Striated",
    "shape": "Chevron",
    "finish": "Textured",
    "colors": [
      "Beige",
      "Black"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Metropolis",
    "slug": "metropolis",
    "image": "https://www.lexcotile.com/wp-content/uploads/2026/02/450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2026/02/450.jpg",
    "description": "Metropolis wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Metropolis collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Wood",
    "shape": "Random",
    "finish": "Gloss",
    "colors": [
      "Blue",
      "Green",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Monet Magic",
    "slug": "monet-magic-glass",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/10/ANTHMMSH_Monet-Magic-Anthology-Glass-Metallic-Mosaic-Smokey-Hex-450x450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/10/ANTHMMSH_Monet-Magic-Anthology-Glass-Metallic-Mosaic-Smokey-Hex-450x450.jpg",
    "description": "Monet Magic wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Monet Magic collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Brick",
    "shape": "Hexagon",
    "finish": "Polished",
    "colors": [
      "Black",
      "Brown"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "clearance-outlet-tile"
    ],
    "isNew": false
  },
  {
    "name": "Moon",
    "slug": "moon",
    "image": "https://www.lexcotile.com/wp-content/uploads/2023/12/Rosso-Res-Wall-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2023/12/Rosso-Res-Wall-450.jpg",
    "description": "Moon wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Moon collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Modern / Contemporary",
    "shape": "Linear",
    "finish": "Textured",
    "colors": [
      "Green",
      "Gold"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Moroccan Habitat",
    "slug": "moroccan-habitat-handmade-tiles",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/12/ANTHMHMA_Moroccan-Mix-Azure-Ceramic-Wall-Tile-Anthology-Moroccan-Habitat-450x450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/12/ANTHMHMA_Moroccan-Mix-Azure-Ceramic-Wall-Tile-Anthology-Moroccan-Habitat-450x450.jpg",
    "description": "Moroccan Habitat wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Moroccan Habitat collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Rustic",
    "shape": "Square",
    "finish": "Gloss",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Multiforme",
    "slug": "multiforme",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/12/Multiforme_Hotel__PerlaFreccia_Talco_Ossidiana-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/12/Multiforme_Hotel__PerlaFreccia_Talco_Ossidiana-450.jpg",
    "description": "Multiforme wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Multiforme collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Subway",
    "shape": "Herringbone",
    "finish": "Polished",
    "colors": [
      "Gold",
      "Gray"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "mosaic-tile",
      "pavers-quarry-tile"
    ],
    "isNew": false
  },
  {
    "name": "Muse (by Anthology)",
    "slug": "muse-anthology",
    "image": "https://www.lexcotile.com/wp-content/uploads/2021/03/bath.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2021/03/bath.jpg",
    "description": "Muse (by Anthology) wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Muse (by Anthology) collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "3D",
    "shape": "Rectangular",
    "finish": "Textured",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "natural-stone-tile"
    ],
    "isNew": false
  },
  {
    "name": "Mystic Glass",
    "slug": "mystic-glass",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/12/ANTHMGHO_Anthology-Mystic-Glass-Mosaic-Horizon-3x12-450x450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/12/ANTHMGHO_Anthology-Mystic-Glass-Mosaic-Horizon-3x12-450x450.jpg",
    "description": "Mystic Glass wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Mystic Glass collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Marble",
    "shape": "Chevron",
    "finish": "Gloss",
    "colors": [
      "Gray",
      "Blue",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Mythos",
    "slug": "mythos",
    "image": "https://www.lexcotile.com/wp-content/uploads/2024/12/Mythos-Thumb.png",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2024/12/Mythos-Thumb.png",
    "description": "Mythos wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Mythos collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Concrete",
    "shape": "Random",
    "finish": "Polished",
    "colors": [
      "Beige",
      "Black"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Naima",
    "slug": "naima",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/11/NAIMA-WHITE_ESTUDIO-450x450-1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/11/NAIMA-WHITE_ESTUDIO-450x450-1.jpg",
    "description": "Naima wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Naima collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Classic / Traditional",
    "shape": "Hexagon",
    "finish": "Textured",
    "colors": [
      "Blue",
      "Green"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "New Byzantine",
    "slug": "new-byzantine",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/11/450x450-Photo-Template-15.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/11/450x450-Photo-Template-15.jpg",
    "description": "New Byzantine wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium New Byzantine collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Industrial",
    "shape": "Linear",
    "finish": "Gloss",
    "colors": [
      "Black",
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Niebla",
    "slug": "niebla",
    "image": "https://www.lexcotile.com/wp-content/uploads/2024/12/Niebla-Thumb.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2024/12/Niebla-Thumb.jpg",
    "description": "Niebla wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Niebla collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Striated",
    "shape": "Square",
    "finish": "Polished",
    "colors": [
      "Green",
      "Gold"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Noho & Soho",
    "slug": "nohoandsoho",
    "image": "https://www.lexcotile.com/wp-content/uploads/2023/01/Thumbnail.png",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2023/01/Thumbnail.png",
    "description": "Noho & Soho wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Noho & Soho collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Wood",
    "shape": "Herringbone",
    "finish": "Textured",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Oceani",
    "slug": "oceani",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/08/450x450-Photo-Template-6.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/08/450x450-Photo-Template-6.jpg",
    "description": "Oceani wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Oceani collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Brick",
    "shape": "Rectangular",
    "finish": "Gloss",
    "colors": [
      "Gold",
      "Gray",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "natural-stone-tile"
    ],
    "isNew": false
  },
  {
    "name": "Oceanique",
    "slug": "oceanique",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/08/Teal-3x12-bathroom-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/08/Teal-3x12-bathroom-450.jpg",
    "description": "Oceanique wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Oceanique collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Modern / Contemporary",
    "shape": "Chevron",
    "finish": "Polished",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "On The Edge",
    "slug": "on-the-edge",
    "image": "https://www.lexcotile.com/wp-content/uploads/2021/03/Gold-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2021/03/Gold-450.jpg",
    "description": "On The Edge wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium On The Edge collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Rustic",
    "shape": "Random",
    "finish": "Textured",
    "colors": [
      "Gray",
      "Blue"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "mosaic-tile",
      "clearance-outlet-tile"
    ],
    "isNew": false
  },
  {
    "name": "Oxford",
    "slug": "oxford-ceramic-wall-tile",
    "image": "https://www.lexcotile.com/wp-content/uploads/2017/09/Oxford-Room-Super-White-thumb.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2017/09/Oxford-Room-Super-White-thumb.jpg",
    "description": "Oxford wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Oxford collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Subway",
    "shape": "Hexagon",
    "finish": "Gloss",
    "colors": [
      "Beige",
      "Black",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "pavers-quarry-tile"
    ],
    "isNew": false
  },
  {
    "name": "Ozone",
    "slug": "ozone-3d-wall-tile",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/11/Ozone-Glazed-Wall-Olympia-3D-Tile.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/11/Ozone-Glazed-Wall-Olympia-3D-Tile.jpg",
    "description": "Ozone wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Ozone collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "3D",
    "shape": "Linear",
    "finish": "Polished",
    "colors": [
      "Blue",
      "Green"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Panache",
    "slug": "panache",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/08/Nouveau-Geo-backsplash-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/08/Nouveau-Geo-backsplash-450.jpg",
    "description": "Panache wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Panache collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Marble",
    "shape": "Square",
    "finish": "Textured",
    "colors": [
      "Black",
      "Brown"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Piccadilly",
    "slug": "piccadilly",
    "image": "https://www.lexcotile.com/wp-content/uploads/2017/10/Piccadilly-Room-Bianco-Tortora-Thumb.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2017/10/Piccadilly-Room-Bianco-Tortora-Thumb.jpg",
    "description": "Piccadilly wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Piccadilly collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Concrete",
    "shape": "Herringbone",
    "finish": "Gloss",
    "colors": [
      "Green",
      "Gold",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Pickett",
    "slug": "pickett-ceramic-tile",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/12/ANTHPIGR_Pickett-Anthology-Ceramic-Tile-Gris.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/12/ANTHPIGR_Pickett-Anthology-Ceramic-Tile-Gris.jpg",
    "description": "Pickett wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Pickett collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Classic / Traditional",
    "shape": "Rectangular",
    "finish": "Polished",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "mosaic-tile",
      "natural-stone-tile"
    ],
    "isNew": false
  },
  {
    "name": "Plaster 2.0",
    "slug": "plaster2-0",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/02/450-thumbnail-colors-and-chairs.png",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/02/450-thumbnail-colors-and-chairs.png",
    "description": "Plaster 2.0 wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Plaster 2.0 collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Industrial",
    "shape": "Chevron",
    "finish": "Textured",
    "colors": [
      "Gold",
      "Gray"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Poeme",
    "slug": "poeme",
    "image": "https://www.lexcotile.com/wp-content/uploads/2025/03/poeme-concept-roble-wood-plank-tile-decor-1-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2025/03/poeme-concept-roble-wood-plank-tile-decor-1-450.jpg",
    "description": "Poeme wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Poeme collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Striated",
    "shape": "Random",
    "finish": "Gloss",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Porcelart",
    "slug": "porcelart",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/04/thumbnail-450x450-1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/04/thumbnail-450x450-1.jpg",
    "description": "Porcelart wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Porcelart collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Wood",
    "shape": "Hexagon",
    "finish": "Polished",
    "colors": [
      "Gray",
      "Blue"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Precious",
    "slug": "precious",
    "image": "https://www.lexcotile.com/wp-content/uploads/2023/05/450-4.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2023/05/450-4.jpg",
    "description": "Precious wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Precious collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Brick",
    "shape": "Linear",
    "finish": "Textured",
    "colors": [
      "Beige",
      "Black"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Prestige",
    "slug": "prestige",
    "image": "https://www.lexcotile.com/wp-content/uploads/2023/03/8692_n_Panaria-prestige-imperialegrey-30x60-mosaicochevron-soft-part.bagno-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2023/03/8692_n_Panaria-prestige-imperialegrey-30x60-mosaicochevron-soft-part.bagno-450.jpg",
    "description": "Prestige wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Prestige collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Modern / Contemporary",
    "shape": "Square",
    "finish": "Gloss",
    "colors": [
      "Blue",
      "Green",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Puro",
    "slug": "puro",
    "image": "https://www.lexcotile.com/wp-content/uploads/2025/10/PURO-MARQUINIA-CARRARA-VOLTE-CARRARA-GLAZED-PORCELAIN-MARBLE-450X450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2025/10/PURO-MARQUINIA-CARRARA-VOLTE-CARRARA-GLAZED-PORCELAIN-MARBLE-450X450.jpg",
    "description": "Puro wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Puro collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Rustic",
    "shape": "Herringbone",
    "finish": "Polished",
    "colors": [
      "Black",
      "Brown"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Ridge Hills",
    "slug": "ridge-hills-stone",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/10/ANTHRHVI_Ridge-Hills-Anthology-Villager-450X450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/10/ANTHRHVI_Ridge-Hills-Anthology-Villager-450X450.jpg",
    "description": "Ridge Hills wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Ridge Hills collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Subway",
    "shape": "Rectangular",
    "finish": "Textured",
    "colors": [
      "Green",
      "Gold"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "natural-stone-tile",
      "pavers-quarry-tile"
    ],
    "isNew": false
  },
  {
    "name": "Royal Gems",
    "slug": "royal-gems-picket-glass",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/12/ANTHRGRJ_Anthology-Royal-Gems-Glass-Mosaic-Blend-Regal-Jade-450x450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/12/ANTHRGRJ_Anthology-Royal-Gems-Glass-Mosaic-Blend-Regal-Jade-450x450.jpg",
    "description": "Royal Gems wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Royal Gems collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "3D",
    "shape": "Chevron",
    "finish": "Gloss",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "clearance-outlet-tile"
    ],
    "isNew": false
  },
  {
    "name": "Safi",
    "slug": "safi",
    "image": "https://www.lexcotile.com/wp-content/uploads/2025/08/450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2025/08/450.jpg",
    "description": "Safi wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Safi collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Marble",
    "shape": "Random",
    "finish": "Polished",
    "colors": [
      "Gold",
      "Gray"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Saturn",
    "slug": "saturn",
    "image": "https://www.lexcotile.com/wp-content/uploads/2023/07/VERDE-PERLA-SODA-SATURN-PORCELAIN-WALL-TILE-450X450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2023/07/VERDE-PERLA-SODA-SATURN-PORCELAIN-WALL-TILE-450X450.jpg",
    "description": "Saturn wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Saturn collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Concrete",
    "shape": "Hexagon",
    "finish": "Textured",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Seasons",
    "slug": "seasons-glass",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/11/Seasons-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/11/Seasons-450.jpg",
    "description": "Seasons wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Seasons collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Classic / Traditional",
    "shape": "Linear",
    "finish": "Gloss",
    "colors": [
      "Gray",
      "Blue",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Sequence",
    "slug": "sequence-floridatile",
    "image": "https://www.lexcotile.com/wp-content/uploads/2021/07/Vortex-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2021/07/Vortex-450.jpg",
    "description": "Sequence wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Sequence collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Industrial",
    "shape": "Square",
    "finish": "Polished",
    "colors": [
      "Beige",
      "Black"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Seville",
    "slug": "seville",
    "image": "https://www.lexcotile.com/wp-content/uploads/2025/06/450-2.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2025/06/450-2.jpg",
    "description": "Seville wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Seville collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Striated",
    "shape": "Herringbone",
    "finish": "Textured",
    "colors": [
      "Blue",
      "Green"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Skyline",
    "slug": "skyline",
    "image": "https://www.lexcotile.com/wp-content/uploads/2025/03/MarcaCorona-Longarine-Camelia-Betulla-Ginepro-Fiordaliso-Bistrot-02-450x450-1-1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2025/03/MarcaCorona-Longarine-Camelia-Betulla-Ginepro-Fiordaliso-Bistrot-02-450x450-1-1.jpg",
    "description": "Skyline wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Skyline collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Wood",
    "shape": "Rectangular",
    "finish": "Gloss",
    "colors": [
      "Black",
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "natural-stone-tile"
    ],
    "isNew": false
  },
  {
    "name": "Soho",
    "slug": "soho-floridatile",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/09/Cement-Chic-bathroom-floor-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/09/Cement-Chic-bathroom-floor-450.jpg",
    "description": "Soho wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Soho collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Brick",
    "shape": "Chevron",
    "finish": "Polished",
    "colors": [
      "Green",
      "Gold"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Songbird",
    "slug": "songbird",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/11/Template-450x450-1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/11/Template-450x450-1.jpg",
    "description": "Songbird wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Songbird collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Modern / Contemporary",
    "shape": "Random",
    "finish": "Textured",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Splendid",
    "slug": "splendid",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/08/Splendid_Eternal-Beauty-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/08/Splendid_Eternal-Beauty-450.jpg",
    "description": "Splendid wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Splendid collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Rustic",
    "shape": "Hexagon",
    "finish": "Gloss",
    "colors": [
      "Gold",
      "Gray",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Stonehenge",
    "slug": "stonehenge",
    "image": "https://www.lexcotile.com/wp-content/uploads/2023/07/450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2023/07/450.jpg",
    "description": "Stonehenge wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Stonehenge collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Subway",
    "shape": "Linear",
    "finish": "Polished",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "pavers-quarry-tile"
    ],
    "isNew": false
  },
  {
    "name": "Storied",
    "slug": "storied",
    "image": "https://www.lexcotile.com/wp-content/uploads/2023/07/450-2.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2023/07/450-2.jpg",
    "description": "Storied wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Storied collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "3D",
    "shape": "Square",
    "finish": "Textured",
    "colors": [
      "Gray",
      "Blue"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Subway Classics",
    "slug": "subway-classics",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/05/Subway-Classics-450x450-1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/05/Subway-Classics-450x450-1.jpg",
    "description": "Subway Classics wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Subway Classics collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Subway",
    "shape": "Rectangular",
    "finish": "Gloss",
    "colors": [
      "Beige",
      "Black",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Sunset",
    "slug": "sunset",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/11/450x450-Photo-Template-20.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/11/450x450-Photo-Template-20.jpg",
    "description": "Sunset wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Sunset collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Concrete",
    "shape": "Rectangular",
    "finish": "Polished",
    "colors": [
      "Blue",
      "Green"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "natural-stone-tile",
      "clearance-outlet-tile"
    ],
    "isNew": false
  },
  {
    "name": "T Square",
    "slug": "t-square",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/03/Pure-Linen-6x6-Smoke-Matte-8x8-T-Square.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/03/Pure-Linen-6x6-Smoke-Matte-8x8-T-Square.jpg",
    "description": "T Square wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium T Square collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Classic / Traditional",
    "shape": "Chevron",
    "finish": "Textured",
    "colors": [
      "Black",
      "Brown"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Terracotta",
    "slug": "terracotta",
    "image": "https://www.lexcotile.com/wp-content/uploads/2025/08/450-1.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2025/08/450-1.jpg",
    "description": "Terracotta wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Terracotta collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Industrial",
    "shape": "Random",
    "finish": "Gloss",
    "colors": [
      "Green",
      "Gold",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Teton",
    "slug": "teton",
    "image": "https://www.lexcotile.com/wp-content/uploads/2025/11/450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2025/11/450.jpg",
    "description": "Teton wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Teton collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Striated",
    "shape": "Hexagon",
    "finish": "Polished",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "The Finish Line",
    "slug": "the-finish-line",
    "image": "https://www.lexcotile.com/wp-content/uploads/2021/03/450x450-Photo-Template-7.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2021/03/450x450-Photo-Template-7.jpg",
    "description": "The Finish Line wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium The Finish Line collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Wood",
    "shape": "Linear",
    "finish": "Textured",
    "colors": [
      "Gold",
      "Gray"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Twill",
    "slug": "twill",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/11/450x450-Photo-Template-21.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/11/450x450-Photo-Template-21.jpg",
    "description": "Twill wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Twill collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Brick",
    "shape": "Square",
    "finish": "Gloss",
    "colors": [
      "White",
      "Beige"
    ],
    "colorSwatches": [
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Urban Foundry",
    "slug": "urban-foundry-porcelain-metal",
    "image": "https://www.lexcotile.com/wp-content/uploads/2020/06/Thumbnail-6.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2020/06/Thumbnail-6.jpg",
    "description": "Urban Foundry wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Urban Foundry collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Modern / Contemporary",
    "shape": "Herringbone",
    "finish": "Polished",
    "colors": [
      "Gray",
      "Blue"
    ],
    "colorSwatches": [
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      },
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "Venus",
    "slug": "venus",
    "image": "https://www.lexcotile.com/wp-content/uploads/2017/10/Venus-Bath-Floor-thumb.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2017/10/Venus-Bath-Floor-thumb.jpg",
    "description": "Venus wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Venus collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Rustic",
    "shape": "Rectangular",
    "finish": "Textured",
    "colors": [
      "Beige",
      "Black"
    ],
    "colorSwatches": [
      {
        "name": "Beige",
        "swatch": "#c4a482"
      },
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "natural-stone-tile"
    ],
    "isNew": false
  },
  {
    "name": "Verona Blends &#8211; Polished Marble Mosaics",
    "slug": "verona-blends-polished-marble-mosaics",
    "image": "https://www.lexcotile.com/wp-content/uploads/2019/02/Verona-Brick-Blend-.6x1.2-Mosaic-Polished-Marble.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2019/02/Verona-Brick-Blend-.6x1.2-Mosaic-Polished-Marble.jpg",
    "description": "Verona Blends &#8211; Polished Marble Mosaics wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Verona Blends &#8211; Polished Marble Mosaics collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Marble",
    "shape": "Chevron",
    "finish": "Gloss",
    "colors": [
      "Blue",
      "Green",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Blue",
        "swatch": "#2d4a6f"
      },
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "pavers-quarry-tile"
    ],
    "isNew": false
  },
  {
    "name": "Watercolors",
    "slug": "watercolors",
    "image": "https://www.lexcotile.com/wp-content/uploads/2021/03/450x450-Photo-Template-6.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2021/03/450x450-Photo-Template-6.jpg",
    "description": "Watercolors wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Watercolors collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "3D",
    "shape": "Random",
    "finish": "Polished",
    "colors": [
      "Black",
      "Brown"
    ],
    "colorSwatches": [
      {
        "name": "Black",
        "swatch": "#2a2a2a"
      },
      {
        "name": "Brown",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile",
      "mosaic-tile"
    ],
    "isNew": false
  },
  {
    "name": "Westmont",
    "slug": "westmont",
    "image": "https://www.lexcotile.com/wp-content/uploads/2022/08/Clay-450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2022/08/Clay-450.jpg",
    "description": "Westmont wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Westmont collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Marble",
    "shape": "Hexagon",
    "finish": "Textured",
    "colors": [
      "Green",
      "Gold"
    ],
    "colorSwatches": [
      {
        "name": "Green",
        "swatch": "#3d5a45"
      },
      {
        "name": "Gold",
        "swatch": "#c4a482"
      }
    ],
    "sizes": [
      {
        "finish": "Textured",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Textured",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  },
  {
    "name": "White Elegance",
    "slug": "white-elegance",
    "image": "https://www.lexcotile.com/wp-content/uploads/2024/06/450-2.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2024/06/450-2.jpg",
    "description": "White Elegance wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium White Elegance collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Concrete",
    "shape": "Linear",
    "finish": "Gloss",
    "colors": [
      "Brown",
      "White"
    ],
    "colorSwatches": [
      {
        "name": "Brown",
        "swatch": "#c4a482"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      },
      {
        "name": "White",
        "swatch": "#f5f5f0"
      }
    ],
    "sizes": [
      {
        "finish": "Gloss",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Gloss",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile",
      "floor-tile"
    ],
    "isNew": false
  },
  {
    "name": "Woodfeel",
    "slug": "woodfeel",
    "image": "https://www.lexcotile.com/wp-content/uploads/2023/06/WOODFEEL_CONCEPT_SIENA_30x30_450x450.jpg",
    "roomImage": "https://www.lexcotile.com/wp-content/uploads/2023/06/WOODFEEL_CONCEPT_SIENA_30x30_450x450.jpg",
    "description": "Woodfeel wall and surface collection by Lexco Tile & Stone.",
    "longDescription": "Elevate your interior design with the premium Woodfeel collection. Engineered with high craftsmanship, this series provides exceptional durability, visual depth, and seamless compatibility across residential and architectural commercial spaces.",
    "style": "Wood",
    "shape": "Square",
    "finish": "Polished",
    "colors": [
      "Gold",
      "Gray"
    ],
    "colorSwatches": [
      {
        "name": "Gold",
        "swatch": "#c4a482"
      },
      {
        "name": "Gray",
        "swatch": "#8a8a8a"
      }
    ],
    "sizes": [
      {
        "finish": "Polished",
        "size": "4\" x 12\"",
        "type": "Nominal"
      },
      {
        "finish": "Polished",
        "size": "12\" x 24\"",
        "type": "Rectified"
      }
    ],
    "usage": [
      "Interior Wall",
      "Shower Wall",
      "Kitchen Backsplash",
      "Commercial Wall"
    ],
    "availability": [
      "In Stock - North American Warehouse",
      "1-3 week lead time"
    ],
    "category": [
      "wall-tile"
    ],
    "isNew": false
  }
];

export function getProductBySlug(slug: string): WallTileProduct | undefined {
  return wallTileProducts.find(
    (p) => p.slug === slug || p.slug.toLowerCase() === slug.toLowerCase()
  );
}
