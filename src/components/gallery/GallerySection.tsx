import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/galleryData';
import { Image as ImageIcon, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './GallerySection.css';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Ambiance', 'Dining', 'Culinary', 'Gatherings'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((curr) => (curr !== null ? (curr - 1 + filteredItems.length) % filteredItems.length : null));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((curr) => (curr !== null ? (curr + 1) % filteredItems.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="gallery-section section-wrapper" aria-label="Restaurant Gallery">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <ImageIcon size={13} />
            <span>Visual Showcase</span>
          </span>
          <h2 className="section-title">Dining Moments & Ambiance</h2>
          <p className="section-subtitle">
            A glimpse into the relaxed environment, festive tables, and sizzling culinary craftsmanship 
            awaiting your family.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="gallery-filter-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Open enlarged view of ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(idx);
                }
              }}
            >
              <div className="gallery-image-box">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="gallery-thumb"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="gallery-overlay">
                  <div className="gallery-zoom-badge">
                    <ZoomIn size={18} />
                  </div>
                  <div className="gallery-card-info">
                    <span className="gallery-card-cat">{item.category}</span>
                    <h3 className="gallery-card-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image preview"
        >
          <div className="lightbox-backdrop" onClick={closeLightbox} />

          <div className="lightbox-dialog">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="lightbox-close-btn"
              aria-label="Close enlarged preview"
            >
              <X size={24} />
            </button>

            {/* Nav Arrows */}
            <button
              onClick={prevImage}
              className="lightbox-nav-btn lightbox-prev"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={nextImage}
              className="lightbox-nav-btn lightbox-next"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Active Image Box */}
            <div className="lightbox-content-box">
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].alt}
                className="lightbox-image"
              />
              <div className="lightbox-caption-bar">
                <div>
                  <h3 className="lightbox-title">{filteredItems[lightboxIndex].title}</h3>
                  <p className="lightbox-desc">{filteredItems[lightboxIndex].caption}</p>
                </div>
                <span className="lightbox-counter">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
