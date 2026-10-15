import React from 'react';
import { SAMPLE_REVIEWS } from '../../data/reviewsData';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';
import { Star, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import './ReviewsSection.css';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="reviews-section section-wrapper" aria-label="Customer Reviews">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={13} />
            <span>Guest Impressions</span>
          </span>
          <h2 className="section-title">What Families Say About Dining With Us</h2>
          <p className="section-subtitle">
            Heartfelt meals, attentive care, and a warm atmosphere make every family dining 
            experience memorable.
          </p>

          {/* Transparent Policy Notice */}
          <div className="reviews-policy-notice" role="note">
            <ShieldCheck size={16} className="policy-icon" />
            <span>
              <strong>Authenticity Policy:</strong> Testimonials below serve as preview demonstration 
              cards. Official customer reviews and live ratings are verified via Google Maps.
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {SAMPLE_REVIEWS.map((review) => (
            <article key={review.id} className="review-card surface-card">
              <div className="review-card-top">
                <div className="star-rating" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? 'star-filled' : 'star-empty'}
                    />
                  ))}
                </div>
                <span className="review-source-badge">
                  {review.verified ? 'Verified Dining Guest' : 'Preview Placeholder'}
                </span>
              </div>

              <blockquote className="review-quote">
                "{review.reviewText}"
              </blockquote>

              <div className="review-author-meta">
                <div className="author-avatar-circle" aria-hidden="true">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h3 className="author-name">{review.author}</h3>
                  <div className="author-sub">
                    {review.occasion && <span>{review.occasion} • </span>}
                    <span className="author-status">
                      {review.verified ? 'Verified Dining' : 'Demo Card'}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* External Google Review CTA */}
        <div className="reviews-footer-cta">
          <div className="google-reviews-invite">
            <p className="invite-title">Dined with us recently?</p>
            <p className="invite-desc">
              We value honest family feedback. Share your dining experience directly on Google Maps.
            </p>
          </div>
          <a
            href={RESTAURANT_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            title="Open The Kitchen Garden on Google Maps"
          >
            <span>View or Write a Google Review</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
