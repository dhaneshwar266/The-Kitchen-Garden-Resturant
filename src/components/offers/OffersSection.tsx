import React, { useState } from 'react';
import { RESTAURANT_OFFERS, SHOW_DRAFT_OFFERS_PREVIEW } from '../../data/offersData';
import { Tag, Calendar, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import './OffersSection.css';

export const OffersSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="offers" className="offers-section section-wrapper" aria-label="Offers & Packages">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <Tag size={13} />
            <span>Packages & Privileges</span>
          </span>
          <h2 className="section-title">Dining Packages & Offers</h2>
          <p className="section-subtitle">
            Thoughtful dining combinations and family gathering packages crafted to make your visit seamless.
          </p>

          {/* Configurable preview note */}
          <div className="offers-policy-notice" role="note">
            <Sparkles size={16} className="offers-notice-icon" />
            <span>
              <strong>Management Review State:</strong> Dining packages are configurable. 
              Please confirm ongoing package availability when reserving your table.
            </span>
          </div>
        </div>

        {/* Offers Cards or Unpublished Status */}
        {SHOW_DRAFT_OFFERS_PREVIEW && RESTAURANT_OFFERS.length > 0 ? (
          <div className="offers-grid">
            {RESTAURANT_OFFERS.map((offer) => (
              <div key={offer.id} className="offer-card surface-card">
                <div className="offer-card-badge-row">
                  {offer.badge && <span className="offer-badge">{offer.badge}</span>}
                  <span className="offer-status-badge">
                    {offer.isVerified ? 'Active Offer' : 'Configurable Draft'}
                  </span>
                </div>

                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-desc">{offer.description}</p>

                <div className="offer-meta-details">
                  <div className="offer-meta-line">
                    <CheckCircle2 size={15} className="meta-line-icon" />
                    <span><strong>Eligibility:</strong> {offer.eligibility}</span>
                  </div>
                  <div className="offer-meta-line">
                    <Calendar size={15} className="meta-line-icon" />
                    <span><strong>Validity:</strong> {offer.validity}</span>
                  </div>
                </div>

                {offer.couponCode && (
                  <div className="offer-code-box">
                    <div className="code-text-group">
                      <span className="code-label">Reference Code:</span>
                      <code className="code-value">{offer.couponCode}</code>
                    </div>
                    <button
                      onClick={() => handleCopyCode(offer.couponCode!)}
                      className="copy-code-btn"
                      title="Copy promo code"
                      aria-label={`Copy code ${offer.couponCode}`}
                    >
                      {copiedCode === offer.couponCode ? (
                        <>
                          <Check size={14} />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                <div className="offer-card-footer">
                  <a href="#reserve" className="btn-primary offer-action-btn">
                    <span>Inquire for Table</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="offers-unpublished-box">
            <h3 className="unpublished-title">Seasonal Packages in Preparation</h3>
            <p className="unpublished-desc">
              New dining packages for family gatherings and celebrations are currently being curated. 
              In the meantime, our hospitality team is happy to accommodate custom group requests.
            </p>
            <a href="#reserve" className="btn-primary">
              <span>Contact for Group Inquiries</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
