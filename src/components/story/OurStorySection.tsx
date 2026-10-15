import React from 'react';
import { Heart, Sparkles, UtensilsCrossed } from 'lucide-react';
import './OurStorySection.css';

export const OurStorySection: React.FC = () => {
  return (
    <section id="story" className="story-section section-wrapper" aria-label="Our Story">
      <div className="container">
        <div className="story-grid">
          {/* Text Editorial Column */}
          <div className="story-text-column">
            <span className="section-tag">
              <Sparkles size={13} />
              <span>A Table for Families</span>
            </span>

            <h2 className="section-title story-heading">
              A Dining Haven Designed for Gathering & Comfort.
            </h2>

            <div className="story-body-copy">
              <p>
                At <strong>The Kitchen Garden</strong>, our mission centers around creating a genuine, 
                welcoming destination where families and friends feel right at home. We believe dining out 
                should never feel rushed—it is a cherished moment to connect, share laughter, and relish 
                richly flavored meals together.
              </p>

              <p>
                From sizzling platters that arrive bubbling hot at the table to fragrant dum biryanis and 
                charred tandoor breads, our dishes are planned to bring generations together over food that 
                everyone loves.
              </p>

              {/* Story Narrative Placeholder Notice */}
              <div className="story-note-card">
                <p className="story-note-title">Authentic Story Documentation</p>
                <p className="story-note-desc">
                  The personalized founding story, culinary heritage, and leadership philosophy of 
                  The Kitchen Garden can be expanded here once provided by the restaurant team.
                </p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="story-pillars">
              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Heart size={18} />
                </div>
                <div>
                  <h4 className="pillar-title">Welcoming Hospitality</h4>
                  <p className="pillar-desc">Caring, attentive service attentive to family dining needs.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <UtensilsCrossed size={18} />
                </div>
                <div>
                  <h4 className="pillar-title">Fresh Table Promise</h4>
                  <p className="pillar-desc">Every order is cooked fresh with careful attention to quality.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Asymmetric Visual Composition */}
          <div className="story-visual-column">
            <div className="story-image-main-wrap">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
                alt="The warm and inviting ambiance of the restaurant dining hall"
                className="story-main-image"
                loading="lazy"
                width="500"
                height="620"
              />
              <div className="story-image-badge">
                <span>Relaxed Family Ambiance</span>
              </div>
            </div>

            <div className="story-image-accent-wrap">
              <img
                src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80"
                alt="Culinary presentation of char-grilled tikka"
                className="story-accent-image"
                loading="lazy"
                width="320"
                height="320"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
