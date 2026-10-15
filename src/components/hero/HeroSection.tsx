import React from 'react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';
import { Utensils, CalendarCheck, MapPin, Clock, Users, ArrowUpRight } from 'lucide-react';
import './HeroSection.css';

interface HeroSectionProps {
  onReserveClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onReserveClick }) => {
  return (
    <section className="hero-section" aria-label="Hero Introduction">
      <div className="container hero-container">
        {/* Editorial Text Column */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Family Dining & Gatherings</span>
          </div>

          <h1 className="hero-title">
            Good Food Shared Around the <span className="text-copper">Family Table.</span>
          </h1>

          <p className="hero-description">
            Welcome to {RESTAURANT_CONFIG.brandName} — where freshly prepared dishes, a relaxed 
            garden-inspired ambiance, and heartfelt hospitality bring generations together for 
            cherished conversations and unhurried meals.
          </p>

          <div className="hero-cta-group">
            <a href="#menu" className="btn-primary hero-btn-main">
              <Utensils size={18} aria-hidden="true" />
              <span>Explore Menu</span>
            </a>
            <a 
              href="#reserve" 
              onClick={onReserveClick}
              className="btn-secondary hero-btn-sub"
            >
              <CalendarCheck size={18} aria-hidden="true" />
              <span>Reserve a Table</span>
            </a>
          </div>

          {/* Experience Highlights Quick Bar */}
          <div className="hero-meta-bar">
            <div className="hero-meta-item">
              <div className="hero-meta-icon">
                <Users size={16} />
              </div>
              <div className="hero-meta-text">
                <span className="meta-label">Welcoming</span>
                <span className="meta-val">Family Comfort</span>
              </div>
            </div>

            <div className="hero-meta-divider"></div>

            <div className="hero-meta-item">
              <div className="hero-meta-icon">
                <Clock size={16} />
              </div>
              <div className="hero-meta-text">
                <span className="meta-label">Hours</span>
                <span className="meta-val">Lunch & Dinner</span>
              </div>
            </div>

            <div className="hero-meta-divider"></div>

            <a 
              href={RESTAURANT_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-meta-item hero-meta-link"
              title="Open directions in Google Maps"
            >
              <div className="hero-meta-icon">
                <MapPin size={16} />
              </div>
              <div className="hero-meta-text">
                <span className="meta-label">Location Reference</span>
                <span className="meta-val flex-center">
                  <span>Google Maps</span>
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Editorial Visual Column */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
              alt="Authentic family dining table with warm lighting and freshly served dishes"
              className="hero-main-img"
              width="600"
              height="480"
              loading="eager"
            />
            <div className="hero-image-overlay">
              <span className="hero-photo-tag">Representative Family Dining Preview</span>
            </div>
          </div>

          {/* Accent Card */}
          <div className="hero-floating-badge">
            <div className="floating-badge-icon">🌿</div>
            <div>
              <p className="floating-badge-title">Fresh Table Promise</p>
              <p className="floating-badge-subtitle">Dishes crafted fresh for your family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
