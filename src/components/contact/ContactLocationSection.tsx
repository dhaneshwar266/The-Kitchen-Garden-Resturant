import React from 'react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';
import { 
  MapPin, 
  Clock, 
  Phone, 
  ExternalLink, 
  Compass, 
  Calendar, 
  Info,
  Building2
} from 'lucide-react';
import './ContactLocationSection.css';

export const ContactLocationSection: React.FC = () => {
  const { 
    mapsUrl, 
    directionsUrl,
    displayAddress, 
    isAddressVerified, 
    phone, 
    isPhoneConfigured, 
    openingHours 
  } = RESTAURANT_CONFIG;

  return (
    <section id="contact" className="contact-section section-wrapper" aria-label="Contact and Location">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <Compass size={13} />
            <span>Find & Reach Us</span>
          </span>
          <h2 className="section-title">Visit The Kitchen Garden</h2>
          <p className="section-subtitle">
            Plan your visit, find verified driving directions, or check our daily family dining hours.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-grid">
          {/* Card 1: Location Reference */}
          <div className="contact-card surface-card">
            <div className="contact-card-icon-box">
              <MapPin size={24} />
            </div>
            <h3 className="contact-card-title">Location Reference</h3>
            
            <p className="contact-address-text">
              {displayAddress}
            </p>

            {isAddressVerified ? (
              <div className="address-status-badge">
                <MapPin size={14} />
                <span>Verified Google Maps Destination</span>
              </div>
            ) : (
              <div className="address-status-badge">
                <Info size={14} />
                <span>Verified Google Maps Link Below</span>
              </div>
            )}

            <p className="contact-card-desc">
              Tap below to view our verified place pin, navigate via GPS, or explore neighborhood parking on Google Maps.
            </p>

            <a
              href={directionsUrl || mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full maps-direction-btn"
              title="Open directions in Google Maps"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Card 2: Operating Hours */}
          <div className="contact-card surface-card">
            <div className="contact-card-icon-box">
              <Clock size={24} />
            </div>
            <h3 className="contact-card-title">Dining Hours</h3>

            <div className="hours-list">
              <div className="hours-item">
                <span className="hours-service">Lunch Service</span>
                <span className="hours-time">{openingHours.lunch}</span>
              </div>
              <div className="hours-item">
                <span className="hours-service">Dinner Service</span>
                <span className="hours-time">{openingHours.dinner}</span>
              </div>
              <div className="hours-item hours-days">
                <span className="hours-service">Operating Days</span>
                <span className="hours-time">{openingHours.days}</span>
              </div>
            </div>

            <div className="hours-notice-box">
              <p className="hours-notice-text">
                Last orders for the kitchen are accepted 45 minutes prior to session closing.
              </p>
            </div>
          </div>

          {/* Card 3: Inquiries & Reservations */}
          <div className="contact-card surface-card">
            <div className="contact-card-icon-box">
              <Phone size={24} />
            </div>
            <h3 className="contact-card-title">Inquiries & Bookings</h3>

            <div className="phone-info-block">
              <span className="info-sub-label">Direct Contact:</span>
              {isPhoneConfigured ? (
                <a href={`tel:+${phone.replace(/\D/g, '')}`} className="phone-number-link">
                  {phone}
                </a>
              ) : (
                <div className="phone-pending-box">
                  <span className="phone-placeholder-text">Configurable Phone Number</span>
                  <p className="phone-pending-note">
                    Official voice desk line can be updated in <code>restaurantConfig.ts</code>.
                  </p>
                </div>
              )}
            </div>

            <p className="contact-card-desc">
              For weekend family tables, birthday gatherings, or private inquiries, please submit a reservation request.
            </p>

            <a href="#reserve" className="btn-secondary w-full contact-reserve-btn">
              <Calendar size={16} />
              <span>Book Table in Advance</span>
            </a>
          </div>
        </div>

        {/* Location Visual Banner */}
        <div className="map-reference-banner surface-card">
          <div className="map-banner-content">
            <div className="map-banner-header">
              <Building2 size={20} className="text-copper" />
              <h4 className="map-banner-title">Google Maps Verified Destination</h4>
            </div>
            <p className="map-banner-desc">
              Destination: <strong>The Kitchen Garden</strong> • Bilaspur, Chhattisgarh
            </p>
            <p className="map-banner-note">
              Click the button to open high-accuracy turn-by-turn GPS navigation directly in the Google Maps app.
            </p>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-copper map-banner-btn"
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
