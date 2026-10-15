export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'Ambiance' | 'Dining' | 'Culinary' | 'Gatherings';
  caption: string;
  alt: string;
}

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    title: 'The Garden Ambiance',
    category: 'Ambiance',
    caption: 'Warm ambient evening lighting, foliage accents, and comfortable dining booths.',
    alt: 'Warm contemporary restaurant dining area with elegant mood lighting'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    title: 'Family Gathering Table',
    category: 'Gatherings',
    caption: 'Spacious banquet seating arranged for family feasts and weekend catch-ups.',
    alt: 'Restaurant table setting prepared for a warm family gathering'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    title: 'Chef Sizzler Presentation',
    category: 'Culinary',
    caption: 'Plated fresh with roasted garden vegetables and sizzling aromatic herb sauces.',
    alt: 'Gourmet sizzling plate served hot with fresh herbs and vegetables'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    title: 'Tandoor & Charcoal Flavours',
    category: 'Culinary',
    caption: 'Slow roasted skewers marinated in freshly ground artisanal spices.',
    alt: 'Char-grilled succulent skewers seasoned with fragrant ground spices'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80',
    title: 'Warm Hospitality',
    category: 'Ambiance',
    caption: 'Relaxed urban dark interiors designed for unhurried conversations.',
    alt: 'Cozy and intimate restaurant corner with warm rustic textures'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    title: 'Celebration Moments',
    category: 'Gatherings',
    caption: 'Cherishing birthdays, anniversaries, and family get-togethers.',
    alt: 'Guests enjoying a celebration at a restaurant table'
  }
];
