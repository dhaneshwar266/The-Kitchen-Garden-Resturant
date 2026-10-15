import type { MenuItem } from '../types';

/**
 * THE KITCHEN GARDEN - AUTHENTIC MULTI-CUISINE RESTAURANT MENU
 * 
 * Includes all requested culinary categories:
 * - Momos & Dim Sums
 * - Platters & Sizzlers
 * - Tandoori Starters
 * - Soups
 * - Chinese Starters
 * - Pizza & Pasta
 * - Noodles & Fried Rice
 * - Paneer Specialties
 * - Main Course & Dal
 * - Seasonal Veg & Kofta
 * - Breads & Rice
 * - Snacks, Burgers & Sandwiches
 * - Beverages & Desserts
 * 
 * Items with verified menu pricing have `priceEstimated: false`.
 * Items with temporary INR estimates have `priceEstimated: true`.
 */
export const SAMPLE_MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. MOMOS & DIM SUMS
  // ==========================================
  {
    id: 'momo-1',
    name: 'Steamed Classic Veg Momos',
    description: 'Thin delicate wrappers filled with finely minced garden cabbage, carrots, spring onions, and Himalayan herbs. Served with fiery red dip.',
    price: 140,
    category: 'Momos & Dim Sums',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80',
    portionSize: '6 Pcs • Serves 1-2'
  },
  {
    id: 'momo-2',
    name: 'Crispy Fried Veg Momos',
    description: 'Crisp golden-fried vegetable dumplings with a crunchy outer shell and juicy vegetable filling.',
    price: 160,
    category: 'Momos & Dim Sums',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80',
    portionSize: '6 Pcs • Serves 1-2'
  },
  {
    id: 'momo-3',
    name: 'Tandoori Spiced Paneer Momos',
    description: 'Fresh paneer stuffed dumplings marinated in tandoori red masala, roasted in the clay tandoor with charred onion rings.',
    price: 199,
    category: 'Momos & Dim Sums',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80',
    portionSize: '6 Pcs • Serves 2'
  },
  {
    id: 'momo-4',
    name: 'Chilli Garlic Tossed Momos',
    description: 'Crispy fried dumplings wok-tossed in a pungent Chinese chilli-garlic glaze with spring onions and capsicum.',
    price: 190,
    category: 'Momos & Dim Sums',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80',
    portionSize: '6 Pcs • Serves 2'
  },
  {
    id: 'momo-5',
    name: 'Cheese Corn Steamed Momos',
    description: 'Filled with golden sweet corn and molten cheese, steamed fresh for a comforting mildly spiced flavor.',
    price: 180,
    category: 'Momos & Dim Sums',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80',
    portionSize: '6 Pcs • Serves 1-2'
  },

  // ==========================================
  // 2. PLATTERS & SIZZLERS
  // ==========================================
  {
    id: 'sizzler-1',
    name: 'Kitchen Garden Signature Veg Sizzler',
    description: 'Cast-iron sizzler with grilled cottage cheese steaks, seasoned butter herb rice, charred seasonal veggies, and pepper mushroom sauce.',
    price: 480,
    category: 'Platters & Sizzlers',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Hot Sizzler • Serves 2-3'
  },
  {
    id: 'sizzler-2',
    name: 'Paneer Tikka Makhani Sizzler',
    description: 'Smoked tandoori paneer steaks served over jeera rice, french fries, grilled bell peppers, and velvety makhani sauce.',
    price: 490,
    category: 'Platters & Sizzlers',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Hot Sizzler • Serves 2-3'
  },
  {
    id: 'sizzler-3',
    name: 'Chinese Dragon Sizzler',
    description: 'Sizzling cast-iron platter combining vegetable hakka noodles, fried rice, crispy veg manchurian, chilli paneer, and golden fries.',
    price: 460,
    category: 'Platters & Sizzlers',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Hot Sizzler • Serves 2-3'
  },
  {
    id: 'sizzler-4',
    name: 'TKG Special Tandoori Platter',
    description: 'Chef combination of Paneer Tikka, Mushroom Tikka, Lahori Seekh Kabab, and Tandoori Aloo with mint chutney and laccha onions.',
    price: 520,
    category: 'Platters & Sizzlers',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Assorted Platter • Serves 3-4'
  },
  {
    id: 'sizzler-5',
    name: 'C.G. United Grand Family Platter',
    description: 'Grand family dining feast combining signature curries, choice of tandoori breads, starter platter, biryani handi, raita, and gulab jamun.',
    price: 950,
    category: 'Platters & Sizzlers',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Grand Feast • Serves 4-5'
  },

  // ==========================================
  // 3. TANDOORI STARTERS
  // ==========================================
  {
    id: 'tandoor-1',
    name: 'Tandoori Paneer Tikka',
    description: 'Fresh cottage cheese cubes marinated in ajwain, hung curd, and mustard oil, charred tender in a traditional clay oven.',
    price: 290,
    category: 'Tandoori Starters',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80',
    portionSize: '6 Pcs • Serves 2'
  },
  {
    id: 'tandoor-2',
    name: 'Malai Paneer Tikka',
    description: 'Soft cottage cheese steeped in rich cream, cashew paste, mild cardamom, and white pepper, roasted with a golden glaze.',
    price: 320,
    category: 'Tandoori Starters',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
    portionSize: '6 Pcs • Serves 2'
  },
  {
    id: 'tandoor-3',
    name: 'Tandoori Aloo Tikka',
    description: 'Scooped baby potatoes stuffed with spiced cottage cheese and nuts, grilled over charcoal with a tangy chaat masala sprinkle.',
    price: 250,
    category: 'Tandoori Starters',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=80',
    portionSize: '6 Pcs • Serves 2'
  },
  {
    id: 'tandoor-4',
    name: 'Tandoori Stuffed Mushroom Tikka',
    description: 'Plump button mushrooms filled with spiced cheese and herb stems, coated in roasted gram flour marinade and char-grilled.',
    price: 290,
    category: 'Tandoori Starters',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
    portionSize: '8 Pcs • Serves 2'
  },
  {
    id: 'tandoor-5',
    name: 'Lahori Cheese Seekh Kabab',
    description: 'Finely minced garden vegetables and blended cottage cheese seasoned with mint and cumin, skewered and flame-kissed.',
    price: 300,
    category: 'Tandoori Starters',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80',
    portionSize: '6 Pcs • Serves 2'
  },
  {
    id: 'tandoor-6',
    name: 'Kullhad Kabab',
    description: 'Signature spiced tandoori cottage cheese and vegetable bites served steaming in an earthen clay kullhad with melted herb butter.',
    price: 280,
    category: 'Tandoori Starters',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Earthen Pot • Serves 2'
  },
  {
    id: 'tandoor-7',
    name: 'Tandoori Soya Chaap Tikka',
    description: 'Layered protein-rich soya cutlets infused with tandoori spices and charred over live charcoal for a hearty vegetarian barbecue.',
    price: 280,
    category: 'Tandoori Starters',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80',
    portionSize: '6 Pcs • Serves 2'
  },

  // ==========================================
  // 4. SOUPS
  // ==========================================
  {
    id: 'soup-1',
    name: 'Classic Roasted Tomato Basil Soup',
    description: 'Silky roasted ripe plum tomatoes simmered with fresh basil, cracked pepper, and garlic herb croutons.',
    price: 140,
    category: 'Soups',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Bowl • 250ml'
  },
  {
    id: 'soup-2',
    name: 'Veg Manchow Soup',
    description: 'Popular Indo-Chinese dark soup infused with garlic, coriander, ginger, diced vegetables, and topped with crisp fried noodles.',
    price: 150,
    category: 'Soups',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Bowl with Crispy Noodles'
  },
  {
    id: 'soup-3',
    name: 'Sweet Corn Vegetable Soup',
    description: 'Mild, comforting broth filled with tender golden sweet corn kernels, spring onions, and finely diced garden carrots.',
    price: 150,
    category: 'Soups',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Bowl • 250ml'
  },
  {
    id: 'soup-4',
    name: 'Hot & Sour Vegetable Soup',
    description: 'Zesty and pungent broth flavored with dark soy, vinegar, white pepper, shredded cabbage, carrots, and tofu.',
    price: 150,
    category: 'Soups',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Bowl • 250ml'
  },
  {
    id: 'soup-5',
    name: 'Lemon Coriander Clear Soup',
    description: 'Refreshing clear vegetable broth naturally infused with aromatic coriander stems, fresh lime juice, and diced mushrooms.',
    price: 140,
    category: 'Soups',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Bowl • 250ml'
  },

  // ==========================================
  // 5. CHINESE STARTERS
  // ==========================================
  {
    id: 'chinese-1',
    name: 'Veg Manchurian Dry',
    description: 'Crisp vegetable dumplings tossed with spring onions, garlic, green chillies, and savory dark soya sauce.',
    price: 280,
    category: 'Chinese Starters',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },
  {
    id: 'chinese-2',
    name: 'Chilli Paneer Dry',
    description: 'Crispy cottage cheese cubes stir-fried with diced bell peppers, red onions, garlic, and hot red chilli sauce.',
    price: 360,
    category: 'Chinese Starters',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },
  {
    id: 'chinese-3',
    name: 'Crispy Corn Salt & Pepper',
    description: 'American sweet corn kernels batter-fried till golden crisp and tossed with crushed black pepper, chillies, and scallions.',
    price: 240,
    category: 'Chinese Starters',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },
  {
    id: 'chinese-4',
    name: 'Crispy Veg Spring Rolls',
    description: 'Handmade thin pastry sheets rolled with shredded cabbage, carrots, bell peppers, and flash-fried to an airy crunch.',
    price: 220,
    category: 'Chinese Starters',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    portionSize: '6 Pcs with Sweet Chilli Dip'
  },
  {
    id: 'chinese-5',
    name: 'Honey Chilli Potato',
    description: 'Crisp potato fingers glazed in a sticky sweet and spicy honey chilli sauce, garnished with toasted white sesame seeds.',
    price: 230,
    category: 'Chinese Starters',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },
  {
    id: 'chinese-6',
    name: 'Soya Chaap Chilly',
    description: 'Tender soya chaap chunks tossed in a fiery wok with green peppers, onions, soy sauce, and aromatic garlic.',
    price: 320,
    category: 'Chinese Starters',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },

  // ==========================================
  // 6. PIZZA & PASTA
  // ==========================================
  {
    id: 'pizza-1',
    name: 'Classic Margherita Pizza (8")',
    description: 'Stone-baked thin crust pizza topped with house tomato marinara, fresh basil leaves, and bubbling mozzarella cheese.',
    price: 260,
    category: 'Pizza & Pasta',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
    portionSize: '8 Inch • 4 Slices'
  },
  {
    id: 'pizza-2',
    name: 'Farmhouse Garden Special Pizza (8")',
    description: 'Loaded with crunchy bell peppers, sweet corn, black olives, red onions, sliced mushrooms, and double cheese.',
    price: 310,
    category: 'Pizza & Pasta',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    portionSize: '8 Inch • 4 Slices'
  },
  {
    id: 'pizza-3',
    name: 'TKG Paneer Tikka Pizza (8")',
    description: 'Desi fusion pizza with spicy clay-oven roasted paneer tikka, red paprika, sliced onions, and melted cheese.',
    price: 340,
    category: 'Pizza & Pasta',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    portionSize: '8 Inch • 4 Slices'
  },
  {
    id: 'pasta-1',
    name: 'Creamy Alfredo White Sauce Pasta',
    description: 'Penne pasta tossed in velvety butter, garlic, parmesan cream sauce with tender broccoli florets and black olives.',
    price: 280,
    category: 'Pizza & Pasta',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Bowl with Garlic Bread'
  },
  {
    id: 'pasta-2',
    name: 'Arrabbiata Spicy Red Sauce Pasta',
    description: 'Penne cooked in a zesty Italian plum tomato sauce with fresh garlic, dried red chilli flakes, and fresh basil.',
    price: 260,
    category: 'Pizza & Pasta',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Bowl with Garlic Bread'
  },
  {
    id: 'pasta-3',
    name: 'Pink Sauce Fusion Pasta',
    description: 'The perfect harmonious blend of creamy cheese alfredo and tangy arrabbiata sauce with sautéed mushrooms.',
    price: 290,
    category: 'Pizza & Pasta',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Bowl with Garlic Bread'
  },

  // ==========================================
  // 7. NOODLES & FRIED RICE
  // ==========================================
  {
    id: 'noodle-1',
    name: 'Veg Hakka Noodles',
    description: 'Wok-tossed thin noodles with crunchy cabbage, julienned carrots, capsicum, and light soy sauce seasoning.',
    price: 210,
    category: 'Noodles & Fried Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },
  {
    id: 'noodle-2',
    name: 'Singapuri Spicy Noodles',
    description: 'Flavorsome wok noodles tossed with yellow curry powder, red bell peppers, scallions, and crushed pepper.',
    price: 230,
    category: 'Noodles & Fried Rice',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },
  {
    id: 'noodle-3',
    name: 'Schezwan Chilli Garlic Noodles',
    description: 'Spicy noodles stir-fried with house-crafted fiery Schezwan sauce, crushed garlic, and spring onion greens.',
    price: 220,
    category: 'Noodles & Fried Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },
  {
    id: 'noodle-4',
    name: 'Peri Peri Tossed Noodles',
    description: 'Fusion style noodles seasoned with fiery African peri-peri spices, roasted bell peppers, and sweet corn.',
    price: 240,
    category: 'Noodles & Fried Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },
  {
    id: 'rice-1',
    name: 'Classic Vegetable Fried Rice',
    description: 'Aromatic basmati rice stir-fried over high flame with tender carrots, green beans, cabbage, and spring onion.',
    price: 210,
    category: 'Noodles & Fried Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },
  {
    id: 'rice-2',
    name: 'Spicy Schezwan Fried Rice',
    description: 'Long-grain basmati rice tossed in spicy red chilli paste, garlic, and fresh vegetables.',
    price: 230,
    category: 'Noodles & Fried Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },
  {
    id: 'rice-3',
    name: 'Palak Paneer Khichdi',
    description: 'Signature comforting one-pot khichdi layered with pureed garden spinach, fresh paneer cubes, and desi ghee garlic tadka.',
    price: 321,
    category: 'Noodles & Fried Rice',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Bowl with Curd & Pickle • Serves 2'
  },

  // ==========================================
  // 8. PANEER SPECIALTIES
  // ==========================================
  {
    id: 'paneer-1',
    name: 'Paneer Lababdar',
    description: 'Soft cottage cheese chunks and grated paneer simmered in an indulgent tomato, onion, and cashew gravy scented with kasoori methi.',
    price: 399,
    category: 'Paneer Specialties',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Handi • Serves 2-3'
  },
  {
    id: 'paneer-2',
    name: 'Paneer Butter Masala',
    description: 'Classic cottage cheese cubes simmered in a velvety, rich tomato makhani gravy enriched with fresh butter and cream.',
    price: 389,
    category: 'Paneer Specialties',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Handi • Serves 2-3'
  },
  {
    id: 'paneer-3',
    name: 'Paneer Kolhapuri',
    description: 'Fiery Maharashtrian-style curry prepared with dry-roasted whole spices, coconut, and crushed red chillies.',
    price: 349,
    category: 'Paneer Specialties',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Handi • Serves 2-3'
  },
  {
    id: 'paneer-4',
    name: 'Kadhai Paneer',
    description: 'Cottage cheese pieces tossed with freshly ground coriander, chunky capsicum, onions, and spicy tomato bhuna gravy.',
    price: 360,
    category: 'Paneer Specialties',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Handi • Serves 2-3'
  },
  {
    id: 'paneer-5',
    name: 'Shahi Royal Paneer',
    description: 'Delicate white cashew and melon-seed gravy mildly flavored with saffron, green cardamom, and tender paneer.',
    price: 380,
    category: 'Paneer Specialties',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Handi • Serves 2-3'
  },
  {
    id: 'paneer-6',
    name: 'Palak Lasooni Paneer',
    description: 'Nutritious puree of fresh garden spinach tempered with browned garlic, cumin, and soft paneer cubes.',
    price: 340,
    category: 'Paneer Specialties',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Handi • Serves 2-3'
  },

  // ==========================================
  // 9. MAIN COURSE & DAL
  // ==========================================
  {
    id: 'dal-1',
    name: 'Slow Simmered Dal Makhani',
    description: 'Black urad lentils and kidney beans slow-cooked overnight on charcoal embers with fresh butter and clotted cream.',
    price: 280,
    category: 'Main Course & Dal',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Handi • Serves 2-3'
  },
  {
    id: 'dal-2',
    name: 'Yellow Dal Tadka Desi Ghee',
    description: 'Arhar lentils cooked tender and tempered with smoking desi ghee, cumin seeds, garlic, onions, and whole red chillies.',
    price: 210,
    category: 'Main Course & Dal',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Bowl • Serves 2'
  },
  {
    id: 'dal-3',
    name: 'Home Style Dal Fry',
    description: 'Yellow lentils tempered with fresh chopped tomatoes, onions, ginger, green chillies, and fresh coriander.',
    price: 190,
    category: 'Main Course & Dal',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Bowl • Serves 2'
  },
  {
    id: 'main-punjabi-1',
    name: 'Punjabi Chhole Masala',
    description: 'Amritsari style chickpea curry cooked with roasted whole spices, bay leaves, and tangy dried mango powder.',
    price: 260,
    category: 'Main Course & Dal',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Bowl • Serves 2-3'
  },
  {
    id: 'main-sev-1',
    name: 'Dhabe Wali Sev Tamatar',
    description: 'Popular sweet and tangy tomato onion gravy generously topped with crispy spiced ratlami sev.',
    price: 220,
    category: 'Main Course & Dal',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Bowl • Serves 2'
  },

  // ==========================================
  // 10. SEASONAL VEG & KOFTA
  // ==========================================
  {
    id: 'veg-1',
    name: 'Kitchen Garden Mix Vegetable Melange',
    description: 'Hand-picked baby corn, carrots, beans, cauliflower, and green peas tossed in an aromatic bhuna masala.',
    price: 260,
    category: 'Seasonal Veg & Kofta',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Bowl • Serves 2-3'
  },
  {
    id: 'veg-2',
    name: 'Lasooni Corn Palak',
    description: 'Fresh spinach puree paired with juicy golden sweet corn and generous golden garlic cloves.',
    price: 280,
    category: 'Seasonal Veg & Kofta',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Bowl • Serves 2-3'
  },
  {
    id: 'veg-3',
    name: 'Veg Jalfrezi',
    description: 'Baton-cut seasonal vegetables tossed with vinegar, bell peppers, tomatoes, and ground spices.',
    price: 260,
    category: 'Seasonal Veg & Kofta',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Bowl • Serves 2-3'
  },
  {
    id: 'veg-4',
    name: 'Bhindi Do Pyaza',
    description: 'Crisp fried tender ladyfingers tossed with double the quantity of caramelized shallots and dry amchur.',
    price: 240,
    category: 'Seasonal Veg & Kofta',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Bowl • Serves 2'
  },
  {
    id: 'veg-5',
    name: 'Mushroom Kadhai Latpata',
    description: 'Fresh button mushrooms tossed with crunchy capsicum in a thick, semi-dry aromatic onion tomato gravy.',
    price: 290,
    category: 'Seasonal Veg & Kofta',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Bowl • Serves 2-3'
  },
  {
    id: 'kofta-1',
    name: 'Royal Shahi Malai Kofta',
    description: 'Melt-in-mouth cottage cheese and potato dumplings stuffed with nuts, simmered in a silky sweet-savory cashew gravy.',
    price: 340,
    category: 'Seasonal Veg & Kofta',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Bowl (4 Koftas) • Serves 2-3'
  },
  {
    id: 'kofta-2',
    name: 'Veg Nargisi Kofta Curry',
    description: 'Spiced vegetable croquettes simmered in an aromatic golden tomato gravy finished with cream.',
    price: 320,
    category: 'Seasonal Veg & Kofta',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
    portionSize: 'Bowl (4 Koftas) • Serves 2-3'
  },

  // ==========================================
  // 11. BREADS & RICE
  // ==========================================
  {
    id: 'bread-tandoori-1',
    name: 'Plain Tandoori Roti',
    description: 'Crisp whole wheat flatbread freshly roasted in clay oven.',
    price: 25,
    category: 'Breads & Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
    portionSize: '1 Roti'
  },
  {
    id: 'bread-tandoori-2',
    name: 'Butter Tandoori Roti',
    description: 'Clay-oven baked whole wheat roti brushed with fresh dairy butter.',
    price: 30,
    category: 'Breads & Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
    portionSize: '1 Roti'
  },
  {
    id: 'bread-naan-1',
    name: 'Butter Naan',
    description: 'Fluffy leavened refined flour bread charred in tandoor and brushed generously with butter.',
    price: 60,
    category: 'Breads & Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
    portionSize: '1 Naan • Cut into 3'
  },
  {
    id: 'bread-naan-2',
    name: 'Garlic Butter Naan',
    description: 'Leavened flatbread topped with finely minced golden garlic and fresh cilantro butter.',
    price: 80,
    category: 'Breads & Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
    portionSize: '1 Naan • Cut into 3'
  },
  {
    id: 'bread-naan-3',
    name: 'Stuffed Cheese Garlic Naan',
    description: 'Artisanal naan stuffed with spiced cheese and coated with roasted garlic butter.',
    price: 100,
    category: 'Breads & Rice',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
    portionSize: '1 Stuffed Naan'
  },
  {
    id: 'bread-kulcha-1',
    name: 'TKG Special Amritsari Kulcha',
    description: 'Crispy, flaky tandoori kulcha stuffed with spiced potatoes and onions, served with pickled onions.',
    price: 100,
    category: 'Breads & Rice',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    portionSize: '1 Kulcha'
  },
  {
    id: 'bread-paratha-1',
    name: 'Multigrain Laccha Paratha',
    description: 'Layered, flaky artisanal whole wheat flatbread baked crisp in tandoor with desi ghee.',
    price: 50,
    category: 'Breads & Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    portionSize: '1 Paratha'
  },
  {
    id: 'bread-missi-1',
    name: 'Traditional Missi Roti',
    description: 'Gram flour and whole wheat flatbread infused with ajwain, onions, and kasoori methi.',
    price: 40,
    category: 'Breads & Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    portionSize: '1 Roti'
  },
  {
    id: 'bread-aloo-1',
    name: 'Aloo Paratha with Curd & Pickle',
    description: 'Large tawa-griddled whole wheat flatbread stuffed with spiced potato mash, served with fresh curd and pickle.',
    price: 229,
    category: 'Breads & Rice',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    portionSize: '2 Parathas with Curd'
  },
  {
    id: 'rice-steamed-1',
    name: 'Steamed Aged Basmati Rice',
    description: 'Fluffy long-grain aromatic steamed basmati rice.',
    price: 140,
    category: 'Breads & Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },
  {
    id: 'rice-jeera-1',
    name: 'Fragrant Jeera Pulao',
    description: 'Long-grain basmati tempered with desi ghee roasted cumin seeds and caramelized onions.',
    price: 180,
    category: 'Breads & Rice',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Platter • Serves 2'
  },
  {
    id: 'rice-biryani-1',
    name: 'Kitchen Garden Claypot Dum Biryani',
    description: 'Aged basmati rice dum-cooked with saffron milk, ghee, and spiced seasonal vegetables. Served with cucumber raita.',
    price: 340,
    category: 'Breads & Rice',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Earthen Handi with Raita • Serves 2'
  },

  // ==========================================
  // 12. SNACKS, BURGERS & SANDWICHES
  // ==========================================
  {
    id: 'snack-burger-1',
    name: 'TKG Veggie Cheese Burger',
    description: 'Crispy crumbed vegetable patty, melted cheddar cheese slice, fresh lettuce, tomato slices, and herb mayonnaise in a toasted bun.',
    price: 180,
    category: 'Snacks, Burgers & Sandwiches',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Burger with Salted Fries'
  },
  {
    id: 'snack-burger-2',
    name: 'Double Patty Supreme Cheese Burger',
    description: 'Two vegetable patties layered with double cheese, caramelized onions, jalapeños, and tangy cocktail sauce.',
    price: 220,
    category: 'Snacks, Burgers & Sandwiches',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Large Burger with Fries'
  },
  {
    id: 'snack-sand-1',
    name: 'Mix Veg Grilled Cheese Sandwich',
    description: 'Triple-decker grilled sandwich filled with crisp cucumbers, tomatoes, capsicum, mint chutney, and gooey melted cheese.',
    price: 160,
    category: 'Snacks, Burgers & Sandwiches',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    portionSize: '4 Cut Triangles with Chips'
  },
  {
    id: 'snack-sand-2',
    name: 'Paneer Tikka Club Sandwich',
    description: 'Toasted multi-grain bread packed with spiced paneer tikka, sliced onions, tomatoes, and spicy tandoori mayonnaise.',
    price: 190,
    category: 'Snacks, Burgers & Sandwiches',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    portionSize: '4 Cut Triangles with Chips'
  },
  {
    id: 'snack-fries-1',
    name: 'Classic Salted French Fries',
    description: 'Crisp golden potato fries lightly salted, served with tomato ketchup.',
    price: 120,
    category: 'Snacks, Burgers & Sandwiches',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Basket • Serves 1-2'
  },
  {
    id: 'snack-fries-2',
    name: 'Peri Peri Masala Fries',
    description: 'Golden french fries tossed with zesty African bird’s eye peri-peri spice blend.',
    price: 140,
    category: 'Snacks, Burgers & Sandwiches',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: true,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Basket • Serves 1-2'
  },

  // ==========================================
  // 13. BEVERAGES & DESSERTS
  // ==========================================
  {
    id: 'dessert-1',
    name: 'Sizzling Brownie with Vanilla Ice Cream',
    description: 'Fresh walnut brownie served sizzling on a cast-iron skillet with rich chocolate fudge lava and a scoop of vanilla ice cream.',
    price: 220,
    category: 'Beverages & Desserts',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Sizzler Plate • Serves 1-2'
  },
  {
    id: 'dessert-2',
    name: 'Vanilla Scoop with Hot Chocolate Fudge',
    description: 'Two scoops of dairy vanilla ice cream generously drizzled with warm chocolate ganache and roasted nuts.',
    price: 140,
    category: 'Beverages & Desserts',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Sundae Cup'
  },
  {
    id: 'dessert-3',
    name: 'Warm Gulab Jamun with Rabdi',
    description: 'Soft melt-in-mouth milk-solid dumplings soaked in rose syrup, paired with chilled saffron malai rabdi.',
    price: 140,
    category: 'Beverages & Desserts',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14d48?auto=format&fit=crop&w=600&q=80',
    portionSize: '2 Pcs with Rabdi'
  },
  {
    id: 'dessert-4',
    name: 'Saffron Pistachio Matka Kulfi',
    description: 'Traditional slow-reduced milk kulfi infused with Kashmiri saffron strands and crushed green pistachios in an earthen pot.',
    price: 130,
    category: 'Beverages & Desserts',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Earthen Matka'
  },
  {
    id: 'bev-1',
    name: 'Fresh Lime Soda (Sweet & Salted)',
    description: 'Freshly squeezed lime juice with a choice of sparkling soda, sugar syrup, and rock salt.',
    price: 90,
    category: 'Beverages & Desserts',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Tall Glass • 350ml'
  },
  {
    id: 'bev-2',
    name: 'Garden Fresh Mint Mojito',
    description: 'Muddled fresh garden mint, lime wedges, simple cane syrup, and sparkling soda over crushed ice.',
    price: 140,
    category: 'Beverages & Desserts',
    isVeg: true,
    isChefSpecial: true,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Tall Glass • 350ml'
  },
  {
    id: 'bev-3',
    name: 'Cold Coffee with Vanilla Ice Cream',
    description: 'Rich chilled blended espresso coffee crowned with a creamy vanilla ice cream scoop and chocolate dusting.',
    price: 160,
    category: 'Beverages & Desserts',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Tall Glass • 350ml'
  },
  {
    id: 'bev-4',
    name: 'Sweet Punjabi Malai Lassi',
    description: 'Traditional thick churned creamy curd lassi topped with fresh malai and chopped pistachios.',
    price: 110,
    category: 'Beverages & Desserts',
    isVeg: true,
    isChefSpecial: false,
    isSpicy: false,
    priceEstimated: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
    portionSize: 'Kulhad Glass • 300ml'
  }
];
