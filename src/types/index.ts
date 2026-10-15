export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  isVeg: boolean;
  isChefSpecial?: boolean;
  isSpicy?: boolean;
  image: string;
  portionSize?: string;
  priceEstimated?: boolean;
}

export type MenuCategory = 
  | 'All'
  | 'Momos & Dim Sums'
  | 'Platters & Sizzlers'
  | 'Tandoori Starters'
  | 'Soups'
  | 'Chinese Starters'
  | 'Pizza & Pasta'
  | 'Noodles & Fried Rice'
  | 'Paneer Specialties'
  | 'Main Course & Dal'
  | 'Seasonal Veg & Kofta'
  | 'Breads & Rice'
  | 'Snacks, Burgers & Sandwiches'
  | 'Beverages & Desserts';

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  instructions?: string;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequests?: string;
}

export interface Offer {
  id: string;
  title: string;
  badge?: string;
  description: string;
  eligibility: string;
  validity: string;
  couponCode?: string;
  isFeatured?: boolean;
  isVerified: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  reviewText: string;
  source: 'Google Review' | 'Dining Guest';
  occasion?: string;
  verified: boolean;
}

export interface RestaurantConfig {
  brandName: string;
  tagline: string;
  concept: string;
  mapsUrl: string;
  directionsUrl?: string;
  displayAddress: string;
  isAddressVerified: boolean;
  phone: string;
  isPhoneConfigured: boolean;
  whatsAppPhone: string;
  isWhatsAppConfigured: boolean;
  openingHours: {
    lunch: string;
    dinner: string;
    days: string;
  };
  announcement: {
    enabled: boolean;
    text: string;
    actionLabel?: string;
    actionTarget?: string;
  };
  socialLinks: {
    instagram?: string;
    facebook?: string;
  };
}
