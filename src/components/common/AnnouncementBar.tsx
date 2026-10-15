import React, { useState } from 'react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import './AnnouncementBar.css';

export const AnnouncementBar: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const { announcement } = RESTAURANT_CONFIG;

  if (!announcement.enabled || dismissed || !announcement.text) {
    return null;
  }

  return (
    <aside className="announcement-bar" aria-label="Restaurant Announcement">
      <div className="container announcement-inner">
        <div className="announcement-content">
          <span className="announcement-icon-wrap" aria-hidden="true">
            <Sparkles size={14} className="announcement-icon" />
          </span>
          <span className="announcement-text">{announcement.text}</span>
          {announcement.actionLabel && announcement.actionTarget && (
            <a href={announcement.actionTarget} className="announcement-link">
              <span>{announcement.actionLabel}</span>
              <ArrowRight size={13} aria-hidden="true" />
            </a>
          )}
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="announcement-close-btn"
          aria-label="Dismiss announcement"
          title="Dismiss"
        >
          <X size={15} />
        </button>
      </div>
    </aside>
  );
};
