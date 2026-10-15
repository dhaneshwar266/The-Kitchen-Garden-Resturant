import React from 'react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';
import { 
  UtensilsCrossed, 
  MapPin, 
  Clock, 
  Phone, 
  ExternalLink, 
  CalendarCheck, 
  ArrowUp
} from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-col footer-col-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon" aria-hidden="true">
              <UtensilsCrossed size={18} />
            </div>
            <div className="footer-logo-text">
              <span className="footer-brand-name">{RESTAURANT_CONFIG.brandName}</span>
              <span className="footer-brand-sub">FAMILY RESTAURANT</span>
            </div>
          </div>

          <p className="footer-tagline">
            An urban-dark dining destination crafted for multi-generational families to gather, 
            celebrate, and share freshly cooked food with genuine hospitality.
          </p>

          <div className="footer-quick-actions">
            <a href="#reserve" className="btn-primary footer-btn">
              <CalendarCheck size={15} />
              <span>Reserve a Table</span>
            </a>
            <a
              href={RESTAURANT_CONFIG.directionsUrl || RESTAURANT_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary footer-btn"
            >
              <MapPin size={15} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Navigation Links Column */}
        <div className="footer-col">
          <h3 className="footer-col-title">Navigation</h3>
          <ul className="footer-links-list">
            <li><a href="#menu" className="footer-link">Explore Menu</a></li>
            <li><a href="#story" className="footer-link">Our Dining Story</a></li>
            <li><a href="#highlights" className="footer-link">Family Highlights</a></li>
            <li><a href="#gallery" className="footer-link">Food & Ambiance Gallery</a></li>
            <li><a href="#reviews" className="footer-link">Guest Reviews</a></li>
            <li><a href="#offers" className="footer-link">Offers & Packages</a></li>
            <li><a href="#contact" className="footer-link">Contact & Location</a></li>
          </ul>
        </div>

        {/* Operating Hours Column */}
        <div className="footer-col">
          <h3 className="footer-col-title">Dining Hours</h3>
          <div className="footer-hours-block">
            <div className="f-hour-item">
              <span className="f-hour-label">Lunch:</span>
              <span className="f-hour-val">{RESTAURANT_CONFIG.openingHours.lunch}</span>
            </div>
            <div className="f-hour-item">
              <span className="f-hour-label">Dinner:</span>
              <span className="f-hour-val">{RESTAURANT_CONFIG.openingHours.dinner}</span>
            </div>
            <div className="f-hour-item">
              <span className="f-hour-label">Days:</span>
              <span className="f-hour-val">{RESTAURANT_CONFIG.openingHours.days}</span>
            </div>
          </div>

          <div className="footer-location-block">
            <h4 className="footer-sub-title">Location Reference</h4>
            <a
              href={RESTAURANT_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-maps-link"
            >
              <span>View Google Maps Pin</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Configuration & Legal Column */}
        <div className="footer-col">
          <h3 className="footer-col-title">Restaurant Details</h3>
          <div className="footer-config-info">
            <p className="f-info-line">
              <Phone size={14} className="f-info-icon" />
              <span>
                {RESTAURANT_CONFIG.isPhoneConfigured ? (
                  <a 
                    href={`tel:+${RESTAURANT_CONFIG.phone.replace(/\D/g, '')}`} 
                    className="footer-tel-link"
                    title={`Call ${RESTAURANT_CONFIG.brandName}`}
                  >
                    {RESTAURANT_CONFIG.phone}
                  </a>
                ) : (
                  'Phone: Pending Configuration in config'
                )}
              </span>
            </p>
            <p className="f-info-line">
              <Clock size={14} className="f-info-icon" />
              <span>Table reservations held up to 15 mins</span>
            </p>
          </div>

          <div className="footer-disclaimer-box">
            <p className="f-disclaimer-text">
              <strong>Transparency Note:</strong> Live WhatsApp ordering and instant reservations 
              will be connected to the restaurant's official backend once operational details are linked.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            © 2026 {RESTAURANT_CONFIG.brandName}. Independent Family Restaurant. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Back to top"
            title="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
