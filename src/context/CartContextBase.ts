import { createContext } from 'react';
import type { MenuItem, CartItem } from '../types';

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItemsCount: number;
  subtotal: number;
  toastMessage: string | null;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
