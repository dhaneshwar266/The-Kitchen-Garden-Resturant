import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { useCart } from './context/useCart';
import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { RestaurantHighlights } from './components/highlights/RestaurantHighlights';
import { MenuSection } from './components/menu/MenuSection';
import { OurStorySection } from './components/story/OurStorySection';
import { GallerySection } from './components/gallery/GallerySection';
import { ReviewsSection } from './components/reviews/ReviewsSection';
import { OffersSection } from './components/offers/OffersSection';
import { ReservationSection } from './components/reservation/ReservationSection';
import { ContactLocationSection } from './components/contact/ContactLocationSection';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { CheckCircle2, X } from 'lucide-react';
import './App.css';

// Toast Notification Sub-component
const ToastView: React.FC = () => {
  const { toastMessage } = useCart();
  if (!toastMessage) return null;

  return (
    <div className="toast-notification" role="status" aria-live="polite">
      <CheckCircle2 size={18} className="text-copper" />
      <span>{toastMessage}</span>
    </div>
  );
};

// Dish Image Preview Modal
interface ImageModalProps {
  image: { url: string; title: string } | null;
  onClose: () => void;
}

const DishPreviewModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label={image.title}>
      <div className="lightbox-backdrop" onClick={onClose} />
      <div className="lightbox-dialog" style={{ maxWidth: '640px' }}>
        <button
          onClick={onClose}
          className="lightbox-close-btn"
          aria-label="Close image preview"
        >
          <X size={22} />
        </button>
        <div className="lightbox-content-box">
          <img src={image.url} alt={image.title} className="lightbox-image" />
          <div className="lightbox-caption-bar">
            <h3 className="lightbox-title">{image.title}</h3>
            <span className="lightbox-counter">Freshly Prepared</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent: React.FC = () => {
  const [previewDish, setPreviewDish] = useState<{ url: string; title: string } | null>(null);

  const handleOpenPreview = (url: string, title: string) => {
    setPreviewDish({ url, title });
  };

  const handleClosePreview = () => {
    setPreviewDish(null);
  };

  return (
    <div className="app-layout">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Primary Navigation */}
      <Navbar />

      {/* 3. Hero Section */}
      <main id="main-content">
        <HeroSection />

        {/* 4. Highlights Strip */}
        <RestaurantHighlights />

        {/* 5. Menu with Prices */}
        <MenuSection onPreviewImage={handleOpenPreview} />

        {/* 6. Our Story */}
        <OurStorySection />

        {/* 7. Food & Ambiance Gallery */}
        <GallerySection />

        {/* 8. Customer Reviews */}
        <ReviewsSection />

        {/* 9. Offers & Dining Packages */}
        <OffersSection />

        {/* 10. Table Reservations */}
        <ReservationSection />

        {/* 11. Contact & Location Reference */}
        <ContactLocationSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Dish Image Lightbox */}
      <DishPreviewModal image={previewDish} onClose={handleClosePreview} />

      {/* Live Toast */}
      <ToastView />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
};

export default App;
