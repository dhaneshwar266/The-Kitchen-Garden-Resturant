import React, { useState, useMemo } from 'react';
import { SAMPLE_MENU_ITEMS } from '../../data/menuData';
import type { MenuCategory } from '../../types';
import { MenuCard } from './MenuCard';
import { Search, Info, SlidersHorizontal, RotateCcw } from 'lucide-react';
import './MenuSection.css';

interface MenuSectionProps {
  onPreviewImage?: (url: string, title: string) => void;
}

const CATEGORIES: MenuCategory[] = [
  'All',
  'Momos & Dim Sums',
  'Platters & Sizzlers',
  'Tandoori Starters',
  'Soups',
  'Chinese Starters',
  'Pizza & Pasta',
  'Noodles & Fried Rice',
  'Paneer Specialties',
  'Main Course & Dal',
  'Seasonal Veg & Kofta',
  'Breads & Rice',
  'Snacks, Burgers & Sandwiches',
  'Beverages & Desserts'
];

export const MenuSection: React.FC<MenuSectionProps> = ({ onPreviewImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return SAMPLE_MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary filter match
      if (dietFilter === 'veg' && !item.isVeg) {
        return false;
      }
      if (dietFilter === 'non-veg' && item.isVeg) {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const nameMatch = item.name.toLowerCase().includes(query);
        const descMatch = item.description.toLowerCase().includes(query);
        return nameMatch || descMatch;
      }
      return true;
    });
  }, [selectedCategory, dietFilter, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setDietFilter('all');
    setSearchQuery('');
  };

  return (
    <section id="menu" className="menu-section section-wrapper" aria-label="Restaurant Menu">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <SlidersHorizontal size={13} />
            <span>Curated Culinary Flavours</span>
          </span>
          <h2 className="section-title">Explore Our Menu</h2>
          <p className="section-subtitle">
            From sizzlers and claypot biryanis to comforting homestyle curries and artisanal tandoor breads, 
            crafted for families to savor together.
          </p>

          {/* Menu Notice Box */}
          <div className="menu-disclaimer-box" role="note">
            <Info size={16} className="disclaimer-icon" aria-hidden="true" />
            <div className="disclaimer-text">
              <strong>Menu Pricing Transparency:</strong> All verified dishes reflect exact printed prices. Items tagged with <span className="price-est-tag">Est.</span> carry temporary estimates pending restaurant confirmation.
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="menu-controls-bar">
          {/* Search Input */}
          <div className="menu-search-wrapper">
            <Search size={18} className="search-icon" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search dishes, curries, sizzlers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
              aria-label="Search dishes"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Veg / Non-Veg Quick Selector */}
          <div className="diet-toggle-group" role="radiogroup" aria-label="Dietary preferences">
            <button
              onClick={() => setDietFilter('all')}
              className={`diet-btn ${dietFilter === 'all' ? 'active' : ''}`}
              role="radio"
              aria-checked={dietFilter === 'all'}
            >
              All Dishes
            </button>
            <button
              onClick={() => setDietFilter('veg')}
              className={`diet-btn ${dietFilter === 'veg' ? 'active' : ''}`}
              role="radio"
              aria-checked={dietFilter === 'veg'}
            >
              <span className="badge-veg">
                <span className="badge-veg-dot"></span>
              </span>
              <span>Pure Veg</span>
            </button>
            <button
              onClick={() => setDietFilter('non-veg')}
              className={`diet-btn ${dietFilter === 'non-veg' ? 'active' : ''}`}
              role="radio"
              aria-checked={dietFilter === 'non-veg'}
            >
              <span className="badge-nonveg">
                <span className="badge-nonveg-dot"></span>
              </span>
              <span>Non-Veg</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <nav className="menu-category-nav" aria-label="Menu categories">
          <ul className="category-tabs-list">
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-tab-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                  aria-pressed={selectedCategory === cat}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Grid / Empty State */}
        {filteredItems.length > 0 ? (
          <div className="menu-grid">
            {filteredItems.map((dish) => (
              <MenuCard
                key={dish.id}
                item={dish}
                onSelectImage={onPreviewImage}
              />
            ))}
          </div>
        ) : (
          <div className="menu-empty-state">
            <p className="empty-state-title">No dishes found matching your selection</p>
            <p className="empty-state-subtitle">
              Try adjusting your search terms or dietary filters to view available options.
            </p>
            <button onClick={handleResetFilters} className="btn-secondary empty-reset-btn">
              <RotateCcw size={15} />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
