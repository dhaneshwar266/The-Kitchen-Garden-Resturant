import React, { useState, useEffect } from 'react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';
import { useCart } from '../../context/useCart';
import { ShoppingBag, Menu, X, CalendarCheck, UtensilsCrossed } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  onOpenReservation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Offers', href: '#offers' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Text Logo Treatment */}
        <a href="#" className="brand-logo" aria-label="The Kitchen Garden Home">
          <div className="brand-icon-wrap" aria-hidden="true">
            <UtensilsCrossed size={20} className="brand-symbol" />
          </div>
          <div className="brand-text-group">
            <span className="brand-title">THE KITCHEN GARDEN</span>
            <span className="brand-subtitle">FAMILY RESTAURANT</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="desktop-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-item-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action Buttons */}
        <div className="nav-actions">
          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="cart-toggle-btn"
            aria-label={`Open shopping cart (${totalItemsCount} items)`}
            title="View Cart"
          >
            <ShoppingBag size={20} />
            {totalItemsCount > 0 && (
              <span className="cart-badge-count">{totalItemsCount}</span>
            )}
          </button>

          {/* Desktop Reserve Button */}
          <a
            href="#reserve"
            onClick={onOpenReservation}
            className="btn-primary nav-reserve-btn"
          >
            <CalendarCheck size={16} aria-hidden="true" />
            <span>Reserve Table</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'is-active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-active' : ''}`}>
        <div className="mobile-nav-header">
          <div className="brand-text-group">
            <span className="brand-title">{RESTAURANT_CONFIG.brandName}</span>
            <span className="brand-subtitle">FAMILY RESTAURANT</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-close-btn"
            aria-label="Close Navigation Menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav-menu" aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-nav-footer">
          <a
            href="#reserve"
            className="btn-primary w-full"
            onClick={() => {
              handleLinkClick();
              if (onOpenReservation) onOpenReservation();
            }}
          >
            <CalendarCheck size={18} />
            <span>Reserve a Table</span>
          </a>
          <a
            href={RESTAURANT_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full"
            onClick={handleLinkClick}
          >
            <span>View on Google Maps</span>
          </a>
        </div>
      </div>
    </header>
  );
};
