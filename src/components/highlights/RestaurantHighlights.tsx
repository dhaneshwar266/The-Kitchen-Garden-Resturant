import React from 'react';
import { Users, Leaf, HeartHandshake, Utensils } from 'lucide-react';
import './RestaurantHighlights.css';

export const RestaurantHighlights: React.FC = () => {
  const highlights = [
    {
      icon: <Users size={24} className="highlight-icon" />,
      title: 'Family-First Dining',
      description: 'Generous booth and table arrangements built for comfort across all generations, from young kids to grandparents.'
    },
    {
      icon: <Leaf size={24} className="highlight-icon" />,
      title: 'Cooked Fresh to Order',
      description: 'Every platter, bread, and curry is prepared fresh upon ordering without premature batch heating.'
    },
    {
      icon: <HeartHandshake size={24} className="highlight-icon" />,
      title: 'Celebrations & Gatherings',
      description: 'Whether celebrating a birthday or enjoying a weekend get-together, our team welcomes your group with warmth.'
    },
    {
      icon: <Utensils size={24} className="highlight-icon" />,
      title: 'Relaxed Garden Setting',
      description: 'An unhurried ambiance with contemporary dark tones, ambient greenery, and comfortable lighting.'
    }
  ];

  return (
    <section id="highlights" className="highlights-section" aria-label="Restaurant Highlights">
      <div className="container">
        <div className="highlights-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-card">
              <div className="highlight-icon-box" aria-hidden="true">
                {item.icon}
              </div>
              <h2 className="highlight-card-title">{item.title}</h2>
              <p className="highlight-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
