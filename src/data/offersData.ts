import type { Offer } from '../types';

/**
 * RESTAURANT OFFERS CONFIGURATION
 * 
 * Instructions: Do not invent discounts or expiry dates.
 * Configure live promotional packages here once approved by restaurant management.
 */
export const RESTAURANT_OFFERS: Offer[] = [
  {
    id: 'offer-family-gathering',
    title: 'Family Celebration Dining Packages',
    badge: 'Gathering Package',
    description: 'Customized multi-course banquet dining for tables of 8 or more. Inquire with our hospitality team when booking.',
    eligibility: 'Valid for pre-reserved family tables of 8+ guests',
    validity: 'Ongoing upon reservation inquiry',
    couponCode: 'FAMILYGARDEN',
    isFeatured: true,
    isVerified: false // Unverified until restaurant owner activates it
  },
  {
    id: 'offer-weekday-lunch',
    title: 'Corporate & Midday Executive Platters',
    badge: 'Midday Dining',
    description: 'Curated combination meals prepared swift and fresh for midday dining.',
    eligibility: 'Available Monday to Friday, 12:00 PM – 3:30 PM',
    validity: 'Dine-in only during weekday lunch hours',
    couponCode: 'LUNCHGARDEN',
    isFeatured: false,
    isVerified: false
  }
];

// Toggle whether to show the configurable draft offers or a clean "Stay Tuned" state
export const SHOW_DRAFT_OFFERS_PREVIEW = true;
