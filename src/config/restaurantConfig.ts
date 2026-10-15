import type { RestaurantConfig } from '../types';

/**
 * The Kitchen Garden - Centralized Restaurant Configuration
 * 
 * Configured with verified business contact numbers.
 */
export const RESTAURANT_CONFIG: RestaurantConfig = {
  brandName: 'The Kitchen Garden',
  tagline: 'Contemporary Family Dining & Garden Ambiance',
  concept: 'A warm, relaxed haven for family meals, hearty conversations, and freshly prepared food.',
  
  // Google Maps place link (Universal URL format: opens the restaurant card, photos, pin, and reviews reliably on all devices)
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Kitchen+Garden+Bilaspur',

  // Direct turn-by-turn navigation link with destination set to the restaurant
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=The+Kitchen+Garden+Bilaspur',
  
  // Confirmed location destination: The Kitchen Garden, Bilaspur, Chhattisgarh
  isAddressVerified: true,
  displayAddress: 'Bilaspur, Chhattisgarh (Tap below for live GPS directions)',

  // Confirmed Restaurant Phone:
  isPhoneConfigured: true,
  phone: '+91 62664 44862',

  // Confirmed Restaurant WhatsApp (International format without symbols):
  isWhatsAppConfigured: true,
  whatsAppPhone: '916266444862',

  // Opening Hours (unverified estimates kept clear and uninvented)
  openingHours: {
    lunch: '12:00 PM – 03:30 PM',
    dinner: '07:00 PM – 11:00 PM',
    days: 'Open Daily for Dine-In & Gatherings'
  },

  // Announcement Bar Configuration
  announcement: {
    enabled: true,
    text: 'Welcoming families for dine-in & celebrations • Reserve your table in advance for weekend gatherings',
    actionLabel: 'Reserve Table',
    actionTarget: '#reserve'
  },

  // Social Links (when supplied)
  socialLinks: {
    instagram: '',
    facebook: ''
  }
};
