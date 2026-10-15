import type { CustomerReview } from '../types';

/**
 * Reviews Data Module.
 * 
 * Rules: Only display real, verified reviews and ratings when supplied by the restaurant.
 * The entries below are marked as preview placeholders or can be replaced with verified
 * Google reviews once synced.
 */
export const SAMPLE_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Rajesh K. & Family',
    rating: 5,
    date: 'Sample Review Placeholder',
    reviewText: 'Wonderful environment for family dinners. The seating is spacious, the staff is very attentive, and the sizzling starters were loved by both the kids and elders.',
    source: 'Dining Guest',
    occasion: 'Family Weekend Dinner',
    verified: false
  },
  {
    id: 'rev-2',
    author: 'Sunita M.',
    rating: 5,
    date: 'Sample Review Placeholder',
    reviewText: 'Great peaceful dining ambiance with an urban touch. The paneer tikka and slow-simmered dal were cooked to perfection. A very welcoming atmosphere.',
    source: 'Google Review',
    occasion: 'Casual Dining',
    verified: false
  },
  {
    id: 'rev-3',
    author: 'Anand V.',
    rating: 5,
    date: 'Sample Review Placeholder',
    reviewText: 'Booked a table for our family get-together. Smooth table arrangement, quick service, and clean presentation. Will definitely visit again for family occasions.',
    source: 'Dining Guest',
    occasion: 'Family Reunion',
    verified: false
  }
];
